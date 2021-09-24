import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }
   record=[
     {
       id:"emp01",
       name:"Rambabu",
      gender:"Male",
      points:50,
      income:10
     },
     {
      id:"emp02",
      name:"Test2",
     gender:"Male",
     points:70,
     income:15
    },
    {
      id:"emp03",
      name:"Test3",
     gender:"Female",
     points:80,
     income:20
    }
   ]
  ngOnInit(): void {
  }

}
