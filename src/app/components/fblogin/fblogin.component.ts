import { Component, OnInit } from '@angular/core';
import { SecretsService} from '../../secrets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.css']
})
export class FbloginComponent implements OnInit {

  constructor(private sercretsService:SecretsService,private router: Router) { }



  ngOnInit() {

  (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '2356264521072998',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

     

  }

  submitLogin(){
        console.log("submit login to facebook");
        // FB.login();
        FB.login((response)=>
            {
              console.log('submitLogin',response);

              if (response.authResponse)
              {

    			this.router.navigate(['/create']);
          console.log(response.id);
               }
               else
               {
               alert('User login failed');
             }
          });

      }





}
