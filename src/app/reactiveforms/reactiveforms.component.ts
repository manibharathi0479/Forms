import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray, Validators } from '@angular/forms';
import { nospace } from './nospace.validators';



@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
  form:any;
  emailregex="^[a-zA-Z0-9._%+-]+@gmail.com$" ;
  passregex="^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,15}$";
  skillsArr: any = [];


  constructor(fb:FormBuilder){
    this.form=fb.group({
      fullName:['',[Validators.required,Validators.minLength(6),nospace.nospacevalidation]],
      email:['',[Validators.required,Validators.pattern(this.emailregex)]],
      password:['',[Validators.required,Validators.pattern(this.passregex)]],
      gender:['',[Validators.required]],
      courses:['',[Validators.required]],
      captcha:['',[Validators.required]],
      agree:['',[Validators.required]],
      skills: ['',],
      
      
    })

  }
  
  

  get fc(){
    return this.form.controls;
  }
   
  adding(event: any){
   
    this.skillsArr.push(event.target.value);
    this.form.controls['skills'].setValue('');
  }
  remove(index: number) {
    this.skillsArr.splice(index, 1);
    this.form.controls['skills'].setValue(this.skillsArr);
  }

  onsumbit(){
  

    
    this.form.controls['skills'].setValue(this.skillsArr)
    console.log(this.form.value);
    // const data=JSON.stringify(this.fc.value);
  }
}
