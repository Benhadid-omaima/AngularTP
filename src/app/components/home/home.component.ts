import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  residences = [
    { id: 1, name: 'Résidence A' },
    { id: 2, name: 'Résidence B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
