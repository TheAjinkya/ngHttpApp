import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  saveData(api, dataObject){
      return this.http.post(api, dataObject)
  }

  getData(api){
      return this.http.get(api)
  }

  deleteData(api, index){
      return this.http.delete(api, index)
  }

  editData(){

  }

  getGrid(link){
    return this.http.get(link)
  }

}
