import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FileAccessService } from './controllers/file-access.service';
import { QuizComponent } from './components/quiz/quiz.component';
import { MarkComponent } from './components/mark/mark.component';
import { QuestionGroupComponent } from './components/question-group/question-group.component';
import { QuestionComponent } from './components/question/question.component';
import { HttpErrorHandlerService } from './controllers/http-error-handler.service';
import { MessageService } from './controllers/message.service';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    MarkComponent,
    QuestionGroupComponent,
    QuestionComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [ FileAccessService, HttpErrorHandlerService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
