import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {

  listResidences = [
    { 
      id: 1, 
      name: 'Résidence A', 
      image: 'https://via.placeholder.com/200', 
      status: 'Disponible', 
      location: 'Paris' 
    },
    { 
      id: 2, 
      name: 'Résidence B', 
      image: 'https://via.placeholder.com/200', 
      status: 'Vendu', 
      location: 'Lyon' 
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  showLocation(residence: any): void {
    alert('La localisation de la résidence ' + residence.name + ' est : ' + residence.location);
  }
}
