import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'easyfullcalendar';
    display : boolean = false;
    constructor(public breakpointObserver: BreakpointObserver){

    }
    
    
    showNav(){
        this.display = !this.display;
    }

    helpPopup() {
      var body = document.body;
      var popup = document.createElement('div');
      popup.className = "help_popup";
      body.append(popup);
      popup.append("Voulez vous de l'aide ?");
    }
    
ngOnInit(){

    this.breakpointObserver
      .observe(['(min-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.display = false;
        } else {
          this.display = true;
        }
      });

   setTimeout(() => {
        $("#calendar").fullCalendar({  
                        header: {
                            left   : 'prev,next today',
                            center : 'title',
                            right  : 'month,agendaWeek,agendaDay'
                        },
                        navLinks   : true,
                        editable   : true,
                        eventLimit : true,
                        events: [
                            {
                                title : 'RDV',
                                start : '2019-12-14T12:30:00',
                                color : '#f10000' // override!
                            },
                            
                        ],  // request to load current events
                    });
                  }, 100);

   }

}