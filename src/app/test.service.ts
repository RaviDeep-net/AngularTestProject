import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserDetails } from 'src/userDetails';
import { LoginDetails } from './loginDetails';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http:HttpClient) { }
  
  apiUrl:string='https://localhost:44383/WeatherForecast/';
  
  loginValue=new BehaviorSubject<boolean>(false);

  getAllUsers(){
    return this._http.get(this.apiUrl+'Home');
  }

  getUserById(id:number){
   return this._http.get(this.apiUrl+'GetUserByID?ID='+id)
  }

  updateUserDetails(user:UserDetails){
     return this._http.post(this.apiUrl+'UpdateUser',user);
  }
  
  login(login:LoginDetails) {
    //this.loginValue.next(true);
    return this._http.post(this.apiUrl+'JWTLogin',login);
  }
  getAuthToken(){
    return localStorage.getItem('token');
  }

  getCurrentUser(){
    return localStorage.getItem('currentUser');
  }

  logoutUser() {
   // this.loginValue.next(false);
    localStorage.clear();
  }
}
