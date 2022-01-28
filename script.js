let anagram=isAnagram("triangle","integral")
function isAnagram (word1,word2){
 if(word1.length==word2.length){
     let word1_sorted=word1.split("").sort().join();
     let word2_sorted=word2.split("").sort().join();
     return word1_sorted==word2_sorted;
 }
 else{
     console.log("words must be of the same length")
 }
}
console.log(anagram)