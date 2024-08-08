import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../models/housing-location';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation ;
}
