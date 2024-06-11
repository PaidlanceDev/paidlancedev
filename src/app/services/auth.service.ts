import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthChangeEvent, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase!: SupabaseClient;
  user = new BehaviorSubject<User | null>(null);
  userRole = new BehaviorSubject<string | null>(null);
  router = inject(Router);

  constructor() {
		this.supabase = createClient(
      environment.supabase.url,
			environment.supabase.key
    );

    this.supabase.auth.onAuthStateChange(
			(event: AuthChangeEvent, session: Session | null) => {
				console.log(event);
				console.log(session);
				if (session && session.user) {
					this.user.next(session.user);
          this.getUserRole(session.user.id as string);
				} else {
					this.user.next(null);
          this.router.navigate(['/']);
				}
			}
		);
	}

  	// Role
	async getUserRole(id: string) {
    try {
      if (!id) {
        console.error("user ID not found.");
        return null;
      }
      const { data, error } = await this.supabase
        .from("users")
        .select("role")
      if (error) {
        console.error(error);
      } else {
        if (data) {
          this.router.navigate([data[0].role]);
          this.userRole.next(data[0].role);
          console.log("User Role:", this.userRole);
        } else {
          this.router.navigate(['account-type']);
        }
      }
      return data;
    } catch (error: any) {
      console.error(error);
      return null;
    }
	}

  async signInWithGithub() {
		await this.supabase.auth.signInWithOAuth({ provider: "github" });
	}

  async signOut() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/']);
  }

  get currentUser() {
    return this.user.asObservable();
  }

  get currentUserRole() {
    return this.userRole.asObservable();
  }

  getCurrentUser(): Observable<User | null> {
    return this.user.asObservable();
  }
}
