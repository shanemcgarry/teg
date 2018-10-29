import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QuestionGroup } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class FileAccessService {
  handleError: HandleError;

  constructor(private httpClient: HttpClient, private httpError: HttpErrorHandlerService) {
    this.handleError = this.httpError.createHandleError('FileAccessService');
  }

  getQuestionFile(): Observable<QuestionGroup[]> {
    return this.httpClient.get<QuestionGroup[]>('./assets/question-data/question-data.json')
      .pipe(
        catchError(this.handleError('getQuestionFile', null))
      );
  }
}
