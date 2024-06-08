import { Component } from "@angular/core";
import {
	Validators,
	FormsModule,
	ReactiveFormsModule,
	FormBuilder,
} from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
// import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
	],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	constructor(private fb: FormBuilder) {}

	signupForm = this.fb.group({
		email: ["", [Validators.required, Validators.email]],
	});

	email = this.signupForm.get("email");

	async onGithubSignIn() {
		// await this.authService.signInWithGithub();
	}

	async onGoogleSignIn() {
		// await this.authService.signInWithGoogle();
	}

	async onSignup(): Promise<void> {
		try {
			const email = this.signupForm.value.email as string;
			// await this.authService.signIn(email);
			// const { error } = await this.authService.signIn(email);
			// if (error) throw error
			// alert('Check your email for the login link!')
			// this.notificationService.success("Check your email for the login link!");
		} catch (error) {
			if (error instanceof Error) {
				// this.notificationService.error(error.message);
			}
		} finally {
			// this.dialogRef.close();
		}
	}
}
