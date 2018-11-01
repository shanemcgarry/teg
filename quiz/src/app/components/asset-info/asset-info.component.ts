import { Component, Input, OnInit } from '@angular/core';
import {FileAsset} from '../../models/question.model';
import { AssetType } from '../../models/enums';
import { AssetTypeAware } from '../../models/enum-decorator';

@Component({
  selector: 'app-asset-info',
  templateUrl: './asset-info.component.html',
  styleUrls: ['./asset-info.component.scss']
})
@AssetTypeAware
export class AssetInfoComponent implements OnInit {
  @Input() data: FileAsset;
  assetType = AssetType;
  constructor() { }

  ngOnInit() {
  }

  getFileSource(): string {
    return `./assets/${this.data.value}`;
  }
}
