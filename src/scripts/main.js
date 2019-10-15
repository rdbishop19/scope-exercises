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

// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`
//     })
//     document.querySelector(".show-info").innerHTML = HTMLRepresentation
// }


/* 
There are two separate scoping issues in this code. 
Remember, for and if are their own block scopes and if something 
is declared with let or const then that variable only exists in that scope.
 */
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1]]; // added [3,1] to check counter at end

let invalidLocationCount = 0;
for (let k = 0; k < locations.length; k++) {
    let invalidLocation; // added this line to add to 'for' loop scope
    let currentLocation = locations[k]; // changed 'const' to 'let'

    if (currentLocation[0] > 2) {
        invalidLocation = true // removed 'const' declaration
        invalidLocationCount++;
    // }                            // this separate 'if' logic is unnecessary
                                    // the above code evaluates the 'true' logic as well
    // if (invalidLocation) {       // commented these for reference
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidLocationCount} invalid locations`)