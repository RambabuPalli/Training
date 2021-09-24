import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private Testservice:TestService) {
    console.log("function calling to service");
    this.message=this.Testservice.view_msg();
    console.log(this.message);
   }

   message:string;
  canSave =  true;
  isSpecial = true;
  isUnchanged = true;
  currentClasses: Record<string, boolean> = {};
  isspecial=false;

  size:number;

  show=false;
  Listitem=["item-1","item-2","item-3","item-4","item-5"]
  ngOnInit(): void {
    this.setCurrentClasses()
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

}
