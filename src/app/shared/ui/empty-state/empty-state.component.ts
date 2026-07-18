import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  @Input() icon = 'sparkles-outline';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input() actionLabel = '';
  @Input() compact = false;
  @Output() readonly action = new EventEmitter<void>();
}
