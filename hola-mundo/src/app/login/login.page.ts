import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(formulario: NgForm) {

    // console.log('email: ', this.email);
    // console.log('password: ', this.password);

    // Obtener los valores del formulario
    console.log(formulario.value);

    // Validar formulario
    console.log('fomr', formulario.value);
    
    // Si usuario= admin y password=admin
    // Entonces console.log('Login correcto')
    // Sino console.log('Login incorrecto')
    if(formulario.invalid){
      console.log('Todos los campos son requeridos');
      return;
    }

    if (this.email === 'admin' && this.password === 'admin') {
      console.log('Login correcto');
      return;
    }
    else {
      console.log('Login incorrecto');
    }
  }

}



