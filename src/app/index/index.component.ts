import {Component, OnInit} from '@angular/core';
import { commService } from "../utility/service/comm.service";

@Component({
  providers:[ commService ],
  selector: 'storeIndex',
  templateUrl: './index.component.html',
  styleUrls:['assets/style/style.css']
})

export class IndexComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
