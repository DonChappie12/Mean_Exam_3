import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errors = [];
  newRestaurant: any;

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRestaurant = {restaurant: "", cuisine: ""};
    this.errors = []
  }
  createRestaurant(){
    this._http.addRestaurant(this.newRestaurant).subscribe(data=>{
      if('errors' in data){
        this.errors = [];
        for(let key in data['errors']){
          this.errors.push(data['errors'][key]['message'])
        }
      }
      else{
        this._router.navigate(['/restaurants'])
      }
    })
  }

}
