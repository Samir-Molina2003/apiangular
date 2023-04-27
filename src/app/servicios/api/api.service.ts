import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from'../../modelos/response.interface';
import { Personas } from '../../modelos/personas.interface';
import { PersonaI } from 'src/app/modelos/persona.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://apipersona.fly.dev/api/persona/';

  constructor(private http:HttpClient) {}

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getPersonas():Observable<any>{
    const url = `${this.url}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url);
   }

  getSinglePersona(id: any):Observable<PersonaI>{
    let direccion = this.url + id;
    return this.http.get<PersonaI>(direccion);
  }

  postPersona(body: any):Observable<any>{
    const url = `${this.url}`;
    return this.http.post(url, body)
  }

 }
