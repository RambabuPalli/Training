import { Injectable } from '@angular/core';
import { CheckService } from './check.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private checkservice:CheckService) {
    console.log(this.checkservice.send_msg())
   }

  view_msg()
  {
    console.log("function_called from component")
    return "message from test service";
  }
}
