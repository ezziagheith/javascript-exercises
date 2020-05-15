// const palindromes = function(str) {
//     return str == str.split('').reverse().join('');
// }

const palindromes = function() {
    let string = 'Racecar!'
    return string.split('').reverse().join('').toLowerCase().replace(/\W/g, '');
}

module.exports = palindromes
