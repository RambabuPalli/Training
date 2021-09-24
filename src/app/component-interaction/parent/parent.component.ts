import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  message="Hello from parent component"

  name="getter setter example"
  items :string[]=['item-1'];

  status:boolean=false;
  ngOnInit(): void {
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
