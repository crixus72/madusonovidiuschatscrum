import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Scrumuser, Scrumuserdata} from './scrumuser';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) {}
  _url = 'https://stageapi.chatscrum.com/scrum/api/scrumusers/'
  _loginurl = 'https://stageapi.chatscrum.com/scrum/api-token-auth/'
  _scrumProjectUrl = 'https://stageapi.chatscrum.com/scrum/api/scrumprojects/'
  _updateurl = 'http://stageapi.chatscrum.com/scrum/api/scrumgoals/'
  _createprojecturl = 'http://stageapi.chatscrum.com/scrum/api/scrumprojects/'
  _changerole = "https://stageapi.chatscrum.com/scrum/api/scrumprojectroles/";

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  token: any
  logincred: any

  signup(user: Scrumuser) {
    return this._http.post<any>(this._url, {'email': user['email'], 'full_name': user['fullname'],
    'password': user['password'], 'usertype': user['usertype'], 'projname': user['projname']}, this.httpOptions);
  }

  login(user: Scrumuserdata){
    return this._http.post<any>(this._loginurl, {'username': user['email'],
    'password': user['password'], 'project': user['project']}, this.httpOptions);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  allProjectGoals(project_id){
    return this._http.get<any>(this._scrumProjectUrl + project_id, this.httpOptions);
  }

  updateTask(goal_id): Observable<any>{
    // @ts-ignore
    this.token = localStorage.getItem('token');
    this.logincred = JSON.parse(localStorage.getItem('Authuser'));
    // @ts-ignore
    this.logincred = btoa(`${this.login.email}:${this.login.password}`);
    return this._http.patch(this._updateurl + goal_id.id + '/', { status: goal_id.status }, {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${this.login}==`)
    });
  }

  create_project(user: Scrumuser){
    this.logincred = JSON.parse(localStorage.getItem('Authuser'));
    this.logincred = btoa(`${this.logincred.email}:${this.logincred.password}`);
    return this._http.post<any>(this._createprojecturl, { 'email': user['email'],
     'password': user['password'], 'full_name': user['fullname'],
    'usertype': user['type'], 'projname': user['project_name'] },{
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${this.logincred}==`).append('Content-Type', 'application/json')
    });
  }
  changerole(user: Scrumuser): Observable<any>{
    this.token = localStorage.getItem('token');
    this.logincred = JSON.parse(localStorage.getItem('Authuser'));
    this.logincred = btoa(`${this.logincred.email}:${this.logincred.password}`);
    return this._http.patch(this._changerole + user['password'] + '/', { role: user['type']  }, {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${this.logincred}==`)
    });
  }
}
