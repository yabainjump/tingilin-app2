import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegionOption, USER_REGION_OPTIONS, UserRegion } from './regions';

@Component({
  selector: 'app-region-picker',
  templateUrl: './region-picker.component.html',
  styleUrls: ['./region-picker.component.scss'],
  standalone: false,
})
export class RegionPickerComponent {
  readonly options: RegionOption[] = USER_REGION_OPTIONS;

  @Input() region: UserRegion | null = null;
  @Output() regionChange = new EventEmitter<UserRegion>();

  isSelected(value: UserRegion): boolean {
    return this.region === value;
  }

  select(value: UserRegion): void {
    if (this.region === value) return;
    this.region = value;
    this.regionChange.emit(value);
  }
}