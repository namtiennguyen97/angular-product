import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
keyword: string;
@Output() filterKeyword = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
getKeyWord(): void {
    this.filterKeyword.emit(this.keyword);
}
}
