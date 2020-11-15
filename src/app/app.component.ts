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
      apiKey: "AIzaSyA9u3AlS07Owb1_1KQeVHKRhN_BtN8cKwE",
      authDomain: "deploymentheroku.firebaseapp.com",
      databaseURL: "https://deploymentheroku.firebaseio.com",
      projectId: "deploymentheroku",
      storageBucket: "deploymentheroku.appspot.com",
      messagingSenderId: "455755373061",
      appId: "1:455755373061:web:436961ce79068f551c5a6c",
      measurementId: "G-7NJ6HVE7CX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
