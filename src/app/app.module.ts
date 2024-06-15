import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'ShopComponent/:id', component: ShopComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
