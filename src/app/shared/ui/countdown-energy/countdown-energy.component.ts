import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-countdown-energy',
  templateUrl: './countdown-energy.component.html',
  styleUrls: ['./countdown-energy.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownEnergyComponent {
  @Input() label = '';
  @Input() value = '--:--:--';
  @Input() progress = 0;
  @Input() compact = false;
  @Input() ended = false;

  get normalizedProgress(): number {
    const value = Number(this.progress);
    if (!Number.isFinite(value)) return 0;
    return Math.max(0, Math.min(100, value));
  }

  get thumbProgress(): number {
    return Math.max(4, Math.min(96, this.normalizedProgress));
  }
}
