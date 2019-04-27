import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business-service.service';
import 'rxjs';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  ID;
  Business;
 


  constructor(private api: BusinessServiceService) { }

  ngOnInit() {
    
  }

  search() {
    this.api.Search(this.ID).subscribe(
      resu => {this.Business=resu}
    )
  }
  

  deleteCard(business_ID) {
    this.api.DeleteRestaurant(business_ID).subscribe();
    var index = this.Business.map((ele) => ele.restID).indexOf(business_ID);
    this.Business.splice(index, 1);
  }
}
