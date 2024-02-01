import { Component } from '@angular/core';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.css'
})
export class OurPartnersComponent {

    partners = [ 
      { company: 'Microsoft', trademark: 'https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297-300x297.jpg', sponsorship: 'Platinum', website: 'https://www.microsoft.com/en-ph' },
      { company: 'Amazon', trademark: 'https://logodix.com/logo/1034032.jpg', sponsorship: 'Silver', website: 'https://www.amazon.com/' }, 
      ];
  }


