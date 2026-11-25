import { Subject } from 'rxjs';
import { normalizeRulesSections, RulesPage } from './rules.page';

describe('RulesPage', () => {
  it('keeps only well-formed sections with non-empty text', () => {
    expect(normalizeRulesSections(undefined)).toEqual([]);
    expect(normalizeRulesSections('RULES_PAGE.SECTIONS')).toEqual([]);
    expect(
      normalizeRulesSections([
        { title: ' Qui peut participer ', items: [' 18+ ', '', 42, null] },
        { title: '', items: ['sans titre'] },
        { title: 'Sans contenu', items: [] },
        { title: 'Pas une liste', items: 'x' },
        null,
      ]),
    ).toEqual([{ title: 'Qui peut participer', items: ['18+'] }]);
  });

  it('follows the current language', () => {
    const stream$ = new Subject<unknown>();
    const translate = jasmine.createSpyObj('TranslateService', ['stream']);
    translate.stream.and.returnValue(stream$);
    const nav = jasmine.createSpyObj('NavController', ['back', 'navigateRoot']);
    const page = new RulesPage(translate, nav);

    page.ngOnInit();
    expect(translate.stream).toHaveBeenCalledWith('RULES_PAGE.SECTIONS');
    stream$.next([{ title: 'A', items: ['a'] }]);
    expect(page.sections.length).toBe(1);
    stream$.next([{ title: 'B', items: ['b'] }, { title: 'C', items: ['c'] }]);
    expect(page.sections.map((s) => s.title)).toEqual(['B', 'C']);

    page.ngOnDestroy();
    stream$.next([]);
    expect(page.sections.length).toBe(2);
  });

  it('goes back to the landing page when opened from a direct link', () => {
    const translate = jasmine.createSpyObj('TranslateService', ['stream']);
    const nav = jasmine.createSpyObj('NavController', ['back', 'navigateRoot']);
    nav.navigateRoot.and.returnValue(Promise.resolve(true));
    const page = new RulesPage(translate, nav);

    spyOnProperty(window.history, 'length').and.returnValue(1);
    page.back();
    expect(nav.navigateRoot).toHaveBeenCalledWith('/landing');
    expect(nav.back).not.toHaveBeenCalled();
  });
});
