import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreasComponent } from './areas/areas.component';
import { AreasListComponent } from './areas/areas-list/areas-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { CitizentComponent } from './citizent/citizent.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    AreasListComponent,
    HeaderComponent,
    ContainerComponent,
    CitizentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
