import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DrawsService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getHomeFeed() {
    // adapte les routes selon ton backend
    return this.http.get(`${this.base}/draws/home`);
  }

  getCategories() {
    return this.http.get(`${this.base}/categories`);
  }
}
