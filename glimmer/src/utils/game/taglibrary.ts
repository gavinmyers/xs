import RepublicArtilleryBattalion from "../../utils/tags/RepublicArtilleryBattalion"
import RepublicDroneSquad from "../../utils/tags/RepublicDroneSquad"

export default class TagLibrary {
  static tags = null 
  static init() {
    TagLibrary.tags = {}
    TagLibrary.loadTag(RepublicArtilleryBattalion)
    TagLibrary.loadTag(RepublicDroneSquad)
  }
  static loadTag(c) {
    TagLibrary.tags[c.id] = c
  }
  static get(id) {
    if(TagLibrary.tags === null) {
      TagLibrary.init()
    }
    return TagLibrary.tags[id].instance()
  }
}

