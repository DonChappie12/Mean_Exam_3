import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getRestaurants(){
    return this._http.get('/api/restaurants')
  }
  addRestaurant(data){
    return this._http.post('/api/restaurants', data)
  }
  getOneRestaurant(id){
    return this._http.get('/api/restaurants/'+id)
  }
  addReview(id, data){
    return this._http.put('/api/restaurants/review/'+id, data)
  }
  updateRestaurant(id, data){
    return this._http.patch('/api/restaurants/update/'+id, data)
  }
  deleteRestaurant(id){
    return this._http.delete('/api/restaurants/'+id)
  }
}
