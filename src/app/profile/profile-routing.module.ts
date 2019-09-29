import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { WorkComponent } from './work/work.component';
import { SettingComponent } from './setting/setting.component';
import { InfoComponent } from './info/info.component';
import { InterestComponent } from './interest/interest.component';
import { ProfileComponent } from './profile.component';


export const routes: Routes = [
{path:"profile",component:ProfileComponent,children:[
    { path:'info',component:InfoComponent},
    { path:'interest',component:InterestComponent },
    { path:'setting',component:SettingComponent},
    { path:'work',component:WorkComponent},
    { path:'change-password',component:PasswordComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }