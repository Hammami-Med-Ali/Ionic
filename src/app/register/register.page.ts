import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../User.Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerform: FormGroup;

  constructor(public userservice: UserService, private router: Router, public toastController: ToastController, private formbuilder: FormBuilder) { 
    this.registerform = formbuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      
    })
  }

  ngOnInit() {
  }
register(){
  console.log(this.registerform.value);
  this.userservice.register(this.registerform.value).subscribe(res =>{
    this.router.navigate(['login'])
  },err => {
    
  })

}
}
