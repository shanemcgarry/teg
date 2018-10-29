import { Routes, RouterModule } from '@angular/router';

import { MarkComponent } from './components/mark/mark.component';
import { QuizComponent } from './components/quiz/quiz.component';

const appRoutes: Routes = [
  { path: 'mark', component: MarkComponent },
  { path: '', component: QuizComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
