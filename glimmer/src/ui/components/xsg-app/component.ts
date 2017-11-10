import Component, { tracked } from "@glimmer/component";
import Session from "../../../utils/session/session"
import TagLibrary from "../../../utils/game/taglibrary"

export default class Xsg extends Component {
  constructor(arg) {
    super(arg)
    var session = new Session()
    this.tags.push(TagLibrary.get("rab")) 
    this.tags.push(TagLibrary.get("rab")) 
    this.tags.push(TagLibrary.get("rds")) 
  }
  @tracked tags = []
  

  rows = [1,2,3,4,5,6,7,8]
  columns = [1,2,3,4,5,6,7,8]
  
  @tracked isTags = false 
  @tracked isBoard = false 

  viewTags() {
    this.isTags = true 
    this.isBoard = false
  }
  viewBoard() {
    this.isTags = false 
    this.isBoard = true 
  }
  
  increment() {
/*
    var arr = this.tags;
    arr.push("blue");
    this.tags = [];
    this.tags = arr;
    this.current++;
*/
  }
}



