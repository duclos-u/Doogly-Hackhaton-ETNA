import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude = 48.8124937;
  longitude = 2.3696739;
  options: string[] = ['Éducateur canin', 'Vétérinaire', 'Éleveur', 'Toilleteur canin'];
  constructor() { }
  ngOnInit() {
   
  }
  OnChoseLocation(event: any) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

  }
  
        

}
