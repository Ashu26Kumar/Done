import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class BusinessServiceService {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService) { }

  username;
  loginstatus = false;
  loginbtn = true;
  categoryobj = {
    category : ""
  }

  postBusiness(newBusiness){
    return this.http.post('http://localhost:55773/api/Business', newBusiness).subscribe(res=>console.log(res))
  }

  getBusiness() {
    return this.http.post('http://localhost:55773/api/Data', this.categoryobj);
  }

  getDoctor() {
    return this.http.get('http://localhost:55773/api/Doctor');
  }

  getSignup() {
    return this.http.get('http://localhost:55773/api/Signup');
  }
  
  postSignup(newSignup){
    return this.http.post('http://localhost:55773/api/Signup', newSignup).subscribe(res=>console.log(res))
  }

  DeleteRestaurant(business_ID){
    return this.http.delete(`http://localhost:55773/api/Business/${business_ID}`);
    
  }

  Search(ID){
    return this.http.get(`http://localhost:55773/api/Search/${ID}`);
  }

  Forgot(Email,Contact_Number){
    return this.http.get(`http://localhost:55773/api/Forgot/${Email}/${Contact_Number}`);
  }

  SearchByName(name){
    return this.http.get(`http://localhost:55773/api/SearchByName/${name}`);
  }

  ContactInformation(newBusiness){
    return this.http.post(`http://localhost:55773/api/Contact/`, newBusiness).subscribe(res=>console.log(res));
  }

  Filter(SubService_name)
  {
    return this.http.get(`http://localhost:55773/api/Filter/${SubService_name}`);
  }

  Login(customer)
  {
    const x = this.http.post('http://localhost:55773/api/Login', customer);
    console.log(x);
    return x;
  }

}
