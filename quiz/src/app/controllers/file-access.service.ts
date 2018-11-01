import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QuizStep } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class FileAccessService {
  handleError: HandleError;

  constructor(private httpClient: HttpClient, private httpError: HttpErrorHandlerService) {
    this.handleError = this.httpError.createHandleError('FileAccessService');
  }

  getQuestionFile(): Observable<QuizStep[]> {
    return this.httpClient.get<QuizStep[]>('./assets/question-data/question-data.json')
      .pipe(
        catchError(this.handleError('getQuestionFile', null))
      );
  }
}
