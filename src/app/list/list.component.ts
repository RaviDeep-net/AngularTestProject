import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:object;
  constructor(private ts:TestService,private router:Router) { }

  ngOnInit(): void {
   this.checkTokenandUser();
  }

  checkTokenandUser(){
    
    if((localStorage.getItem('currentUser')!=null)) {
      this.ts.getAllUsers().subscribe((data:any)=>{
        console.log(data);
        this.users=data.data;
    });

   }
   else{
      this.router.navigate(['']);
   }
  }
}

