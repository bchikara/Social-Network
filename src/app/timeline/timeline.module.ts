import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { FriendsComponent } from './friends/friends.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { TimeLineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [AboutComponent,TimelineComponent, AlbumComponent, FriendsComponent,PostComponent],
  imports: [
    CommonModule,
    TimeLineRoutingModule,
    CoreModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlAS-bx-M16bI-vm8RUDIE3z02MdhWEFQ'
    }),

  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TimelineModule { }
