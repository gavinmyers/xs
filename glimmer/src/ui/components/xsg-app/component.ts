import Component, { tracked } from "@glimmer/component";
import Session from "../../../utils/session/session"
import TagLibrary from "../../../utils/game/taglibrary"
import TileLibrary from "../../../utils/game/tilelibrary"

export default class Xsg extends Component {
  constructor(arg) {
    super(arg)
    var session = new Session("")
    this.tags.push(TagLibrary.get("REP_ab"))
    this.tags.push(TagLibrary.get("REP_ab"))
    this.tags.push(TagLibrary.get("REP_ds"))
    this.tags.push(TagLibrary.get("SYS_cm"))
    this.tags.push(TagLibrary.get("SYS_es"))

    for(var x = 0; x < 12; x++) {
      this.tiles[x] = [];
      for(var y = 0; y < 12; y++) {
        var tile = TileLibrary.get("UNDEFINED")
        tile.x = x
        tile.y = y
        this.tiles[x][y] = tile
      }
    }
    this.appOnClick = this.appOnClick.bind(this)
  }

  appOnClick(data) {

    var tile = TileLibrary.get("BLOCK")
    var x = data.x
    var y = data.y
    this.tiles[x][y] = tile
    this.resetTiles() //HACK
  }

  resetTiles() {
    var newTiles = []
    for(var x = 0; x < 12; x++) {
      newTiles[x] = [];
      for(var y = 0; y < 12; y++) {
        newTiles[x][y] = this.tiles[x][y]
      }
    }
    this.tiles = []
    this.tiles = newTiles
  }


  @tracked tags = []

  @tracked tiles = []

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
