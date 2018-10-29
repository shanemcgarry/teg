import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  canUpload = false;
  constructor(private appRoute: Router) { }

  ngOnInit() {
  }

  createNew(): void {
    this.appRoute.navigate(['/quiz/new']);
  }

}
