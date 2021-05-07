import { UserService } from './../User.Service';
import { User } from './../Model/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginform: FormGroup;

  constructor(public userservice: UserService, private router: Router, public toastController: ToastController, private formbuilder: FormBuilder) {

    this.loginform = formbuilder.group({

      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(15)]],

    })
  }
  ngOnInit() {
  }
  login() {


    this.userservice.login(this.loginform.value.email,this.loginform.value.password).subscribe((res: any) => {
      

      if (res.message == 'Invalid credentials') {
        this.presenttoast("vérifier votre email");
      }

      else {
        this.router.navigate(['home'])

        this.presenttoast('bienvenue');
      }
    });



  }
  async presenttoast(msg) {
    const toast = await this.toastController.create({
      message: msg + ' .',
      duration: 3000,
    });
    toast.present();
    //this.router.navigate(['/']);
  }
}
