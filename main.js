//C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let i = 0; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
};

//Conjunction Function
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`
  console.log(conjoinedWord)
}

conjunction("Master", "Card")

//Mod Squad
{
  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }
  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
  })
console.log(HTMLRepresentation)
}

//Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {
    const invalidLocation = true

    if (location[0] > 1) {
     console.log("This location is valid")
    }

    if (invalidLocation) {
      console.log("This location is invalid")
    }
}

//Advanced: Lambda Llama
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
    }

    return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker())
