// sports.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private apiUrl = 'http://localhost:8081/e/v1/sports'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getSports(): Observable<{ sportId: number, sportName: string, sportUrl: string }[]> {
    return this.http.get<{ data: { sportId: number, sportName: string, sportUrl: string }[] }>(this.apiUrl)
                    .pipe(map(response => response.data));
  }
}
