import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  // Importer les classes nécessaires
import { CommonService } from '../../../Core/Services/common.service';  // Importer le service CommonService

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  // Déclaration du formulaire
  apartForm!: FormGroup;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec les contrôles et les validateurs
    this.apartForm = new FormGroup({
      apartmentNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),  // Validation du numéro d'appartement
      floorNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),  // Validation du numéro d'étage
      terrace: new FormControl(false),
      surfaceTerrace: new FormControl('', Validators.pattern('^[0-9]*$')),
      residence: new FormControl('', Validators.required)
    });

    this.sameSurfaceCount = this.commonService.getSameValueOf(this.listApartments, 'surface', 50);
  }
  listResidences = [
    { id: 1, name: 'Residence 1' },
    { id: 2, name: 'Residence 2' },
    { id: 3, name: 'Residence 3' }
  ];
  
  // Méthode d'envoi du formulaire
  onSubmit() {
    if (this.apartForm.valid) {
      console.log(this.apartForm.value);  // Afficher les données du formulaire
    }
  }
  listApartments = [
    { id: 1, apartNum: 101, surface: 50 },
    { id: 2, apartNum: 102, surface: 60 },
    { id: 3, apartNum: 103, surface: 50 }
  ];
  sameSurfaceCount: number = 0;



}
