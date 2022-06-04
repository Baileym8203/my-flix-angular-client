import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {
  
  @Input() userData = { Username: '', Password: '' };
  
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public MatSnackBar: MatSnackBar,
    public router: Router
    ) { }
    
    ngOnInit(): void {
    }
    
    // function for sending form inputs to backend 
    loginUser(): void {
      this.fetchApiData.userLogin(this.userData).subscribe((response) => {
        this.dialogRef.close(); //close the modal on success
        console.log(response);
        localStorage.setItem('user', response.user.Username);
        localStorage.setItem('token', response.token);
        console.log('local storage (login): ', localStorage)
        this.MatSnackBar.open('User logged in successfully!', 'OK', {
          duration: 2000
        });
      }, (response) => {
        console.log(response);
        this.MatSnackBar.open(response, 'OK', {
          duration: 2000
        });
      });
      this.router.navigate(['movies']);
      // this.router.navigate(['movies']).then(() => {
      //   window.location.reload();
      // });
    }
}
