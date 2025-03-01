import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  listResidences = [
    { id: 1, name: 'Residence A' },
    { id: 2, name: 'Residence B' },
    { id: 3, name: 'Residence C' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      terrace: [false],
      surfaceTerrace: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]+$')]],
      residence: ['', Validators.required]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      const surfaceTerraceControl = this.apartForm.get('surfaceTerrace');
      if (value) {
        surfaceTerraceControl?.enable();
      } else {
        surfaceTerraceControl?.disable();
      }
    });
  }

  get newApart() {
    return this.apartForm.value;
  }

  onSubmit(): void {
    if (this.apartForm.valid) {
      console.log(this.newApart);
    }
  }
}
