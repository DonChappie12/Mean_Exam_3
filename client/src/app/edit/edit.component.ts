import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  errors = [];
  oldRestaurant: any;
  freshRestaurant: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.oldRestaurant = {restaurant: "", description: "", cuisine: ""};
    this.freshRestaurant = {restaurant: "", description: "", cuisine: ""};
    this.errors = [];
    this._route.params.subscribe((params: Params)=>{
      this.oneRestaurant(params['id'])
    });
  }
  oneRestaurant(id){
    this._http.getOneRestaurant(id).subscribe(data=>{
      this.oldRestaurant = data;
    });
  }
  editOldRestaurant(){
    this._http.updateRestaurant(this.oldRestaurant._id, this.oldRestaurant).subscribe(data=>{
      if('errors' in data){
        this.errors = [];
        for(let key in data['errors']){
          this.errors.push(data['errors'][key]['message'])
        }
      }
      else{
        this.freshRestaurant = data;
        this._router.navigate(['/restaurants', this.freshRestaurant._id])
       }
    })
  }

}
