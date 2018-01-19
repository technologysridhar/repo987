import { BrowserModule } from '@angular/platform-browser';
/*import { NgModule } from '@angular/core';*/
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MembershipComponent } from './membership/membership.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'signin',      component: SigninComponent },
  { path: 'pricing',      component: MembershipComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '',
   component: HomeComponent 
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent,
    BooksComponent,
    SearchComponent,
    ContactComponent,
    BookdetailsComponent,
    CheckoutComponent,
    SigninComponent,
    SignupComponent,
    ForgotpwdComponent,
    NewsletterComponent,
    TestimonialsComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
   RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    BrowserModule,
     MDBBootstrapModule.forRoot()
  ],
  /*schemas: [ NO_ERRORS_SCHEMA ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
