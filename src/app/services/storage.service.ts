import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  setAuthToken(token) {
    localStorage.setItem('token', token);
  }

  delAuthToken() {
    localStorage.removeItem('token');
  }

  setNotificationCounter(value) {
    localStorage.setItem('counter', value);
  }

  getNotificationCounter() {
    return localStorage.getItem('counter');
  }
}
