var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { TopicPage } from '../pages/topic/topic';
import { DotestPage } from '../pages/dotest/dotest';
import { TimerComponent } from '../pages/dotest/timer';
import { MaterialPage } from '../pages/material/material';
import { StarttestPage } from '../pages/starttest/starttest';
import { ListingService } from '../pages/search/search.service';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ResultPage } from '../pages/result-page/result-page';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { AboutuniPage } from '../pages/aboutuni/aboutuni';
import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { Lessondata } from '../providers/lessondata';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            AboutuniPage
        ],
        imports: [
            IonicModule.forRoot(MyApp, {
                tabsPlacement: 'bottom'
            }, {})
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
            AboutuniPage
        ],
        providers: [ListingService, Lessondata],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map