
//A


 const arraySecond=[];

 const arrayFirst=[];
 function assignarray(number){
   
for(i=0; i<number; i++){
   
    arrayFirst.push(prompt(`Enter the value for Array: ${i}`))
    console.log(arrayFirst[i])
   
   

}
return arrayFirst[i];

}
assignarray(2)





for(i=arrayFirst.length-1; i>=0;i--){
   
  arraySecond.push(arrayFirst[i])

}
for(i=0; i<arraySecond.length; i++){
   
console.log(arraySecond[i])
}



//B

const bill=[ 24, 36, 204, 80, 182, 440, 100, 10, 1008, 48]
const tip=[];
const total=[];

function calculateTip(){
    for(i=0; i<bill.length;i++){
         tip.push((bill[i]*15)/100)
      
}
console.log(tip)

for(i=0;i<tip.length;i++){
total.push(bill[i]+tip[i])
}
console.log(total)
}

calculateTip()

function average(){
let sum=0;
 
     for(i=0; i<total.length; i++){
        sum +=total[i];
     }
     console.log("Average of the total is  "+sum/total.length )
}
average()

//C

var modal = document.getElementById("myModal");


var btns = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btns.onclick = function() {
  modal.style.display = "block";
}

// close the modal
span.onclick = function() {
  modal.style.display = "none";
}

