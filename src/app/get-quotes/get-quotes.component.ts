import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-quotes',
  templateUrl: './get-quotes.component.html',
  styleUrls: ['./get-quotes.component.css']
})
export class GetQuotesComponent implements OnInit {

  email;
  phoneNumber

  constructor(private api:BusinessServiceService,private routes: Router) { }

  ngOnInit() {
  }

  onClick(){
    let newBusiness = {Email: this.email, Mobile: this.phoneNumber};
    this.api.ContactInformation(newBusiness);
    console.log(newBusiness);
    this.routes.navigate([`/Home`]);
  }

}
