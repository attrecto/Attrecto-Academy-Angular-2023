import {Component, Input} from '@angular/core';
import {Badge} from "../../../pages/badges/classes/badge";
import {FormGroup, Validators} from "@angular/forms";
import {BadgeService} from "../../../pages/badges/services/badge.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-badge-edit-form',
  templateUrl: './badge-edit-form.component.html',
  styleUrls: ['./badge-edit-form.component.scss']
})
export class BadgeEditFormComponent {
  @Input() badge: Badge;
  badgeCreateForm: FormGroup;

  constructor(private badgeService: BadgeService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.badgeCreateForm = new FormGroup({
      name: new FormGroup(this.badge ? this.badge.name : '', [Validators.required]),
      image: new FormGroup(this.badge ? this.badge.image : '', [Validators.required]),
      description: new FormGroup(this.badge ? this.badge.description : '', [Validators.required]),
    });
  }

  saveForm() {
    const badgeFormData = this.badgeCreateForm.getRawValue();

    if (this.badge) {
      this.badgeService.updateBadge(this.badge.id, badgeFormData).subscribe({
        next: () => {
          this.router.navigate(['badges']);
        }
      });
    } else {
      this.badgeService.createBadge(badgeFormData).subscribe({
        next: () => {
          this.router.navigate(['badges']);
        }
      });
    }
  }
}
