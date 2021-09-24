import { Component } from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training';
  button_enable=true;
  name:string="Rambabu";
  data:string;

  constructor(private router:Router){}

  change_path()
  {
    this.router.navigate(['Home']);
  }
  enable($event: Event){
    console.log("button is clicked!");
    if($event)
    {
       console.log($event.target);
       console.log($event);
    }

    if(this.button_enable)
    {
      this.button_enable=false;
    }
    else
    {
      this.button_enable=true;
    }

}




}
