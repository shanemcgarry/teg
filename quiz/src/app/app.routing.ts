import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './components/quiz/quiz.component';

const appRoutes: Routes = [
  { path: '', component: QuizComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
