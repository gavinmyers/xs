import TileLibrary from "../../utils/game/tilelibrary"

TileLibrary.loadTile("UNDEFINED", function() {
  return {
      "id":"UNDEFINED",
      "icon":"",
      "name":"Empty Tile",
      "title":"Empty Tile"
  }
})

TileLibrary.loadTile("BLOCK", function() {
  return {
      "id":"BLOCK",
      "icon":"",
      "name":"Blocked Tile",
      "title":"Blocked Tile"
  }
})

TileLibrary.loadTile("OPEN", function() {
  return {
      "id":"OPEN",
      "icon":"",
      "name":"Open Tile",
      "title":"Open Tile"
  }
})
