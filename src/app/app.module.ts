import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritePage } from '../pages/favorite/favorite';

import { SearchPage } from '../pages/search/search';
import { TestPage } from '../pages/test/test';
import { MypointPage } from '../pages/mypoint/mypoint';
import { LessonPage } from '../pages/lesson/lesson';
import { ProfilePage } from '../pages/profile/profile';
import { TopicPage } from '../pages/topic/topic';
import { DotestPage } from '../pages/dotest/dotest';
import { MaterialPage } from '../pages/material/material';
import { StarttestPage } from '../pages/starttest/starttest';
import { ListingService } from '../pages/search/search.service';
import { EditprofilePage } from '../pages/editprofile/editprofile';

import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    IntroPage,
    TutorialPage,
    RegisterPage,
    TabsPage,
    FavoritePage,
    SearchPage,
    TestPage,
    MypointPage,
    LessonPage,
    ProfilePage,
    TopicPage,
    DotestPage,
    PreloadImage,
    BackgroundImage,
    MaterialPage,
    StarttestPage,
    EditprofilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom'
    }, {}
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    IntroPage,
    TutorialPage,
    RegisterPage,
    TabsPage,
    FavoritePage,
    SearchPage,
    TestPage,
    MypointPage,
    LessonPage,
    ProfilePage,
    TopicPage,
    DotestPage,
    MaterialPage,
    StarttestPage,
    EditprofilePage
  ],
  providers: [ListingService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
