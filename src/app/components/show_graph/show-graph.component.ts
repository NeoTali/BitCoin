import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-graph',
  templateUrl: './show-graph.component.html',
  styleUrls: ['./show-graph.component.css']
})
export class ShowGraphComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() data: [];
  @Input() columns: [];

  public columnNames = ['Day', 'Jan'];

  constructor() { }

  ngOnInit(): void {

  }

}
