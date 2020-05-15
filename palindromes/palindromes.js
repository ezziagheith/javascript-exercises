// const palindromes = function(str) {
//     return str == str.split('').reverse().join('');
// }


const palindromes = function(str){
    fixedString = str.replace(/\W/g, '').toLowerCase();
    return fixedString.split('').reverse().join('') == fixedString
}






module.exports = palindromes
