import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-person-project';

  routes=[
    { linkName: '', url:'all' },
    { linkName: 'Search by First Name', url:'firstName' }
  ]


constructor(){

}

ngOnInit(){
 }
}
