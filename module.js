// global onject hum bina import k use kr skte hai const {name nikalna hai object student ka to isse destructuring kahte hai}=student console.log()
// console.error()
// console.warn()
// console.clear()
// console.table() ye bhi method hai globally 
// process ek global haoi process.cwd()=>cwd(currnt working directory ye use krne se hume folder maim chale jate hai ) pid bhi process id mtlb jab hmara computer chlta hai to hume ek unique id milti hai jo hum de skte hai hr bara alg hoti hai 
// nodejs k console jo hota wo hmara global hota hai aur uska output terminal mai aata h aur jo hamarfa js ka hota wo chronme k browsemai dikhata h 
// jo core modules hote h wo nodwe js mao already hote h inhi ko hum inbuilt module bhji kahte h 
// Node.js
// │
// ├── fs
// ├── os
// ├── path
// ├── http
// ├── console
// └── events inhe require sre use kr skte h jo fs hota h usme hunm crud operation perform kar skte h jo os operating system hkota h ye compudter ki information dreta h 
// ab jo cpus hota hk wo cpu ki details btata h hostname mera naam btayega platforn mj wlindow btayega 


// ?core module part1
// const fs =require('fs');
// const os=require('os');
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// ! part2 
// notes hum console.log ab jo global objects hote hai wo hume import nhi rken hote lkin forecefully tum kr skte ho 
const {log}=require('console');
log("kapil");
log(process.cwd());
log(process.pid)
// ? node console vs js console dono pfhne h hume cgatgpt se

