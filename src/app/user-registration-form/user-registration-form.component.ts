import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public MatSnackBar: MatSnackBar,
    // public router: Router
  ) { }

  ngOnInit(): void {
  }

  // function for sending form inputs to backend 
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((response) => {
      this.dialogRef.close(); //close the modal on success
      console.log(response);
      this.MatSnackBar.open('user registered successfully!', 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log(response);
      this.MatSnackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }
}

//   loginUser(): void {
//     this.fetchApiData.userLogin(this.userData).subscribe((response) => {
//       this.dialogRef.close(); //close the modal on success
//       console.log(response);
//       localStorage.setItem('user', response.user.Username);
//       localStorage.setItem('token', response.token);
//       console.log('local storage (login): ', localStorage)
//       this.MatSnackBar.open('User logged in successfully!', 'OK', {
//         duration: 2000
//       });
//     }, (response) => {
//       console.log(response);
//       this.MatSnackBar.open(response, 'OK', {
//         duration: 2000
//       });
//     });
//     this.router.navigate(['movies']);
//     location.reload();
//   }

//   registerAndLogin(){
//     this.registerUser()
//     this.loginUser() 
// }
