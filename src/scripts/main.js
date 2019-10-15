console.log("Scope scope scope");

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let y = 0; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// const conjunction = function (firstWord, secondWord) {
//     // const conjoinedWord = `${firstWord} ${secondWord}` // local scope
//     return `${firstWord} ${secondWord}`
// }

// const conjoinedWord = conjunction("Master", "Card")  // global scope
// console.log(conjoinedWord)

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}
