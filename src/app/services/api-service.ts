import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpParams } from '../models/Filter-search-model';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private baseUrl: string = "http://localhost:8080/";

  constructor(private monHttpClient: HttpClient) {}

  getTypes () {
    return this.monHttpClient.get(`${this.baseUrl}types.php`, {
      responseType: 'text'
    })
  }

  getVilles () {
    return this.monHttpClient.get(`${this.baseUrl}villes.php`, {
      responseType: 'text'
    });
  }

  getArticle(id_article: number) {
    return this.monHttpClient.get(`${this.baseUrl}article.php?id=${id_article}`, {
      responseType: 'text'
    });
  }


// ... dans votre service
getOffres(criteres: HttpParams): Observable<any> {
  let params = new HttpParams();
  if (criteres.type) params.type = criteres.type;
    if (criteres.ville) params.ville = criteres.ville;
  if (criteres.budgetMax) params.budgetMax = criteres.budgetMax;
  // getOffres (mesTypes: string, mesVilles: string, monBudget: number) {
    // &vente=${isVente}&location=${isLocation}
    // , isVente: boolean, isLocation: boolean
    // type=${mesTypes}&localisation=${mesVilles}&budget=${monBudget}
    return this.monHttpClient.get(`${this.baseUrl}offres.php`, { params, responseType: 'text' });
  }

  postFormContact(formData: FormData) {
    return this.monHttpClient.post(`${this.baseUrl}contact.php`, formData, {
      responseType: 'text'
    });
  }

}
