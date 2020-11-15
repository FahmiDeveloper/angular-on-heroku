import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-On-Heroku';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDUNkfcVGswiiuf0p_ZYEsqt6uFm4R8Ans",
      authDomain: "deploymentfirebase-3fcb0.firebaseapp.com",
      databaseURL: "https://deploymentfirebase-3fcb0.firebaseio.com",
      projectId: "deploymentfirebase-3fcb0",
      storageBucket: "deploymentfirebase-3fcb0.appspot.com",
      messagingSenderId: "952427979263",
      appId: "1:952427979263:web:294c4c104b89eaf280c7ca",
      measurementId: "G-SV57TCZK9B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
