import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { AuthService } from './services/auth-service';
import { ApiService } from './services/api-service';
import { QuiSommesNous } from "./components/qui-sommes-nous/qui-sommes-nous";
import { NosOffres } from "./components/nos-offres/nos-offres";
import { Footer } from "./components/footer/footer";
import  { HttpParams} from './models/Filter-search-model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('site-immobilier');

  constructor(private monAuthService: AuthService, private monApiService: ApiService){}

  ngOnInit(): void {
    this.monAuthService.fetchJwtToken().subscribe({
      next: () => {},
      error: (err) => {
        console.error('Impossible de récupérer le JWT');
        console.log(err);
      }
    });
  }

}
