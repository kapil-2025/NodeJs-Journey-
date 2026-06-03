// notes global constant dekho agar tumhe folder name chahiye tio use dir=>directory and file name chahiye too use kro filname 
// console.log(__dirname);
// console.log(__filename);
// notes ye path module hai jo nhume define krke nikalana prta hau
const path=require('path');
const file ="20-PathModule/papaji.txt"
console.log(path.extname(file)); // isse hum eextension name pta chlta hai
console.log(path.dirname(file)); // ye to folder milta hai
console.log(path.basename(file));// ye file ka pura name deti hai
console.log(path.isAbsolute(file));
console.log(path.resolve("20-PathModule","papaji.txt"));







