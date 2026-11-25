import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export interface RulesSection {
  title: string;
  items: string[];
}

/**
 * Valide le contenu traduit (RULES_PAGE.SECTIONS) avant affichage: seules des
 * chaines non vides sont rendues, toujours via le binding Angular (pas
 * d'innerHTML). Une cle absente ou mal formee donne une liste vide.
 */
export function normalizeRulesSections(value: unknown): RulesSection[] {
  if (!Array.isArray(value)) return [];
  const out: RulesSection[] = [];
  for (const raw of value) {
    const title = typeof raw?.title === 'string' ? raw.title.trim() : '';
    const items = Array.isArray(raw?.items)
      ? raw.items
          .filter((i: unknown): i is string => typeof i === 'string')
          .map((i: string) => i.trim())
          .filter(Boolean)
      : [];
    if (title && items.length) out.push({ title, items });
  }
  return out;
}

/**
 * Reglement public du jeu (accessible sans compte: landing, inscription,
 * publicite). Le contenu vit dans les fichiers i18n.
 */
@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
  standalone: false,
})
export class RulesPage implements OnInit, OnDestroy {
  sections: RulesSection[] = [];
  private sub?: Subscription;

  constructor(
    private translate: TranslateService,
    private nav: NavController,
  ) {}

  ngOnInit(): void {
    this.sub = this.translate
      .stream('RULES_PAGE.SECTIONS')
      .subscribe((value) => (this.sections = normalizeRulesSections(value)));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /** Lien direct (pub, partage): pas d'historique, on revient a l'accueil. */
  back(): void {
    if (window.history.length > 1) {
      this.nav.back();
    } else {
      void this.nav.navigateRoot('/landing');
    }
  }

  trackByTitle(_: number, s: RulesSection): string {
    return s.title;
  }
}
