import { Component, OnInit } from '@angular/core';
import { Badge } from './classes/badge';
import { BadgeService } from './services/badge.service';
import {Router} from "@angular/router";
import {User} from "../users/classes/User";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  badges: Badge[];

  constructor(private badgeService: BadgeService, private router: Router) {
  }

  ngOnInit() {
    this.getBadges();
  }

  getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges;
      }
    })
  }

    navigateToCreateBadge() {
      this.router.navigate(['badge-create']);
    }

  navigateToEditBadge(badgeId: number) {
    this.router.navigateByUrl(`badge-edit/${badgeId}`);
  }

  deleteBadge(badgeId: number) {
    this.badgeService.deleteBadge(badgeId).subscribe({
      next: () => {
        this.badges = this.badges.filter((badge: Badge) => {
          return badge.id !== badgeId;
        });
      }
    })
  }
}
