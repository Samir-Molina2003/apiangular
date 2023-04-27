import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

import { Personas } from '../../modelos/personas.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  
  personas: Personas[] = [];
  constructor(private api:ApiService, private router:Router){ }

  ngOnInit(): void {
      this.api.getPersonas().subscribe((data: Personas[]) => {
        this.personas = data;
      });
  }

  editarPersona(id: any){
    this.router.navigate(['usuario', id]);
  }
  nuevaPersona(){
    this.router.navigate(['nuevo-usuario']);
  }
}
