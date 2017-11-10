export default class RepublicDroneSquad {
  static id = "rds"
  static instance() {
    return {
        "id":this.id,
        "icon":"200.gif",
        "name":"Drone ",
        "title":"Republic Drone Squad",
        "description":"Description goes here",
        "power":14,
        "laser":2,  
        "atomic":0,
        "hull":0,
        "shield":1,
        "abilities": [
          {
            "description":"Ability description",
            "power":2
          },
          {
            "description":"Ability description",
            "power":2
          }

        ]
    }
  }
}
