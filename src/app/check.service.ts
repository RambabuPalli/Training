import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() {
   }
   send_msg()
   {
     return  "message from check srvice"
   }
}
