import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Badge } from '../../classes/badge';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrls: ['./badge-card.component.scss']
})
export class BadgeCardComponent {
  @Input() badge: Badge;
  @Output()
  deleteClicked = new EventEmitter<number>;
  deleteBadge(badgeId: number, $event: MouseEvent) {
    event.stopPropagation();

    this.deleteClicked.emit(badgeId);
  }
}
