import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BadgeService} from "../badges/services/badge.service";
import {Badge} from "../badges/classes/badge";

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
    this.badgeService.getBadge(badgeId).subscribe({
      next: (badge) => {
        this.badge = badge;
      }
    })
  }
}
