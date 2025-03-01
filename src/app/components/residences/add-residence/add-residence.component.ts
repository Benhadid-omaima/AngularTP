import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {

  residenceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible'],
      apartments: this.fb.array([this.createApartment()])
    });
  }

  get apartments(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }

  createApartment(): FormGroup {
    return this.fb.group({
      apartmentNumber: ['', [Validators.required]],
      floorNumber: ['', [Validators.required]],
      terrace: [false],
      surfaceTerrace: [{ value: '', disabled: true }]
    });
  }

  addApartment(): void {
    this.apartments.push(this.createApartment());
  }

  onSubmit(): void {
    if (this.residenceForm.valid) {
      console.log(this.residenceForm.value);
    }
  }

}
