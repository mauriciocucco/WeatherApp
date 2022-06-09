import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [IndexComponent, WeatherComponent],
  imports: [WeatherRoutingModule, SharedModule],
})
export class WeatherModule {}
