import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonaI } from 'src/app/modelos/persona.interface';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  datosPersona!: PersonaI;
  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl('')
 });
 constructor(private activerrouter:ActivatedRoute, private router:Router, private api: ApiService){}
  
 ngOnInit(): void {
  this.postForm() 
 }

  postForm() {
    this.api.postPersona(this.nuevoForm.value).subscribe(data=>{
     console.log(data);
    });
  }

  salir(){
    this.router.navigate(['lista']);
  }

}
