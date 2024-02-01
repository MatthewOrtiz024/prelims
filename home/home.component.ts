import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  year = '2024'
  title ='This is my Home page'
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red'
}
