import { Component, OnInit, Input, Inject } from "@angular/core";
import { FetchApiDataService } from "../fetch-api-data.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  user: any[] = [];

  @Input() userDetails = {
    Username: "",
    Password: "",
    Email: "",
    Birthday: "",
  };

  constructor(
  ) {}

  ngOnInit(): void {}

}
