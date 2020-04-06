import { Component, OnInit } from '@angular/core';
import { BlogData } from '../blog-data';
import { FormsModule, NgForm } from '@angular/forms'
import { from } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http'
// import { dataObject } from '../../assets/data.json'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = []
  constructor( private http : HttpClient) { }

  ngOnInit() {
    this.fetchAll()
  }

  save(form : NgForm ){
    const data = form.value
    this.http.post('https://authapp-c0959.firebaseio.com/blogdata.jsons', {data}).subscribe(Response => {
      console.log("Response", Response)
    },
    (error)=>{
      console.log(error)
    })
    console.log("form", form.value)
  }

  onSubmit(form : NgForm){
    const data = form.value
    // this.blogs.push(data)
    console.log("formData", data)
    this.http.post<{title: string, content : string}>('../../assets/data.json', data)
    .subscribe((response)=>{
      console.log("Post call response", response)
    })

  }

  fetchAll(){
    this.http.get<{data:any}>('../../assets/data.json').subscribe((response)=>{
      const blogData = response.data
      for(let elem of blogData){
        this.blogs.push(elem)
      }
      console.log("blogs array", this.blogs)
    })
  }

}
