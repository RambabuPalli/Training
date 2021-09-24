import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  constructor() { }
  private _name='';
  @Input() messageTo:string;
  @Input()
  get name(){return this._name}
  set name(name:string){ this._name=name}
  @Input() log_status:boolean;

  @Output() newItemEvent = new EventEmitter<string>();


  ngOnChanges(changes:SimpleChanges):void
  {
    console.log(changes)

  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
