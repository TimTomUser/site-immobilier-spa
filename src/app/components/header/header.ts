import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
// import  { OffreFilters } from '../../models/Filter-search-model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  mesTypes = signal<TypeModel[]>([]);

  mesVilles = signal<any[]>([]);


  constructor(private monApiService: ApiService) {}

  ngOnInit(): void {



    // Récupération des villes
    this.monApiService.getVilles().subscribe({
      next: (response) => {
        this.mesVilles.set(JSON.parse(response));
      }
    });

        // Récupération des villes
    this.monApiService.getTypes().subscribe({
      next: (response) => {
        this.mesTypes.set(JSON.parse(response));
      }
    });

  }

}
