import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherApiService} from "./service/API/weather-api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {apiWeatherInterceptor, ApiWeatherInterceptorService} from "./interceptor/api-weather.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiWeatherInterceptorService,
      multi: true
    },
    WeatherApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
