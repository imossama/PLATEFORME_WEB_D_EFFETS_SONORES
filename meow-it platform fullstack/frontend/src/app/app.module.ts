import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlaybackComponent } from './components/playback/playback.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FeedMeComponent } from './components/feed-me/feed-me.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileInfosComponent } from './components/profile-infos/infos.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaybackComponent,
    UserCardComponent,
    MusicCardComponent,
    SearchbarComponent,
    FeedMeComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotificationsComponent,
    ProfileInfosComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }