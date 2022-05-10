console.log("Working...");
// let student = {}
// function Student(name,rollno,cls){
//     this.name=name;
//     this.rollno=rollno;
//     this.cls=cls;
// }


// let students= new Student("kusuma","1","abc");
// let student2=new Student("krishna","2","cde");

// console.log(student2);
// console.log(students);


let element1=document.getElementById("message");
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText)

let element2=document.getElementsByClassName("impmessage");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

let element3=document.getElementsByTagName("h1");
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerHTML);
console.log(element3[1].innerText);

function changeText(){
    let changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "Hello World"
    console.log(changeText[0].innerText);
}
function changeColor(){
    let changeColor = document.getElementsByClassName("impmessage");
    let changeColor1 = document.getElementById("message");

    changeColor[0].style.color="green";
    changeColor1.style.color="blue";
    
}

