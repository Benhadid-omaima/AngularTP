import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddApartmentComponent } from './components/Apartments/add-apartment/add-apartment.component';
import { ApartmentsComponent } from './components/Apartments/apartments/apartments.component';  // Ajouter l'importation

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'residences/add', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },  // Ajouter la route pour la page des appartements
  { path: '**', component: NotFoundComponent },
  { path: 'add-apartment', component: AddApartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
