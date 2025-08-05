import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientApiServiceService {
  private SUPABASE_URL = 'https://iggnvcqgfnbgtvxvzugz.supabase.co';
  private SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnZ252Y3FnZm5iZ3R2eHZ6dWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTAyMDEsImV4cCI6MjA2NjMyNjIwMX0.KNkHuVR-iOVxf20tkZfP1wXgq-G7-WJIOVATqOI7dVs';

  private headers = new HttpHeaders({
    'apikey': this.SUPABASE_KEY,
    'Authorization': `Bearer ${this.SUPABASE_KEY}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  login(benutzername: string, passwort: string): Observable<any> {
    const url = `${this.SUPABASE_URL}/rest/v1/tbl_benutzer?benutzername=eq.${benutzername}&passwort=eq.${passwort}&aktiv=is.true`;

    return this.http.get(url, { headers: this.headers });
  }
}
