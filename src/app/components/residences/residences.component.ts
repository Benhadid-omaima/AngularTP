import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../app/Core/Services/common.service';
import { ResidenceService } from '../../../app/Core/Services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  listResidences: any[] = [];

  constructor(private residenceService: ResidenceService) {}

  ngOnInit(): void {
    this.residenceService.getResidences().subscribe(data => {
      this.listResidences = data;
    });
  }

  deleteResidence(id: number): void {
    this.residenceService.deleteResidence(id).subscribe(() => {
      this.listResidences = this.listResidences.filter(res => res.id !== id);
    });
  }
}
