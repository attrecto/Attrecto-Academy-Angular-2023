import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Badge } from '../classes/badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private httpClient: HttpClient) { }

  getBadge(badgeId: number) {
    return this.httpClient.get<Badge>(`${environment.apiUrl}/badges/${badgeId}`);
  }

  getBadges(): Observable<Badge[]> {
    return this.httpClient.get<Badge[]>(`${environment.apiUrl}/badges`);
  }

  createBadge(badge: Badge) {
    return this.httpClient.post(`${environment.apiUrl}/badges`, badge);
  }

  updateBadge(id: number, badge: Badge) {
    return this.httpClient.put(`${environment.apiUrl}/badges/${id}`, badge);
  }

  deleteBadge(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/badges/${id}`);
  }
}
