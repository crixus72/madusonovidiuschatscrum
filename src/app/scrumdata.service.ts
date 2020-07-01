import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Scrumuser, Scrumuserdata} from './scrumuser';

@Injectable({
  providedIn: 'root'
})
export class ScrumdataService {

  constructor(private _http: HttpClient) {}
  _url = 'https://stageapi.chatscrum.com/scrum/api/scrumusers/'
  _loginurl = 'https://stageapi.chatscrum.com/scrum/api-token-auth/'
  _scrumProjectUrl = 'https://stageapi.chatscrum.com/scrum/api/scrumprojects/'

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

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
}
