import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  restaurant: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.oneRestaurant(params['id'])
    });
    this.restaurant = {
      restaurant: "",
      cuisine: "",
      review: [{
        name: "",
        description: "",
        star: ""
      }]
    }
    // this.restaurant.sort({star: "descending"})
    this.highest()
  }
  oneRestaurant(id) {
    this._http.getOneRestaurant(id).subscribe(data => {
      this.restaurant = data;
    })
  }
  highest(){
    return this.restaurant.sort({star: "descending"});
  }

}
