import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-all-person',
  templateUrl: './search-all-person.component.html',
  styleUrls: ['./search-all-person.component.css']
})
export class SearchAllPersonComponent implements OnInit {

  response : any;
  constructor(private http: HttpClient){}

  ngOnInit() {}
 
  searchAll(){
    this.http.get('http://personspringbootapi-env.7e8nmtvgje.us-east-2.elasticbeanstalk.com/api/persons/searchAll').subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    });
  }
}
