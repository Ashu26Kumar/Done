import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business-service.service';
import 'rxjs';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  Business;
  SubService_Name;
  
  name;

  constructor(private api: BusinessServiceService) { }

  ngOnInit() {
    this.api.getBusiness().subscribe(resu => {
      this.Business = resu;
      console.log(this.Business);
    });
  }

  Filter() {
    this.api.Filter(this.SubService_Name).subscribe(
      resu => {this.Business=resu}
    )
  }

  search() {
    this.api.SearchByName(this.name).subscribe(
      resu => {this.Business=resu}
    )
  }

}
