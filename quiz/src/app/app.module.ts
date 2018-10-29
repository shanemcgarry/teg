import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FileAccessService } from './controllers/file-access.service';
import { QuizComponent } from './components/quiz/quiz.component';
import { MarkComponent } from './components/mark/mark.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    MarkComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FlexLayoutModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [ FileAccessService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
