import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userObj:User=new User();
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  onSignup(form:NgForm){
    this.userObj.id=new Date().valueOf();
    this.userObj.name=form.value.name;
    this.userObj.email=form.value.email;
    this.userObj.password=form.value.password;
    localStorage.setItem('user',form.value.name);
    localStorage.setItem('user_id',form.value.email+form.value.password);
    localStorage.setItem('email',form.value.email);
    this.auth.addUser(this.userObj).subscribe(res=>
      {
       
        this.route.navigate(["\home"]);

      },
      error=>{
        alert("Some error occured");
      })
  }


}
