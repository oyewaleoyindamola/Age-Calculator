function ageCalculator() {  
 
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
      
 
    if(userinput==null || userinput==''){  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    }   
      
  
    else {  
  
    var dobYear = dob.getYear();  
    var dobMonth = dob.getMonth();  
    var dobDate = dob.getDate();  
 
    var now = new Date();  

    var currentYear = now.getYear();  
    var currentMonth = now.getMonth();  
    var currentDate = now.getDate();  
      
 
    var age = {};  
    var ageString = "";  
    

    yearAge = currentYear - dobYear;  
      
 
    if (currentMonth >= dobMonth)  
  
      var monthAge = currentMonth - dobMonth;  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
  
  
    if (currentDate >= dobDate)  
 
      var dateAge = currentDate - dobDate;  
    else {  
      monthAge--;  
      var dateAge = 31 + currentDate - dobDate;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }  

    age = {  
    years: yearAge,  
    months: monthAge,  
    days: dateAge  
    };  
        
        
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
       ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";  
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )  
       ageString = "Only " + age.days + " days old!";  
    if ( (age.years >26) && (age.months> 0) && (age.days > 0)) 
      ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old."; 
   

    if( (age.years <27)) 
      alert("Congratulations you are within age limit");
    if ((age.years >26))
    alert("Oops you are above age limit"); 


    return document.getElementById("result").innerHTML = ageString;   
               
}  
}  