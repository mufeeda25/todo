import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=this.fb.group({
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required]]
});
  constructor(private fb:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    alert(this.loginForm.valid);
    if(this.loginForm.valid){
      this.dataService.login(this.loginForm.value.email,
        this.loginForm.value.password)
        .subscribe((data:any)=>{
          console.log(data);
          this.dataService.saveToken(data.token);
          alert("login successfull");
          this.router.navigateByUrl("dashboard")
        },(data)=>{
          alert(data.error.message);
          
        })
    }
  }
}
