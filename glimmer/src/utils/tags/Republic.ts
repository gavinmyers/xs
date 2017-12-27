import TagLibrary from "../../utils/game/taglibrary"

TagLibrary.loadTag("REP_ab", function() {
    return {
        "id":"REP_ab",
        "icon":"100.gif",
        "name":"Artillery ",
        "title":"Republic Artillery Battalion",
        "power":4,
        "laser":4,
        "atomic":3,
        "hull":20,
        "shield":99
    }
  })

TagLibrary.loadTag("REP_ds", function() {
    return {
        "id":"REP_ds",
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
            "description":"Ability description Color Picker. Use the color picker by clicking and dragging your cursor inside the picker area to highlight a color on the right. Input Hex, RGB, HSL or CMYK values to search for a particular color in the fields below the color swatch; click the swatch to add it to your palette.",
            "power":2,
            "research":4
          },
          {
            "description":"Ability description",
            "power":2
          }

        ]
    }
  })
