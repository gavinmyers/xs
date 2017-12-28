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
      this.tiles.push([])
      for(var y = 0; y < 12; y++) {
        var tile = TileLibrary.get("UNDEFINED")
        tile.x = x
        tile.y = y
        this.tiles[x].push(tile)
      }
    }
    this.appOnClick = this.appOnClick.bind(this)
  }

  appOnClick(data) {
    var tile = TileLibrary.get("BLOCK")
    if(data.id === "BLOCK") {
      tile = TileLibrary.get("OPEN")
    }
    var x = data.x
    var y = data.y
    tile.x = x
    tile.y = y
    this.tiles[x][y] = tile
    this.HACK_resetTiles()
  }

  HACK_resetTiles() {
    this.tiles = this.tiles.slice()
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
