
function findLongestWord(str) {
    const words = str.split(" ");
    let longest = ""; 
    words.forEach (word => word.length > longest.length && (longest = word))
    return `Word: ${longest} \tLength: ${longest.length}`
    }
    const longestWord = findLongestWord ("Решение о том, какой вариант .");
    console.log(longestWord)