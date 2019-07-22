function splitArr(str){
    return str.split(' ');
}
function searchNumber(say){
    for(var i = 0; i < say.length; i++){
        if (!isNaN(+say[i])){
            return say[i];
        }
    }
}
function mainSort(str){
    var sortArr = splitArr(str);
    sortArr.sort(function(a, b){
        return searchNumber(a) - searchNumber(b);
    });
    return sortArr.join(' ');
}

console.log (mainSort('A3lice 2Bob Er1nst'));
console.log (mainSort('2Fiona Ig7or J1amila B3ob Ali5ce'));
console.log (mainSort('Tes1t'));