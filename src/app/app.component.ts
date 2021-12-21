import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traffic';
  value = 'none';

  greenFun(){
    // if(this.value != 'green'){
    //   this.value = 'green';
    // }
    // else{
    //   this.value = 'none';
    // }

    this.value = (this.value != 'green')?'green':'none';
  }
  yellowFun(){
    // if(this.value != 'yellow'){
    //   this.value = 'yellow';
    // }
    // else{
    //   this.value = 'none';
    // }
    this.value = (this.value != 'yellow')?'yellow':'none';

  }

  redFun(){
    // if(this.value != 'red'){
    //   this.value = 'red';
    // }
    // else{
    //   this.value = 'none';
    // }

    this.value = (this.value != 'red')?'red':'none';
  }

}
