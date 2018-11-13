import {Component, Input, OnInit, QueryList, AfterViewInit, ViewChildren} from '@angular/core';
import { QuestionGroup } from '../../models/question.model';
import {AssetInfoComponent} from '../asset-info/asset-info.component';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss']
})
export class QuestionGroupComponent implements OnInit, AfterViewInit {
  @Input() data: QuestionGroup;
  @ViewChildren(AssetInfoComponent) assets: QueryList<AssetInfoComponent>;
  constructor() { }

  ngAfterViewInit() {
}

  public stopAudio(): void {
    if (this.assets) {
      this.assets.forEach( x => {
        x.stopAudio();
      });
    }
  }

  ngOnInit() {
  }

}
