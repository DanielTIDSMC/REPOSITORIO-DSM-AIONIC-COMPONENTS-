import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,

})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  register(formulario: NgForm){
    console.log(formulario.value);
    console.log('fomr', formulario.value);
    if(formulario.invalid){
      console.log('Todos los campos son requeridos');
      return;}

      if (this.email === 'admin' && this.password === 'admin') {
        this.navController.navigateForward('/inicio');
      }
      else {
        console.log('Login incorrecto');
      }
    }

  }

