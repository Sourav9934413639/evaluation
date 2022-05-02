// write js code here corresponding to matches.html
var storedMatchData=JSON.parse(localStorage.getItem("schedule"))||[];
console.log(storedMatchData)
var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];
document.querySelector("#filterVenue").addEventListener("change",myFunction);
var selected=document.querySelector("#filterVenue").ariaValueMax;

function myFunction()
{
     var filtered_value=[];
  
  storedMatchData.forEach(function (ele){
    
    if(selected==ele.Place)
    {
          filtered_value.push(ele);
    }
    
    
})
console.log(filtered_value);
}
  

displayTable(storedMatchData);

function displayTable(data)
{
    data.forEach(function(ele){
    var td1=document.createElement("td");
    td1.innerText=ele.Match_num;
    var td2=document.createElement("td");
    td2.innerText=ele.Team_A;
    var td3=document.createElement("td");
    td3.innerText=ele.Team_B;
    var td4=document.createElement("td");
    td4.innerText=ele.Match_date;
    var td5=document.createElement("td");
    td5.innerText=ele.Place;
    var td6=document.createElement("td");
    td6.innerText="Add as Favourites";
    td6.addEventListener("click",function(){
        store_fav_data(ele);
    })
    var tr=document.createElement("tr");
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

})
}
function store_fav_data(ele){
    favouriteArr.push(ele)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
}