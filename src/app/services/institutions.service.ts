import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { INSTITUTIONS } from '../mock-institutions';
import { IInstitutions } from '../interface/institutions';

@Injectable({
  providedIn: 'root',
})
export class InstitutionsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor() {}

  getAllInstitutions(): Observable<IInstitutions[]> {
    return of(INSTITUTIONS);
  }
}
