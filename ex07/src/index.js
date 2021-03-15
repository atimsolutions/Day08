var sum = 0;
function addTree(){
    sum=sum+3;
    console.log("addTree: ",sum);
}
function addFive(){
    sum= 0;
    sum=sum+5
    console.log("addFive: ",sum);
}

addTree();
addFive();


module.exports = {
    addTree,
    addFive
};