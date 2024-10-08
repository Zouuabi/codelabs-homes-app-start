import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../models/housing-location';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute)
  housingService : HousingService  = inject(HousingService) ;
  
  
  HousingDetails! : HousingLocation|undefined ;

  applyForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('')
  });

  constructor(){

    const housingLocaionId = Number(this.route.snapshot.params['id']);

    this.HousingDetails = this.housingService.getHousingLocationById(housingLocaionId);
  }


  submitApplication(){
    this.housingService.submitApplication( this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '');
  }
}
