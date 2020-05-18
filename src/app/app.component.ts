import { Component } from '@angular/core';
// import { FormGroup, Validators,FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { TestService } from './test.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  inputVarible='parent component';

  getData(value){
    console.log(value);
  }
}
