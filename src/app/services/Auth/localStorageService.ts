import { Injectable } from '@angular/core';
import { User } from 'src/app/models/Login';
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  setCurrentUser(user:User)
  {
    this.set('currentUser', user);
    this.setToken(user.Token);
  }
  getCurrentUser():User
  {
    return this.get('currentUser');
  }
  setToken(token:string)
  {
    this.set('token', token);
  }
  getToken():string
  {
    return this.get('token');
  }
  isUserLoggedIn():boolean
  {

    if(this.getToken() && this.getCurrentUser())
    {
      return true;
    }
    return false;
  }
  clearLocalStorage()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");

    localStorage.clear();
  }



}