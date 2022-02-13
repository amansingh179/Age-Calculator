const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today=new Date();
    let inputDate= new Date(document.querySelector("#date").value);
    
    let ageMonth,ageDate,ageYear;

    let ageDetails={
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear(),
    }
    let currentYear=today.getFullYear();
    let currentMonth=today.getMonth() +1;
    let currentDate=today.getDate();

    leapChecker(currentYear);
    
    if(
        ageDetails.year > currentYear ||
        ( ageDetails.month > currentMonth && ageDetails.year == currentYear) || 
        (ageDetails.date > currentDate && ageDetails.month == currentMonth && ageDetails.year == currentYear)
    ){
        alert("HEHE Enter a valid Birth date");
        
        return;
        
    }

    ageYear = currentYear - ageDetails.year;

    if(currentMonth >= ageDetails.month){
        ageMonth = currentMonth - ageDetails.month;
    }
    else{
        ageYear--;
        ageMonth = 12 + currentMonth - ageDetails.month;
    }

    if(currentDate >= ageDetails.date){
        ageDate = currentDate - ageDetails.date;
    }
    else{
        ageMonth--;
        let days = months[currentMonth - 2];
        ageDate = days + currentDate - ageDetails.date;
        if(ageMonth < 0){
            ageMonth = 11;
            ageYear--;
        }
    }
    displayResult(ageDate,ageMonth,ageYear);
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("Years").textContent = bYear;
    document.getElementById("Months").textContent = bMonth;
    document.getElementById("Days").textContent = bDate;
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}
document.querySelector("#date").addEventListener("keyup",function(event){
    if (event.key=="Enter") {
        ageCalculate();
    }
}) 

