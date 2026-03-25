import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/i18n/language.service';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
  standalone: false,
})
export class LanguageSwitchComponent {
  @Input() compact = false;

  constructor(public readonly language: LanguageService) {}

  setLanguage(next: 'fr' | 'en'): void {
    this.language.use(next);
  }
}
