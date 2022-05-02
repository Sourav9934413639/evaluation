// write js code here corresponding to favourites.html
var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];
var del_data_arr=[];
console.log(favouriteArr)
display_fav_Table(favouriteArr);

function display_fav_Table(fav_data)
{
    fav_data.forEach(function(ele,index){
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
    td6.innerText="Delete";
    td6.addEventListener("click",function(){
        remove_data(ele,index);
    })
    var tr=document.createElement("tr");
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

})
}
function remove_data(ele,index)
{
    
    favouriteArr.splice(index,1);
    
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
    window.location.reload();
    
}