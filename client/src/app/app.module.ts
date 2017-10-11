import { ShoppingcartService } from './services/shoppingcart.service';
import { NgDatepickerModule } from 'ng2-datepicker';
import { UserService } from './services/user.service';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { routes } from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { UserDetailsComponent } from './userprofile/user-details/user-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    TruncatePipe,
    FilterPipe,
    ProductsComponent,
    ProductDetailComponent,
    UserDetailsComponent,
    ProductEditComponent,
    ProductNewComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgDatepickerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    ProductsService,
    UserService,
    ShoppingcartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
