import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  i = document.getElementById("signin");
  u = document.getElementById("signup");
  mb = document.getElementById("move-button");

  constructor() { }

  ngOnInit() {
  }
   

   signup() {
     console.log("yes");
      this.i.style.left = "-400px";
      this.u.style.left = "50px";
      this.mb.style.left = "110px";
  }
  signin() {
      this.i.style.left = "50px";
      this.u.style.left = "450px";
      this.mb.style.left = "0px";
  }

}
