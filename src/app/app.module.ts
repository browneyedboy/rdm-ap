import { NgModule } from '@angular/core';
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
import { ProfilePage } from '../pages/profile/profile'

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
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    ProfilePage
  ],
  providers: []
})
export class AppModule {}
