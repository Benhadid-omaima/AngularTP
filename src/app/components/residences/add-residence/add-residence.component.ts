import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResidenceService } from '../../../Core/Services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm!: FormGroup;  // ✅ Utilisation de FormGroup
  isEditMode = false;
  residenceId!: number;

  constructor(
    private fb: FormBuilder,  
    private service: ResidenceService,  
    private route: ActivatedRoute,  
    private router: Router
  ) {}

  ngOnInit(): void {
    // ✅ Initialisation du formulaire
    this.residenceForm = this.fb.group({
      id: [''],  
      name: ['', [Validators.required, Validators.minLength(3)]],  
      address: ['', [Validators.required]],  
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],  
      status: ['Disponible', Validators.required]
    });

    console.log('🚀 AddResidenceComponent chargé !');
    

    // ✅ Vérification si modification d’une résidence
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.residenceId = id;
      this.service.getResidenceById(id).subscribe(data => {
        this.residenceForm.patchValue(data);  // ✅ Remplir le formulaire avec les données de la résidence
      });
    }
  }

  // ✅ Méthode pour sauvegarder ou mettre à jour une résidence
  saveResidence(): void {
    if (this.residenceForm.valid) {
      if (this.isEditMode) {
        this.service.updateResidence(this.residenceId, this.residenceForm.value)
          .subscribe(() => this.router.navigate(['/residences']));
      } else {
        this.service.addResidence(this.residenceForm.value)
          .subscribe(() => this.router.navigate(['/residences']));
      }
    }
  }

  // ✅ Getter pour accéder aux champs du formulaire dans le template
  get f() {
    return this.residenceForm.controls;
  }
}
