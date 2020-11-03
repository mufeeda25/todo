import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {
token="";
  constructor(private http:HttpClient) { 
    this.loadToken();
  }
  getOptions(){
    let headers = new HttpHeaders();
    headers = headers.set('authorization', 'Bearer '+this.token);
    return {
      headers
    }
  }

  loadToken(){
    if(localStorage.getItem('token')){
   this.token= localStorage.getItem('token')
    }
  }
saveToken(token){
  this.token=token;
  localStorage.setItem('token',token);
}

register(name,email,password){
  const data={
    name,
    email,
    password
  };
 return this.http.post(environment.apiUrl+"/users",data);
}
login(email,password){
  const data={
    email,
    password
  };
  return this.http.post(environment.apiUrl+"/users/login",data)

}
getTodos(){
  return this.http.get(environment.apiUrl,this.getOptions());
}
getTodo(id){
  return this.http.get(`${environment.apiUrl}/${id}`,this.getOptions());
}
editTodo(id,data){
  return this.http.put(`${environment.apiUrl}/${id}`,data,this.getOptions());
}
addTodo(name,description){
  const data={
    name,
    description
  };
  return this.http.post(environment.apiUrl,data,this.getOptions());
}
}