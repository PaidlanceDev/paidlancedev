import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Talent } from '../models/talent';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalentService {
  private http: HttpClient = inject(HttpClient);

  getAllTalents(): Observable<Talent[]> {
    return this.http.get<Talent[]>('data/mock-talents.json');
  }

  getTalentByUsername(username: string): Observable<Talent> {
    return this.getAllTalents().pipe(
    map(talents => {
        const foundTalent = talents.find(talent => talent.username === username);
        if (!foundTalent) {
          throw new Error(`No talent found with username: ${username}`);
        }
        return foundTalent;
      })
    );
  }
}
