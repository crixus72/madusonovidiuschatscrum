import { Component, OnInit } from '@angular/core';
import {ScrumdataService} from '../scrumdata.service';
import {Scrumuserdata} from '../scrumuser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scrumUserLoginData = new Scrumuserdata('', '', '')

 constructor(private _scrumdataService: ScrumdataService, private _router: Router) { }

 onLoginSubmit() {
   console.log(this.scrumUserLoginData)
   this._scrumdataService.login(this.scrumUserLoginData).subscribe(
     data => {
       console.log('Success', data),
         localStorage.setItem('token', data.token);
       this._router.navigate(['/scrumboard', data['project_id']]);
     },
     error => console.error('Error', error)
   );
 }
  ngOnInit(): void {
  }

}
