import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { FriendsComponent } from './friends/friends.component';
import { PostComponent } from './post/post.component';


export const routes: Routes = [
{path:"timeline",component:TimelineComponent,children:[
    { path:'post',component:PostComponent},    
    { path:'post/:id',component:PostComponent},
    { path:'about',component:AboutComponent },
    { path:'album',component:AlbumComponent},
    { path:'friends',component:FriendsComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeLineRoutingModule { }