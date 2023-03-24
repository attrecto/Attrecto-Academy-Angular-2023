import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Badge } from '../badges/classes/badge';
import { BadgeService } from '../badges/services/badge.service';

@Component({
  selector: 'app-badge-edit',
  templateUrl: './badge-edit.component.html',
  styleUrls: ['./badge-edit.component.scss']
})
export class BadgeEditComponent {
  badge: Badge;

  constructor(private route: ActivatedRoute, private badgeService: BadgeService) {
    this.getBadge();
  }

  getBadge() {
    const badgeId = parseInt(this.route.snapshot.paramMap.get('badgeId'));
    return this.badgeService.getBadge(badgeId).subscribe({
      next: (badge: Badge) => {
        this.badge = badge;
      }
    });
  }
}
