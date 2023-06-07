import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicationsComponent } from './publications/publications.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserStatisticsComponent } from './user-info/user-statistics/user-statistics.component';
import { CreatePublicationsComponent } from './publications/create-publications/create-publications.component';
import { BannerComponent } from './banner/banner.component';
import { TimeAgoPipe } from './pipe/time-ago.pipe';
import { AddFeedComponent } from './add-feed/add-feed/add-feed.component';
import { MoreViewCoursesComponent } from './more-view-courses/more-view-courses/more-view-courses.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PublicationsComponent,
    UserInfoComponent,
    UserStatisticsComponent,
    CreatePublicationsComponent,
    BannerComponent,
    TimeAgoPipe,
    AddFeedComponent,
    MoreViewCoursesComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    PublicationsComponent,
    UserInfoComponent,
    UserStatisticsComponent,
    CreatePublicationsComponent,
    BannerComponent,
    TimeAgoPipe,
    AddFeedComponent,
    MoreViewCoursesComponent,
  ],
})
export class SharedModule {}
