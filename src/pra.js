let val=[2,3,4,5]
let col=["apple","Banana","tomato","orange"];
function Upper(accept){
    
    return accept.toUpperCase();
    

}
function sqr(num){
    return Math.pow(num,2);
}
let an=col.map((a)=>{a.toLowerCase()});
console.log(an);
// for(let i of ans){
//     console.log(i);
// }