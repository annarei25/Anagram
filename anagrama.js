function anagram(str1, str2){
    const str1clean=str1.toLowerCase()
    const str2clean=str2.toLowerCase()

    if(str1clean.length !== str2clean.length){
        return false;
    }

    return str1clean.split('').sort().join('') === str2clean.split('').sort().join('')
}

console.log(anagram('amor','roma'))
console.log(anagram('casa','saca'))
console.log(anagram('tapa','pata'))
console.log(anagram('sapo','paso'))
console.log(anagram('mesa','silla'))
