import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import  { HttpParams} from './models/Filter-search-model';

export const routes: Routes =
    [
        { path: '', component: Homepage }
    ];