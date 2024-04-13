import {Component, OnInit} from '@angular/core';
import {WeatherApiService} from "./service/API/weather-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'weatherSiteCool';

  constructor(private weatherService: WeatherApiService) {
  }

  ngOnInit(): void {
        this.weatherService.getNext15DaysLocation('Trento,IT').subscribe((data)=>console.log(data));
    }


}
