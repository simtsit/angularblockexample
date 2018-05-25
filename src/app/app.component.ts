import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Blocks Example!';

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

  blockCounter = 3;
 


  addBlock(){
    this.blockCounter++;
    let newBlockName = "Block";
    let newBlockBody = "Body";
    newBlockName = newBlockName + String(this.blockCounter);
    newBlockBody = newBlockBody + String(this.blockCounter);
    this.blocks.push({"name": newBlockName, "body": newBlockBody});
    console.log("A new block has been added!");
  }

  removeBlock(index){
    this.blocks.splice(index,1);
    console.log("Removed block: #" + ++index);
  }

}
