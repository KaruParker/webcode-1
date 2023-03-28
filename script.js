var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="10px";
button.addEventListener("click",foo);

let para=document.createElement("p");

div.append(input,button,para);
document.body.append(div);

async function foo(){
    try{
        let res=document.getElementById("name").value;
        console.log(res);
        let url=`https://api.nationalize.io?name=${res}`;
        let res1=await fetch(url);
        let res2=await res1.json();
        // console.log(res2);
        let country1=res2.country[0];
        let country2=res2.country[1];        
        console.log(country1,country2);
        para.innerHTML=`Top two countries : ${res2.country[0].country_id},${res2.country[1].country_id}<br> 
        Probability : ${res2.country[0].probability},${res2.country[1].probability}`;
    }
    catch(error){
        console.log(error);
    }
};

// Output
// -------
// john
// {country_id: 'IE', probability: 0.082} 
// {country_id: 'KE', probability: 0.056}

// --------------------------------------------------------------------------------------------------------------