import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants: any[]=[];
  restaurant: any;
  hide: boolean;
  now: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getRestaurants().subscribe((data: any[])=> this.restaurants = data);
    this.now = new Date; 
    this.hide = true;
    setTimeout(function() {
      // if(this.restaurant.createdAt>Date){
      // }
      // else{
      //   this.hide = true;
      // }
      this.hide = false;
    }.bind(this), 5000);
  }
  removeRestaurant(id){
    this._http.deleteRestaurant(id).subscribe(data=> {
      this.restaurant = data;
      this.ngOnInit();
    })
  }

}
