export default class TagLibrary {
  static tags = {}
  static init() {
  }

  static loadTag(id, ret) {
    if(TagLibrary.tags[id] != null) {
      throw new Error("The TagLibrary already contains something like this!!!");
    }
    TagLibrary.tags[id] = ret
  }

  static get(id) {

    if(TagLibrary.tags == null) {
      throw new Error("The entire tag library is null")
    } else if(TagLibrary.tags[id] == null) {
      throw new Error("Unable to find tag of " + id + " was the tag loaded in index.ts?")
    } else {
      return TagLibrary.tags[id]()
    }
  }
}
