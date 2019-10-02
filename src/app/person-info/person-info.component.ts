import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  firstName: string ="";
  response : any;
  constructor(private http: HttpClient){

  }
  
  ngOnInit(){
   
}
search(){
  this.http.get('http://localhost:9080/api/persons?firstName='+ this.firstName).subscribe((response)=>{
    this.response = response;
    console.log(this.response);
  });
}
}
