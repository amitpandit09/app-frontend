import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecretsService {

uri = 'http://localhost:4000';

constructor(private http: HttpClient) { }

addSecrets(username,password){
  	const secrets = {
  	username: username,
  	password: password
  	};
  	return this.http.post(`${this.uri}/secrets/add`,secrets);
  }

  validateSecrets(username,password){
  const secret = {
    username: username,
    password: password
    };
    console.log(this.http.post(`${this.uri}/secrets`,secret));
  	return this.http.post(`${this.uri}/secrets`,secret);
  }
   


}
