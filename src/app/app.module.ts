import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { HttpClientModule }                 from '@angular/common/http';
import { HttpModule, Http }                 from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';

import { AppComponent }                     from './app.component';
import { NavbarComponent }                  from './navbar/navbar.component';
import { FooterComponent }                  from './footer/footer.component';
import { DashboardComponent }               from './dashboard/dashboard.component';
import { RoutingModule }                    from './app-routing.module';

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RoutingModule,
    TranslateModule.forRoot({
      useDefaultLang: true,
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [Http]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
