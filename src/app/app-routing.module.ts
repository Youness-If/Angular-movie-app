import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
