import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinComponent {
  name: string = '';
  last: string = '';
  email: string= '';
  institution: string = '';
  submitted: boolean = false;

  submitForm() {
    // Logic to handle form submission
    this.submitted = true;
  }
}
