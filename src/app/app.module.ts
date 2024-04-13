import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {WeatherApiService} from "./service/API/weather-api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ApiWeatherInterceptorService} from "./interceptor/api-weather.interceptor";
import { OrderListModule } from 'primeng/orderlist';
import { CardModule } from 'primeng/card';
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OrderListModule,
    CardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiWeatherInterceptorService,
      multi: true
    },
    WeatherApiService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
