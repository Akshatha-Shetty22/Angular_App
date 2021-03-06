import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactInfo } from 'src/app/interfaces/contact-info';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact:ContactInfo=new ContactInfo();
  constructor(private restApi:ApiService,private route:Router) { 
    let uname=localStorage.getItem('user');
    if(uname===""){
      this.route.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }
  newContact(form:NgForm){
   // console.log("Hey");
    this.contact.name=form.value.name;
    this.contact.email=form.value.email;
    this.contact.subject=form.value.subject;
    this.contact.message=form.value.message;
    this.restApi.addContact(this.contact)
    .subscribe(res=>{
      console.log(res);
      alert("Message sent successfully");
      this.route.navigate(["/"])
    },
    error=>{
      alert("Something went wrong");
    })

  }

}
