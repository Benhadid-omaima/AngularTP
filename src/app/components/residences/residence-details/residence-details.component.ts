import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la résidence depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.residenceId = +params.get('id')!;
      // Utilise cet ID pour récupérer les détails de la résidence
      console.log('Résidence ID:', this.residenceId);
    });
  }
}
