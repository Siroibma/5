/*
File: /~alora1/public_html/assignments/5/generate.js (91.46) COMP 4610 GUI Programming I
Assignment 5: Dynmaic Multiplication Table
Ambioris Lora, UMass Lowell Computer Science, alora1@cs.uml.edu
Copyright (c) 2020 by Ambioris Lora. All rights reserved. May be
freely
copied or excerpted for educational purposes with credit to the
author.
*/


/*
Function Name: numValid
Expected Values: None

Description: This function primarily functions as a way to validate
the values and to make sure the rules are indeed followed

Variables: SH,EH,SR,ER which represent the number ranges. bol1-7 to hold true and false of validations
text_1-7 to hold the statements to print


*/
function numValid() {

  let SH, EH, SR, ER = 0;
  let bol1, bol2, bol3, bol4, bol5, bol6, bol7 = false;
  SH = Math.abs(document.getElementById("SHR").value);
  EH = Math.abs(document.getElementById("EHR").value);
  SR = Math.abs(document.getElementById("SVR").value);
  ER = Math.abs(document.getElementById("EVR").value);
  let text_1, text_2, text_3, text_4, text_5, text_6, text_7;

  //Check if its NAN
  if(isNaN(SH) || isNaN(EH) || isNaN(SR) ||isNaN(ER)){
    text_1 = "You did not enter a number in one or more forms, Please try again";
    document.getElementById("Validation1").style.color = "red";
  } else {
    text_1 = "Inputs are Numbers, Good";
    document.getElementById("Validation1").style.color = "green";
    bol1 = true;
  }

  //Check if its a blank space
  if (SH == "" || EH == "" || SR == "" || ER == "") {
    text_2 = "You entered a blank space in one more forms, please try again";
    document.getElementById("Validation2").style.color = "red";
  } else {
    text_2 = "Input are not blank spaces, Good";
    document.getElementById("Validation2").style.color = "green";
    bol2 = true;
  }
  //check if its greater than 50
  if (SH > 50 || EH > 50 || SR > 50 || ER > 50) {
    text_3 = "You entered a value above 50 in one or more forms, please try again";
    document.getElementById("Validation3").style.color = "red";
  } else {
    text_3 = "You entered a number below or equal to 50, Good";
    document.getElementById("Validation3").style.color = "green";
    bol3 = true;
  }

  //check if its less than -50
  if (SH < -50 || EH < -50 || SR < -50 || ER < -50) {
    text_4 = "You entered a value below -50 in one or more forms, please try again";
    document.getElementById("Validation4").style.color = "red";
  } else {
    text_4 = "You entered a number within the whole number range, Good";
    document.getElementById("Validation4").style.color = "green";
    bol4 = true;
  }

  //check if its in reverse Order
  if(EH < SH || ER < SR) {
    text_5 = "You entered one or two forms in reverse order, please try again";
    document.getElementById("Validation5").style.color = "red";
  } else {
    text_5 = "You entered numbers in correct order, Good";
    document.getElementById("Validation5").style.color = "green";
    bol5 = true;
  }

  if(SH == 0 || EH == 0 || SR == 0 || ER == 0 ) {
    text_6 = "You entered zero in one or more forms, please try again";
    document.getElementById("Validation6").style.color = "red";
  }  else {
    text_6 = "You entered non zero values, Good"
    document.getElementById("Validation6").style.color = "green";
    bol6 = true;
  }

  if(SH == EH || SR == ER) {
    text_7 = "You entered the same number in one or more forms, please try again";
    document.getElementById("Validation7").style.color = "red";
  }  else {
    text_7 = "You entered the different Numbers, Good";
    document.getElementById("Validation7").style.color = "green";
    bol7 = true;
  }

  //All of our validations get printed here
  document.getElementById("Validation1").innerHTML = text_1;
  document.getElementById("Validation2").innerHTML = text_2;
  document.getElementById("Validation3").innerHTML = text_3;
  document.getElementById("Validation4").innerHTML = text_4;
  document.getElementById("Validation5").innerHTML = text_5;
  document.getElementById("Validation6").innerHTML = text_6;
  document.getElementById("Validation7").innerHTML = text_7;


  //Make sure every rule is followed before we print
  if(bol1 == true && bol2 == true && bol3 == true && bol4 == true && bol5 == true && bol6 == true && bol7 == true) {
    test(SH,EH,SR,ER);
  }
}

/*
Function Name: test
Expected Values: 4 Numbers or in this case starting row ending row starting column ending column

Description: This function is where the table is created
variables: Table, row, cell are explained below

*/
function test(n1,n2,n3,n4) {
  //Get the blank table and assign to variables row and cell
  var table = document.getElementById("myTable");
  var row, cell;

  //blank corner
  row = table.insertRow();
  cell = row.insertCell();

  //This is where we fill the table
  for(let i = n1; i <= n2; i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
  }

  for(let i = n3; i <= n4; i++) {
    row = table.insertRow();
    cell = row.insertCell();

    cell.innerHTML = i;
    for (let j = n1; j <= n2; j++) {
      cell = row.insertCell();
      cell.innerHTML = j*i;
    }
  }
}
