import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { USER_RESPONSE } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { 
    this.loginForm = this.intializeLoginForm();
  }

  ngOnInit(): void {
  }

  intializeLoginForm(): any {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.loading = true;
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (res: USER_RESPONSE[]) => {
        const data = res[0];
        if(data.status === 'success'){
          this.loading = false;
          console.log(data.message);
        }
      },
      error: (error: any) => {
        this.loading = false;
        console.log('err', error);
      }
    })
  }

  navigateToSingup(e: any) {
    e.preventDefault();
    this.router.navigate(['/signup']);
  }

}
