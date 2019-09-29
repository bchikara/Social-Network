import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './newsfeed.component';
import { VideoComponent } from './video/video.component';
import { ImagesComponent } from './images/images.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FriendsComponent } from './friends/friends.component';
import { PostComponent } from './post/post.component';
import { NearbyComponent } from './nearby/nearby.component';


export const routes: Routes = [
{path:"newsfeed",component:NewsfeedComponent,children:[
    { path:'video',component:VideoComponent },
    { path:'image',component:ImagesComponent},
    { path:'chatroom',component:ChatroomComponent},
    { path:'friends',component:FriendsComponent},
    { path:'post',component:PostComponent},
    { path:'nearby',component:NearbyComponent}, 
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsfeedRoutingModule { }