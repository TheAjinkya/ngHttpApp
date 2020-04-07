import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { error } from 'protractor';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  blogs:[{title:string, content: string, id: string}]
  myData:any=[]

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.fetchAll()
  }

  onSubmit(form : NgForm){
    const formData = form.value
    console.log("formdata ", form.value)
    this.dataService.saveData('https://authapp-c0959.firebaseio.com/blogdata.jsons', formData)
    .subscribe(
      response=>{
        console.log("response", response)
      },
      error =>{
        console.log("error", error)
      }
    )

  }

  fetchAll(){
    this.dataService.getData('https://authapp-c0959.firebaseio.com/blogdata.json')
    .pipe(
      map(response=>{
        const resArray = []
        // resArray.push(response)
        for(let key in response){
        resArray.push({...response[key].data, id: key})   
        }
        console.log("resArray ", resArray)
        console.log("map response", response, typeof(response), resArray)
        return resArray
      })
    )
    .subscribe(
      response=>{
        // for(let i of response){
        //   this.myData.push(i)
        // }
        this.myData = response.map(res=>res)
        console.log("myData", this.myData)
      },
      error=>{
      console.log(error)
      }
    )
  }

}
