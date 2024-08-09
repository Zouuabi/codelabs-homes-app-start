import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../models/housing-location';
import { HousingService } from '../services/housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  housingLocationList : HousingLocation [] = [];

  housingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  onSearch (filter:string){
    if (!filter){
      this.housingLocationList = this.housingService.getAllHousingLocations();
    }else{
      this.housingLocationList = this.housingService.search(filter);
    }
  }
}
