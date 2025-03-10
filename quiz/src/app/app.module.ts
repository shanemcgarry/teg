import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FileAccessService } from './controllers/file-access.service';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionGroupComponent } from './components/question-group/question-group.component';
import { QuestionComponent } from './components/question/question.component';
import { HttpErrorHandlerService } from './controllers/http-error-handler.service';
import { MessageService } from './controllers/message.service';
import { AssetInfoComponent } from './components/asset-info/asset-info.component';
import { QuizMarkComponent } from './components/quiz-mark/quiz-mark.component';
import { ResultDetailsComponent } from './components/result-details/result-details.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionGroupComponent,
    QuestionComponent,
    AssetInfoComponent,
    QuizMarkComponent,
    ResultDetailsComponent
  ],
  imports: [
    routing,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    MatProgressBarModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [ FileAccessService, HttpErrorHandlerService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
