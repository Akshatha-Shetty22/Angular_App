import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/interfaces/post-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postData:any;
  username:any;

  constructor(private restApi:ApiService,private route:Router) { 
    let uname=localStorage.getItem('user');
   // console.log("Uname="+uname);
    if(uname!==""){
      this.username=uname;
    }
    else
    {
      this.route.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.getAllPost();
  }
  getAllPost(){
   
    this.restApi.getPost().subscribe(res=>{
      this.postData=res;
    })
  }
  deletePost(i:number){
    let res=confirm("Are you sure you want to delete this post?");
    if(res){
    this.restApi.deletePost(i).subscribe(res=>
      { this.getAllPost();
        alert("Post Deleted");
    })
  }
  }
 /* editPost(i:number){
    this.route.navigate(['\new-post\\'+i]);
  }*/

}
