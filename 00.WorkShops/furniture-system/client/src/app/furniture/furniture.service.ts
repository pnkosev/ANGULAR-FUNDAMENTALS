import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Furniture } from './models/furniture';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000/furniture';
const createFurnitureURL = `${baseURL}/create`;
const getAllFurnitureURL = `${baseURL}/all`;
const getFurnitureDetailsURL = `${baseURL}/details/`;
const getMyFurnitureURL = `${baseURL}/user`;
const deleteFurnitureURL = `${baseURL}/delete/`;
const editFurnitureURL = `${baseURL}/edit/`;

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(
    private http: HttpClient
  ) { }

  createFurniture(furniture: Furniture): Observable<Furniture> {
    return this.http.post<Furniture>(createFurnitureURL, furniture);
  }

  getAllFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getAllFurnitureURL);
  }

  getFurnitureDetails(id: string): Observable<Furniture> {
    return this.http.get<Furniture>(getFurnitureDetailsURL + id);
  }

  getMyFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getMyFurnitureURL);
  }

  deleteFurniture(id: string): Observable<Furniture> {
    return this.http.delete<Furniture>(deleteFurnitureURL + id);
  }

  editFurniture(id: string, body: Furniture): Observable<Furniture> {
    return this.http.put<Furniture>(editFurnitureURL + id, body);
  }
}
