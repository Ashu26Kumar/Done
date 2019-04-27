import { Component, OnInit } from '@angular/core';
import { BusinessServiceService } from '../business-service.service';
import 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email;
  phone;
  Signup;
  constructor(private api: BusinessServiceService) { }

  ngOnInit() {
  }

  search() {
    this.api.Forgot(this.email,this.phone).subscribe(
      resu => {this.Signup=resu}
    )
  }

}
