import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { InterestComponent } from './interest/interest.component';
import { WorkComponent } from './work/work.component';
import { SettingComponent } from './setting/setting.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile.component';
import { CoreModule } from '../core/core.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InfoComponent, InterestComponent, WorkComponent, SettingComponent, PasswordComponent, ProfileComponent],
  imports: [
    RouterModule,
    CommonModule,
    CoreModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
