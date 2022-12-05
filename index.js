var data  = [];
var nameInput   = document.getElementById("name");
var amountInput = document.getElementById("amount");
var messageBox  = document.getElementById("display");

function insert ( ) {
  var name = nameInput.value;
  var amount = amountInput.value;

	data.push({
    name: name,
    amount: amount
  });
  clearAndShow();
}

function clearAndShow () {
  nameInput.value = "";
  amountInput.value = "";

  var html = "";

  html += "<tr>";
  html += "<td>Name</td>";
  html += "<td>Amount</td>";
  html += "</tr>";
  for(i = 0; i <= data.length - 1; i++)
  {
    html += "<tr>";
    html += "<td>" + data[i].name + "</td>";
    html += "<td>" + data[i].amount + "</td>";
    html += "</tr>";
  }
  messageBox.innerHTML = html;
}
  
  function getRandom(){
   
      return "Winner is "+ data[Math.floor(Math.random()*data.length)].name;  
     
  }
   



  