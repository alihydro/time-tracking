// document.addEventListener("DOMContentLoaded", function () {
    let DailyClick = document.querySelector(".Daily-click");
    let WeeklyClick = document.querySelector(".Weekly-click");
    let MonthlyClick = document.querySelector(".Monthly-click");
    let Daily = document.querySelectorAll("#Daily");
    let Weekly = document.querySelectorAll("#Weekly");
    let Monthly = document.querySelectorAll("#Monthly");


   DailyClick.style.color = "white"


function updateContainerHeight() {
    
  

    if (window.innerWidth > 1120) {
       
        DailyClick.onclick = function () {
            DailyClick.style.color = "white"
            WeeklyClick.style.color = ""
            MonthlyClick.style.color = ""
            Daily.forEach(element => {
                element.style.display = "flex";
               
            });
            Weekly.forEach(element => {
                element.style.display = "none";
            });
            Monthly.forEach(element => {
                element.style.display = "none";
            });
        }
        
        WeeklyClick.onclick = function () {
            DailyClick.style.color = ""
            WeeklyClick.style.color = "white"
            MonthlyClick.style.color = ""
            Daily.forEach(element => {
                element.style.display = "none";
            });
            Weekly.forEach(element => {
                element.style.display = "flex";
           
            });
            Monthly.forEach(element => {
                element.style.display = "none";
            });
        }
        
        MonthlyClick.onclick = function () {
            DailyClick.style.color = "";
            WeeklyClick.style.color = "";
            MonthlyClick.style.color = "white";

            Daily.forEach(element => {
                element.style.display = "none";
            });
            Weekly.forEach(element => {
                element.style.display = "none";
                
            });
            Monthly.forEach(element => {
                // element.style.flexDirection = "column";
                element.style.display = "flex";
               
            });
        }  
        } else {
             
        DailyClick.onclick = function () {
            DailyClick.style.color = "white"
            WeeklyClick.style.color = ""
            MonthlyClick.style.color = ""
            Daily.forEach(element => {
                element.style.display = "flex";
            });
            Weekly.forEach(element => {
                element.style.display = "none";
            });
            Monthly.forEach(element => {
                element.style.display = "none";
            });
        }
        
        WeeklyClick.onclick = function () {
            DailyClick.style.color = ""
            WeeklyClick.style.color = "white"
            MonthlyClick.style.color = ""
            Daily.forEach(element => {
                element.style.display = "none";
            });
            Weekly.forEach(element => {
                element.style.display = "flex";
            });
            Monthly.forEach(element => {
                element.style.display = "none";
            });
        }
        
        MonthlyClick.onclick = function () {
            DailyClick.style.color = "";
            WeeklyClick.style.color = "";
            MonthlyClick.style.color = "white";
            Daily.forEach(element => {
                element.style.display = "none";
            });
            Weekly.forEach(element => {
                element.style.display = "none";
            });
            Monthly.forEach(element => {
                element.style.display = "flex";
            });
        }
        }

  
  
    }
  
  
      updateContainerHeight();
  
      window.addEventListener("resize", updateContainerHeight);