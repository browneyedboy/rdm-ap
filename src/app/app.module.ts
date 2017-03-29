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
import { RealsearchPage } from '../pages/realsearch/realsearch';
import { ProfessionPage } from '../pages/profession/profession';
import { BytypePage } from '../pages/bytype/bytype';
import { AboutprofPage } from '../pages/aboutprof/aboutprof';

import { TopicPage } from '../pages/topic/topic';
import { DotestPage } from '../pages/dotest/dotest';
import { TimerComponent } from '../pages/dotest/timer';
import { MaterialPage } from '../pages/material/material';
import { StarttestPage } from '../pages/starttest/starttest';
import { ListingService } from '../pages/search/search.service';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ResultPage } from '../pages/result-page/result-page';
import {ForgotpassPage} from '../pages/forgotpass/forgotpass';
import {AboutuniPage} from '../pages/aboutuni/aboutuni';



import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { Lessondata } from '../providers/lessondata';


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
    EditprofilePage,
    RealsearchPage,
    TimerComponent,
    ResultPage,
    ForgotpassPage,
    AboutuniPage,
    ProfessionPage,
    BytypePage,
    AboutprofPage
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
    EditprofilePage,
    RealsearchPage,
    TimerComponent,
    ResultPage,
    ForgotpassPage,
    AboutuniPage,
    ProfessionPage,
    BytypePage,
    AboutprofPage
  ],
  providers: [ListingService, Lessondata],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
