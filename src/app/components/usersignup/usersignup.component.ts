import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecretsService} from '../../secrets.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

createForm FormGroup;

  constructor(private secretsService: SecretsService,private fb: FormBuilder, private router: Router) { 
  	this.createForm = this.fb.group({

  	username: ['',Validators.required],
  	password: ['',[Validators.required,Validators.minLength(6)]]

  });

  }

addSecrets(username,password){
	this.secretsService.addSecrets(username,password).subscribe(() =>{
		this.router.navigate(['/userlogin']);
	});
}


  ngOnInit() {
  }

}
