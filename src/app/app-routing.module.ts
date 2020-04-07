import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {path :'normal', component : BlogComponent},
  {path :'rxjs', component : RxjsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
