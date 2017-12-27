export default class TileLibrary {
  static tiles = {}
  static init() {
  }

  static loadTile(id, ret) {
    if(TileLibrary.tiles[id] != null) {
      throw new Error("The TileLibrary already contains something like this!!!");
    }
    TileLibrary.tiles[id] = ret
  }

  static get(id) {

    if(TileLibrary.tiles == null) {
      throw new Error("The entire tile library is null")
    } else if(TileLibrary.tiles[id] == null) {
      throw new Error("Unable to find tile of " + id + " was the tile loaded in index.ts?")
    } else {
      return TileLibrary.tiles[id]()
    }
  }
}
