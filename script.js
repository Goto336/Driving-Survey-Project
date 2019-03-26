//values
var first;
var last;
var age;
var birthday;
var eyecolor;


//Object
var driveSur = {
    userFirst: "",
    userLast: "",
    userAge: "",
    userBirthday: "",
    userEyecolor: "",
    //conditional/If statement
   calcStuff: function(age) {
    if(age>=17){
        alert("Old enough for a license");
    }
    else if(age===16){
        alert("Old enough for a permit, but not full license");
    }
   else { 
       alert("Too young to drive");
    }

   },  
   
printInfo: function(){
    document.querySelector(".opt").innerHTML = this.userFirst;
    
    document.querySelector(".opt2").innerHTML = this.userLast;
    
    document.querySelector(".opt3").innerHTML = this.userAge;
    
    document.querySelector(".opt4").innerHTML = this.userBirthday;
    
    document.querySelector(".opt5").innerHTML = this.userEyecolor;
}

};


document.getElementById('btn1').addEventListener('click', function() {
    //use it 4 more times *Done*//
    first = document.querySelector(".ipt1").value;
    last = document.querySelector(".ipt2").value;
    age = parseInt(document.querySelector(".ipt3").value);
    birthday = document.querySelector(".ipt4").value;
    var formInput = document.getElementById("eyeForm");
    var eye = formInput.eyes.value; 
    //parseInt(age);
    
    console.log(eye);
    
    
    
//Reset values
driveSur.userFirst=first;

driveSur.userLast=last;

driveSur.userAge=age;

driveSur.userBirthday=birthday;

driveSur.userEyecolor=eye;
    
    console.log(driveSur.userEyecolor);
//console.log(driveSur.userFirst); 

//Calling
driveSur.calcStuff(driveSur.userAge);

driveSur.printInfo();
});



