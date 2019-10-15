console.log("Scope scope scope");

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let y = 0; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

const conjunction = function (firstWord, secondWord) {
    // const conjoinedWord = `${firstWord} ${secondWord}` // local scope
    return `${firstWord} ${secondWord}`
}

const conjoinedWord = conjunction("Master", "Card")  // global scope
console.log(conjoinedWord)