function sortWords(str) {
    var sharedWords = str.split(' ');
    var sharedWordsAndLetters = [];
    for(var i = 0; i < sharedWords.length; i++){
        sharedWordsAndLetters[i] = sharedWords[i].split('');
        sharedWordsAndLetters[i].sort();
        sharedWordsAndLetters[i] = sharedWordsAndLetters[i].join('');
    }

    var arrObj = [];

        for (var i = 0; i < sharedWords.length; i++){
            arrObj.push({key1 : sharedWords[i], key2 : sharedWordsAndLetters[i]})
    }

    arrObj.sort (function (a,b){
        if (a.key2 < b.key2) return -1;
    });

    var getSort = [];

    for (var i = 0; i < arrObj.length; i++){
        getSort.push (arrObj[i].key1);
    }

    return getSort.join(' ');
}

console.log(sortWords('A3lice 2Bob Er1nst')); // 'Er1nst 2Bob A3lice';
console.log(sortWords('2Fiona Ig7or J1amila B3ob Ali5ce')); // 'J1amila 2Fiona B3ob A3lice Ig7or';
console.log(sortWords('Tes1t')); // 'Tes1t';

