import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../environments/dev.environmets';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = API_URL; // You must contain api url in env file
  constructor(private http: HttpClient) {}

  public doHttpGet<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`);
  }
}
