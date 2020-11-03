import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registerForm= this.fb.group({
  name:['',[Validators.required]],
  email:['',[Validators.required, Validators.email]],
  password:['', [Validators.required]],
  confirmPassword:['',[Validators.required]],
},{
validator:this.checkPasswords
}
);
checkPasswords(formGroup){
  const pass= formGroup.get("password");
  const confirmPass= formGroup.get("confirmPassword");
  return pass.value==confirmPass.value?null:{ notSame:true}
  }


  constructor(private fb:FormBuilder,private dataService:DataService)
     { }

  ngOnInit(): void {
  }
register(){
  alert(this.registerForm.valid);
  if(this.registerForm.valid){
    this.dataService.register(this.registerForm.value.name,this.registerForm.value.email,
      this.registerForm.value.password)
      .subscribe(data=>{
        alert("registration successfull");
      },(data)=>{
        alert(data.error.message);
        
      })
  }
}
}
