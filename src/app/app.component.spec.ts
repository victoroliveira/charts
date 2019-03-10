import {TranslateModule,
        TranslateLoader,
        TranslateService }      from '@ngx-translate/core';
import { TestBed, async }       from '@angular/core/testing';
import { RouterTestingModule }  from '@angular/router/testing';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './navbar/navbar.component';
import { FooterComponent }      from './footer/footer.component';
import { Observable } from 'rxjs/Observable';

const translations: any = {'CARDS_TITLE': 'This is a test!'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

describe('AppComponent', () => {
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        })
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
      ],
    }).compileComponents();

    translate = TestBed.get(TranslateService);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    translate.use('en');
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));
});
