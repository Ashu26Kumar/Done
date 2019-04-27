import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business-service.service';
import 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Doctor;
  
  

  constructor(private api: BusinessServiceService, private route: Router) { }

  ngOnInit() {
    this.api.getDoctor().subscribe(resu => {
      this.Doctor = resu;
      console.log(this.Doctor);
    });
  }

 getType(category: string)
 {
   this.api.categoryobj.category = category;
   console.log(category);
   this.route.navigate(['/Maintenance']);
 }

}
