import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from "../../services/user.service";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public reactiveForm = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    passwordConfirm:['',{validators: [Validators.required],updateOn: 'submit'}],
  },{
    validators: this.matchingPassword('password','passwordConfirm')
  })

  get name(){
    return this.reactiveForm.get('name');
  }
  get email(){
    return this.reactiveForm.get('email');
  }
  get password(){
    return this.reactiveForm.get('password');
  }
  get passwordConfirm(){
    return this.reactiveForm.get('passwordConfirm');
  }

  formSubmitted:boolean = false;
  confirmValid:boolean = false; 
  showPassword:boolean = false;
  showPasswordConfirm:boolean = false;

  constructor(private fb: FormBuilder, private userService:UserService) { }

  ngOnInit() {
  }

  changeShowPassword(){
    this.showPassword = !this.showPassword;
  }
  postForm(){
    this.formSubmitted = true;
    this.checkConfirmPassword();
    if (this.reactiveForm.invalid) {
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "This information will be stored forever!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, I'm sure!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.addUser(this.reactiveForm.value);
        Swal.fire(
          'Done!',
          'Your information has been sent.',
          'success'
        )
      }
    })

    


  }

  checkConfirmPassword(){
    if(this.reactiveForm.get('passwordConfirm').invalid){
      this.reactiveForm.controls.passwordConfirm.setValue('');
    } 
  }

  matchingPassword(password:string, passwordConfirm:string){
    return (formGroup: FormGroup) =>{
      const passwordControl = formGroup.get(password);
      const password2Control = formGroup.get(passwordConfirm);


      if (passwordControl.value != password2Control.value) {
        password2Control.setErrors({notMatching:true});
    
      }
    }
  }

}
