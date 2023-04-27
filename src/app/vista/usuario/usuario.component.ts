import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaI } from 'src/app/modelos/persona.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class EditarComponent implements OnInit{
  
  constructor(private activerrouter:ActivatedRoute, private router:Router, private api: ApiService){ }

   datosPersona!: PersonaI;
   editarForm = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl('')
   });

  ngOnInit(): void {
    let id = this.activerrouter.snapshot.paramMap.get('id');
    console.log(id);
    this.api.getSinglePersona(id).subscribe((data:any)=>{
      this.datosPersona = data[0];
      console.log(this.datosPersona);
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  salir(){
    this.router.navigate(['lista']);
  }

}
