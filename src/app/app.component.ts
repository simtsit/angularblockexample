import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Form Example!';

  blocks = [{
    "name": "block1",
    "body": "body1"
  },
  {
    "name": "block2",
    "body": "body2"
  },
  {
    "name": "block3",
    "body": "body3"
  }];


  addBlock(){
  	this.blocks.push({"name": "newBlock", "body":"New block body!"});
  }

}
