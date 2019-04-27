import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business-service.service';

@Component({
  selector: 'app-list-your-business',
  templateUrl: './list-your-business.component.html',
  styleUrls: ['./list-your-business.component.css']
})
export class ListYourBusinessComponent implements OnInit {

  Address;
  Information;
  PhoneNumber;
  Service_Name;
  SubService_Name;
  Doctor;
  
  Name;
  Photo;

  constructor(private api:BusinessServiceService) { }

  ngOnInit() {
    this.api.getDoctor().subscribe(resu => {
      this.Doctor = resu;
      console.log(this.Doctor);
    });

  }

  onClick() {
    let newBusiness = {Address: this.Address, PhoneNumber: this.PhoneNumber, Information: this.Information, Service_Name: this.Service_Name, SubService_Name: this.SubService_Name, Name: this.Name, Photo: this.Photo};
    this.api.postBusiness(newBusiness);
    console.log(newBusiness);
  }

}
