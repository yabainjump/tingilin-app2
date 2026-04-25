import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, from, map, of, throwError } from 'rxjs';
import { OfflineActionQueueService } from '../offline/offline-action-queue.service';
import { NetworkStatusService } from '../offline/network-status.service';

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

export interface NotificationsListResponse {
  data: NotificationDto[];
  unreadCount: number;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
  };
}

@Injectable({ providedIn: 'root' })
export class NotificationsApiService {
  private base = `${environment.apiBaseUrl}`;

  constructor(
    private http: HttpClient,
    private offlineQueue: OfflineActionQueueService,
    private networkStatus: NetworkStatusService,
  ) {}

  me(page = 1, limit = 20, unreadOnly = false) {
    const u = unreadOnly ? '1' : '0';
    return this.http.get<NotificationsListResponse>(
      `${this.base}/notifications/me?page=${page}&limit=${limit}&unreadOnly=${u}`,
    );
  }

  unreadCount() {
    return this.http.get<{ count: number }>(
      `${this.base}/notifications/unread-count`,
    );
  }

  markRead(id: string) {
    if (this.networkStatus.isOffline()) {
      return from(this.offlineQueue.enqueueNotificationMarkRead(id)).pipe(
        map(() => ({ queued: true })),
      );
    }

    return this.http.patch(`${this.base}/notifications/${id}/read`, {}).pipe(
      catchError((error) => {
        if (Number(error?.status ?? 0) !== 0) {
          return throwError(() => error);
        }

        return from(this.offlineQueue.enqueueNotificationMarkRead(id)).pipe(
          map(() => ({ queued: true })),
        );
      }),
    );
  }

  markAllRead() {
    if (this.networkStatus.isOffline()) {
      return from(this.offlineQueue.enqueueNotificationMarkAllRead()).pipe(
        map(() => ({ queued: true })),
      );
    }

    return this.http.patch(`${this.base}/notifications/read-all`, {}).pipe(
      catchError((error) => {
        if (Number(error?.status ?? 0) !== 0) {
          return throwError(() => error);
        }

        return from(this.offlineQueue.enqueueNotificationMarkAllRead()).pipe(
          map(() => ({ queued: true })),
        );
      }),
    );
  }
}
