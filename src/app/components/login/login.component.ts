import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecretsService} from '../../secrets.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  createForm FormGroup;
  constructor(private sercretsService:SecretsService,private fb: FormBuilder,private router: Router) { 

  this.createForm = this.fb.group({

  	username: ['',Validators.required],
    password: ['',Validators.required]

  });

  }


 validateSecrets(username,password){
  this.sercretsService.validateSecrets(username,password).subscribe(val =>
      if(val == true){
        this.router.navigate(['/list']);
      }
      else{
        alert("Username or password is invalid.Please provide valid entries !");
        this.router.navigate(['/login']);
      }
  );
}

  ngOnInit() {
  }

}
