import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import {QuizComponent} from './components/quiz/quiz.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'quiz/:action', component: QuizComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
