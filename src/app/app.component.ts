import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking';
  public isMenuCollapsed = true;
  isMobile=false;
  active = 1;
  currentRate=3;
  public collapseChoices=false;
  collapseSection(id){    
    this.collapseChoices=!this.collapseChoices;
    console.log(this.collapseChoices);
  }
  
  ngOnInit() {
    if (window.screen.width <=900) { // 900px minimum width
      this.isMobile = true;
      this.collapseChoices=false;
    }
  }

}
