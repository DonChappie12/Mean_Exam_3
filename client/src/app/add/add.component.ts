import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  restaurant: any;
  errors=[];
  newReview: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newReview = {name: "", description: "", star: 1};
    this.restaurant = {restaurant: "", cuisine: "", review: [{}]};
    this.errors = [];
    this._route.params.subscribe((params: Params)=>{
      this.oneRestaurant(params['id'])
    });
  }
  oneRestaurant(id){
    this._http.getOneRestaurant(id).subscribe(data=>{
      this.restaurant = data;
    })
  }
  createReview(){
    this._http.addReview(this.restaurant._id, this.newReview).subscribe(data=>{
      if(data['errors']){
        this.errors = [];
        for(let key in data['errors']){
          this.errors.push(data['errors'][key]['message'])
        }
      }
      else{
        this._router.navigate(['/restaurants', this.restaurant._id])
      }
    })
  }

}