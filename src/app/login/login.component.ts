import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
// import { TouchSequence } from 'selenium-webdriver';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,AfterViewInit{
  
  @ViewChild('nameRef') nameElementRef:ElementRef;
  currenttUser: any;

  constructor(private authService:TestService,private router:Router) { }

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }

 
  loginForm:FormGroup=new FormGroup({
    loginName:new FormControl(null,Validators.required),
    loginPassword:new FormControl(null,Validators.required)
  });


  ngOnInit(): void {
    this.currenttUser=this.authService.getCurrentUser();
    this.checkIfLoogedIn();

  }

  login(){
    if(this.loginForm.valid){
      this.authService.loginValue.next(true);
      console.log('Form is valid');
      let data={
        email:this.loginForm.value.loginName,
        password:this.loginForm.value.loginPassword
      };
        this.authService.login(data).subscribe((response:any)=>{
          console.log(response);
         localStorage.setItem('currentUser', JSON.stringify(response.data.value.token));
         localStorage.setItem('token', JSON.stringify(response.data.value.token));
         this.router.navigate(['list']);
       });
    }
    else
    alert('Form is invalid');

  }

  checkIfLoogedIn(){
    if(this.currenttUser!=null) {
      this.router.navigate(['list']);
    }
  }
}
