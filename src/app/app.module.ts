import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { routing }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/index';
import { CartComponent } from './cart/index';
import { PagerService } from './_models/book';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

@NgModule({
  declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BooksComponent,
        CartComponent
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        HttpClientModule,
        InfiniteScrollModule,
        NgHttpLoaderModule
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PagerService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
