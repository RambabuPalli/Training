import { Component, OnInit } from '@angular/core';
import { profileform } from '../profileform';


@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  colleges=["URCET","SRK-IT","NRI"];
  // firstname='';
  // password='';
  // gender='';
  // select_clg='';
  // notify='';
  // desc='';
  // cricket='';
  // hockey='';
  // football='';
  // kabaddi='';
  // DOB='';
  // skills=[];

  data={
      firstname:'',
      password:'',
      gender:'',
      select_clg:'',
      notify:'',
      desc:'',
      cricket:'',
      hockey:'',
      football:'',
      kabaddi:'',
      DOB:'',
      skills:[]
  };

  date=new Date();
  DD:String=this.date.getDate().toString();
  MM:String=(this.date.getMonth()+1).toString();
  YYYY:String=this.date.getFullYear().toString();
  today:String;
  dropdownList:{id:number,itemName:string}[];
  selectedItems:{id:number,itemName:string}[];

  dropdownSettings = {};



  constructor() {
    if(Number(this.DD)<10)
    {
      this.DD='0'+this.DD;
    }
    if(Number(this.MM)<10)
    {
      this.MM='0'+this.MM;
    }
    this.today=this.YYYY+"-"+this.MM+"-"+this.DD;

   }

  ngOnInit(): void {
    this.dropdownList=[
      {"id":1,"itemName":"C"},
      {"id":2,"itemName":"C++"},
      {"id":3,"itemName":"Java"},
      {"id":4,"itemName":"Python"}
    ]

    this.dropdownSettings = {
      singleSelection: false,
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"

    };
  }

  check(val:any)
  {
    console.log(val);
    return true
  }

}
