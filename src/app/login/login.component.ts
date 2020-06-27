import { Component, OnInit } from '@angular/core';
import {ScrumdataService} from '../scrumdata.service';
import {Scrumuserdata} from '../scrumuser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scrumUserLoginData = new Scrumuserdata('', '', '')

 constructor(private _scrumdataService: ScrumdataService) { }

 onLoginSubmit() {
   console.log(this.scrumUserLoginData)
   this._scrumdataService.login(this.scrumUserLoginData).subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
 }
  ngOnInit(): void {
  }

}
