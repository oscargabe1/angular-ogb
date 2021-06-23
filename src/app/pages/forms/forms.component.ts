import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public reactiveForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    passwordConfirm:['',{validators: [Validators.required],updateOn: 'submit'}],
  },{
    validators: this.matchingPassword('password','passwordConfirm')
  })

  formSubmitted:boolean = false;
  confirmValid:boolean = false; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
