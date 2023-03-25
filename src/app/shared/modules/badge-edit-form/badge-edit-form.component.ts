import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BadgeService} from "../../../pages/badges/services/badge.service";
import {Router} from "@angular/router";
import {Badge} from "../../../pages/badges/classes/badge";

@Component({
  selector: 'app-badge-edit-form',
  templateUrl: './badge-edit-form.component.html',
  styleUrls: ['./badge-edit-form.component.scss']
})
export class BadgeEditFormComponent implements OnInit{
  @Input() badge: Badge;

  badgeCreateForm: FormGroup;

  constructor(private badgeService: BadgeService, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.badgeCreateForm = new FormGroup({
      name: new FormControl(this.badge ? this.badge.name : '', [Validators.required]),
      description: new FormControl(this.badge ? this.badge.description : '', [Validators.required]),
      image: new FormControl(this.badge ? this.badge.image : '', [Validators.required]),
    });
  }

  saveForm(){
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
