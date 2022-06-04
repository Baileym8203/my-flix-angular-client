import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UpdateUserFormComponent>,
    public MatSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void { }

  // send form inputs to backend
  updateUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((response) => {
      localStorage.setItem('user', this.userData.Username);
      console.log('updated user info: ', this.userData)
      this.dialogRef.close();
      location.reload();
      this.MatSnackBar.open('User info successfully updated!', 'OK', {
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