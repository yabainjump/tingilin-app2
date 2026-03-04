import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface NotificationDto {
  _id: string;
  userId: string;
  type: string;
  title: string;
  body: string;
  data: any;
  readAt: string | null;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationsApiService {
  private base = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  me(page = 1, limit = 20, unreadOnly = false) {
    const u = unreadOnly ? '1' : '0';
    return this.http.get<{ data: NotificationDto[] }>(
      `${this.base}/notifications/me?page=${page}&limit=${limit}&unreadOnly=${u}`,
    );
  }

  unreadCount() {
    return this.http.get<{ count: number }>(
      `${this.base}/notifications/unread-count`,
    );
  }

  markRead(id: string) {
    return this.http.patch(`${this.base}/notifications/${id}/read`, {});
  }

  markAllRead() {
    return this.http.patch(`${this.base}/notifications/read-all`, {});
  }
}
