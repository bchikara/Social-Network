import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { CoreModule } from './core/core.module';
import { AgmCoreModule } from '@agm/core';
import { TimelineModule } from './timeline/timeline.module';
import { ProfileModule } from './profile/profile.module';
import { LoginComponent } from './homepage/login/login.component';
import { RegisterComponent } from './homepage/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/auth.guard';
import { AuthenticateService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { HttpService } from './shared/http.service';
import { ConfirmPassword } from './shared/confirm-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmPassword
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsfeedModule,
    CoreModule,
    TimelineModule,
    ProfileModule,
    FormsModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthGuard,AuthenticateService,HttpService,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
