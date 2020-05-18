import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:object;
  
  sub:Subscription;
  id:number;

  userDetailsForm:FormGroup=new FormGroup({
    username:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    course:new FormControl(null,Validators.required)
  });

  constructor(private testService:TestService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.testService.getUserById(this.id).subscribe(data=>{
        console.log(data);
        // if(data.success) {
          this.patchUserData(data)
        // }
        });
      });
  }

    patchUserData(userData){
      this.userDetailsForm.patchValue({
        email:userData.email,
        id:userData.id,
        course:userData.topic,
        username:userData.name
      });
    }

    userUpdate(){
       console.log(this.userDetailsForm.value);
       let data={
         id: this.id,
         email:this.userDetailsForm.value.email,
         course:this.userDetailsForm.value.course,
         username:this.userDetailsForm.value.name,
       }
      this.testService.updateUserDetails(data).subscribe(res=>{
        console.log(res)
      })
      //this.servicename.functionname(data).subscribe()
      //return this.testService.updateUserDetails()
    }
    
    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
