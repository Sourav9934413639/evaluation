// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunc);

var masaiLeague=JSON.parse(localStorage.getItem("schedule"))||[];
function myFunc()
{
    event.preventDefault();
    var matchData={
           Match_num:masaiForm.matchNum.value,
           Team_A:masaiForm.teamA.value,
           Team_B:masaiForm.teamB.value,
           Match_date:masaiForm.date.value,
           Place:masaiForm.venue.value
           
     };  
     masaiLeague.push(matchData);
     
     localStorage.setItem("schedule",JSON.stringify(masaiLeague));

}