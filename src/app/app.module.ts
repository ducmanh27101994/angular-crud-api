import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './products/list/list.component';
import { AddComponent } from './products/add/add.component';
import { EditComponent } from './products/edit/edit.component';
import { ShowComponent } from './products/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
