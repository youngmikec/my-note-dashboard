import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { USER_RESPONSE } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { 
    this.signupForm = this.intializeSignupForm();
  }

  ngOnInit(): void {
  }

  intializeSignupForm(): any {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    })
  }

  onSubmit(){
    this.loading = true;
    const payload = this.signupForm.value;
    this.authService.signUp(payload).subscribe({
      next: (res: USER_RESPONSE) => {
        if(res.status === 'success'){
          this.loading = false;
          console.log(res.message);
        }
      },
      error: (error: any) => {
        this.loading = false;
        console.log('err', error);
      }
    })
  }

  navigateToLogin(e: any) {
    e.preventDefault();
    this.router.navigate(['/login']);
  }

}
