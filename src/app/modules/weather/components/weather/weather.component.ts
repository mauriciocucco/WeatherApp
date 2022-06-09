import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/core/models/interfaces/weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public weather: Weather | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  public search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((weather) => (this.weather = weather));
  }
}
