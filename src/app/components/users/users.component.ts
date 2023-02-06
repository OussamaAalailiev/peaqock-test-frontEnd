import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "../forms/form/form.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      id: 1, username: "Ahmed", email: "lorem@hghg.com", countryOfResidency: "Morocco",
      company: "Company", registrationDate: "December 21, 2021", actions: true
    },
    {
      id: 2, username: "Karl", email: "lorem@hghg.com", countryOfResidency: "Morocco",
      company: "Company Name", registrationDate: "December 21, 2021", actions: true
    },
    {
      id: 3, username: "Sarah", email: "lorem@hghg.com", countryOfResidency: "Morocco",
      company: "Company Name", registrationDate: "December 21, 2021", actions: true
    }
  ];

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openUserDialogue(): void {
    this.dialog.open(FormComponent, {
      width: '65%',
      minWidth: '60%'
    });
  }

}
