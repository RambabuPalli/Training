import { Component, OnInit } from '@angular/core';
import { ValidatorFn, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

    colleges=["URCET","SRK-IT","NRI"]
    date=new Date();
    DD:String=this.date.getDate().toString();
    MM:String=(this.date.getMonth()+1).toString();
    YYYY:String=this.date.getFullYear().toString();
    today:String;
    dropdownList:{id:number,itemName:string}[];
    selectedItems:{id:number,itemName:string}[];

    dropdownSettings = {};

  constructor(private form_build:FormBuilder) {
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


  profileform=this.form_build.group(
    {
      firstname: ['', [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      college:['',Validators.required],
      gender:['',Validators.required],
      notify:[false],
      desc:['',[Validators.required,Validators.minLength(50)]],
      DOB:[''],
      sport:this.form_build.group(
        {
          cricket:['',Validators.required],
          hockey:['',Validators.required],
          football:['',Validators.required],
          kabaddi:['',Validators.required]
        }
       ),
       skills: [[], Validators.required]

    }
  )



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
onItemSelect(item:any){
console.log(item);
console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
console.log(item);
console.log(this.selectedItems);
}
onSelectAll(items: any){
console.log(items);
}
onDeSelectAll(items: any){
console.log(items);
}

  }






// {

//   const sport=control.get('sport')
//   const cricket=sport?.value.cricket;
//   const hockey=sport?.value.hockey;
//   const football=sport?.value.football;
//   const kabaddi=sport?.value.kabaddi;
//  // console.log(sport)

//   // if(sport?.controls.cricket.pristine==true||hockey?.pristine==true||football?.pristine==true||kabaddi?.pristine==true)
//   // {
//   //   return null;
//   // }
//   //console.log(cricket && hockey &&football && kabaddi? {'required':false}:true);

//   return cricket && hockey && football && kabaddi? {'required':false}:true


// }
