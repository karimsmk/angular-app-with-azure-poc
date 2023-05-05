import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ProductSearchComponent } from './product-search/product-search.component';

const routes: Routes = [
  {path:'advanced-search', component:AdvancedSearchComponent},
  {path:'product-search',component:ProductSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
