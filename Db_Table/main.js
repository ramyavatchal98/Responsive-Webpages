
fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json").then (
  res=>{
    res.json().then(
      data =>{
        console.log(data);
        if(data.length > 0) {
          var temp ="";
          //for loop
          data.forEach((u)=>{
            temp += "<tr> ";
            temp += "<td>"+u.id+"</td>";
            temp += "<td>"+u.firstName+"</td>";
            temp += "<td>"+u.lastName+"</td>";
            temp += "<td>"+u.location+"</td>";
            temp += "<td>"+u.date+"</td>";
            temp += "<td>"+u.salary+"</td></tr>";
          })
           document.getElementById("data").innerHTML = temp;  
         }
      }
    )
  }
)

var changeFontStyle = function (font) { 
  document.getElementById( 
      "data").style.fontSize 
              = font.value; 
  }

  