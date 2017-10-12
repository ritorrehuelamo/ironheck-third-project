import { OrderComponent } from './order/order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UserDetailsComponent } from './userprofile/user-details/user-details.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';

import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user',  component: UserprofileComponent, canActivate: [ IsLoggedInService ]  },
    { path: 'user/profile', component: UserDetailsComponent, canActivate: [IsLoggedInService] },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'products', component: ProductsComponent },
    { path: 'products/new', component: ProductNewComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'products/:id/buy', component: ShoppingCartComponent },
    { path: 'products/:id/edit', component: ProductEditComponent },
    { path: 'orders/:id/user', component: OrderComponent},
    { path: '**', redirectTo: '' }
];
