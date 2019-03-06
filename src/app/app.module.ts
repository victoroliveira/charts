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
import { WidgetComponent }                  from './widget/widget.component';
import { LineChartComponent }               from './line-chart/line-chart.component';
import { CrimeserverListComponent }         from './crimeserver/crimeserver-list/crimeserver-list.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    WidgetComponent,
    LineChartComponent,
    CrimeserverListComponent
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
