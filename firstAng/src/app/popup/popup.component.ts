import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var grisfond = document.getElementById("test");
    grisfond.classList.toggle("show");
  }
}
