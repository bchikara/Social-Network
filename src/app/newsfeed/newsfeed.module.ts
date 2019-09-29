import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FriendsComponent } from './friends/friends.component';
import { ImagesComponent } from './images/images.component';
import { NearbyComponent } from './nearby/nearby.component';
import { PostComponent } from './post/post.component';
import { VideoComponent } from './video/video.component';
import { NewsfeedComponent } from './newsfeed.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChatroomComponent,
    FriendsComponent,
    ImagesComponent,
    NearbyComponent,
    PostComponent,
    VideoComponent,
    NewsfeedComponent
  ],
  imports: [
    CommonModule,
    NewsfeedRoutingModule,
    CoreModule,
    RouterModule
  ]
})
export class NewsfeedModule { }
