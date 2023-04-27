import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { Router } from '@angular/router'
import {ResponseI } from '../../modelos/response.interface';
import { ListaComponent } from '../lista/lista.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
  })

  constructor(private api: ApiService, private router: Router) {}
  errorStatus: boolean = false;
  errorMsj: any = "";

  ngOnInit(): void {
  }

  onLogin(form: LoginI){
      this.api.loginByEmail(form),((data: ResponseI) => {
        let dataResponse: ResponseI = data;
        if(dataResponse.status == "ok"){
          localStorage.setItem("token", dataResponse.result.token);
          this.router.navigate(['encabezado'])
        }else{
          this.errorStatus = true;
          this.errorMsj = dataResponse.result.error_msg;
        }
      })
  }

  principal(){
    this.router.navigate(['lista'])
  }

}
