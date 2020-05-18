import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { EventEmitter } from '@angular/core';
// import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   isLoggedIn:boolean;
 
   outputString='I am from child component';

   @Input() myInput:string;

   currenttUser: string;
  
   loginStatus:any;
  
   
   @Output() myOutput:any=new EventEmitter();

    constructor(private router:Router,private authService:TestService) {
    this.currenttUser=this.authService.getCurrentUser();
   }

  ngOnInit(): void {
    console.log(this.myInput);
    this.authService.loginValue.subscribe(data=>{
      this.isLoggedIn = data;
    });
  }
  

  logout() {
    this.authService.loginValue.next(false);
    this.authService.logoutUser();
    this.router.navigate(['']);
  }

 sendData(){
   this.myOutput.emit(this.outputString);
 }

}
