import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private residenceUrl = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

  getResidences(): Observable<any[]> {
    return this.http.get<any[]>(this.residenceUrl);
  }

  addResidence(residence: any): Observable<any> {
    return this.http.post<any>(this.residenceUrl, residence);
  }

  deleteResidence(id: number): Observable<any> {
    return this.http.delete(`${this.residenceUrl}/${id}`);
  }

  getResidenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.residenceUrl}/${id}`);
  }

  updateResidence(id: number, residence: any): Observable<any> {
    return this.http.put(`${this.residenceUrl}/${id}`, residence);
  }
}
