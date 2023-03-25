import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Badge } from '../classes/badge';
import {User} from "../../users/classes/User";

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private http: HttpClient) { }

  getBadge(badgeId: number) {
    return this.http.get<Badge>(`${environment.apiUrl}/badges/${badgeId}`);
  }

  getBadges(): Observable<Badge[]> {
    return this.http.get<Badge[]>(`${environment.apiUrl}/badges`);
  }

  createBadge(badge: Badge) {
    return this.http.post(`${environment.apiUrl}/badges`, badge);
  }

  updateBadge(id: number, badge: Badge) {
    return this.http.put(`${environment.apiUrl}/badges/${id}`, badge);
  }


  deleteBadge(id: number) {
    return this.http.delete(`${environment.apiUrl}/badges/${id}`);
  }
}