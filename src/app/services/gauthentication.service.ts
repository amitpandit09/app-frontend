import { Injectable } from '@angular/core';

// Import Observable
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// Import Firebase and AngularFire
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class GauthenticationService {

public authInfo: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth,private router: Router) {
    this.authInfo = this.afAuth.authState;
  }

login() {
  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((user) => { 

    	this.router.navigate(['/list']);

     });
}

logout() {
  this.afAuth.auth.signOut().then(() => { console.log('logged out') });
}


}
