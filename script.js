let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

let total=0;
let list_items=[];
let prices={
  "cakes":599,"sweets":159,"cupcakes":99,"drinks":99,"burger":149,"icecream":79,"chickenburger":179,"sandwich":149,"Marshmellow":89,"Chocolate CupCake":49,"Chicken nuggets":249,"Spicy Omlet":99,"Chocolate":45,"BlueBerry Cake":75,"shawarma":119

}
let units={

}

function order()
{
  
  
  let bill_payment=document.getElementById("bill_payment");
  console.log(bill_payment);
  bill_payment.classList.add("payment_important");
  
  /*update the customer name*/
  let invoice_name=document.getElementById("invoice_name");
  let username=document.getElementById("username");
  invoice_name.textContent=username.value;
  

  /* update the phone number*/
  let invoice_number=document.getElementById("invoice_number");
  let number=document.getElementById("number");
  invoice_number.textContent=number.value;

  /* update the email*/
  let invoice_email=document.getElementById("invoice_email");
  let email=document.getElementById("email");
  invoice_email.textContent=email.value;

  /* update the date*/
  let invoice_date=document.getElementById("invoice_date");
  let date=document.getElementById("num");
  invoice_date.textContent=date.value;

  let tbody=document.getElementById("tbody");
  for(let i of list_items){
    let tr=document.createElement("tr");
    let tr_product=document.createElement("td");
    let tr_unit=document.createElement("td");
    let tr_price=document.createElement("td");
    let tr_total=document.createElement("td");
    let line=document.createElement("br");
    tr_product.textContent=i+"    ";
    tr_unit=units[i]+"    ";
    tr_price.textContent=prices[i]+"   ";
    tr_total=units[i]*prices[i]+"  ";
    /*appending the childs to the tr*/
    tr.append(tr_product);
    tr.append(tr_unit);
    tr.append(tr_price);
    tr.append(tr_total);
    /* appending to the tbody*/
    tbody.appendChild(tr);
    tbody.append(line);
    
     
  }
  let tr=document.createElement("tr");
    let tr_product=document.createElement("td");
    let tr_unit=document.createElement("td");
    let tr_price=document.createElement("td");
    let tr_total=document.createElement("td");
    tr_price.textContent="total";
    tr_total.textContent=total;

  /*appending the childs to the tr*/
  tr.append(tr_product);
  tr.append(tr_unit);
  tr.append(tr_price);
  tr.append(tr_total);
  /* appending to the tbody*/
  tbody.appendChild(tr);
}
function Increment(name,price) {
  let counterElement = document.getElementById(arguments[0]);
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
    total+=arguments[1];
    let found=false;
    for(let i of list_items)
    {
      if(i==arguments[0]){
        found=true;
        break;
      }
    }
    if(!found){
      list_items.push(arguments[0]);
    }

    if(arguments[0] in units){
      units[arguments[0]]=units[arguments[0]]+1;
    }
    else{
      units[arguments[0]]=1;
    }
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}
function Decrement(name,price) {
  let counterElement = document.getElementById(arguments[0]);
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  console.log(updatedCounterValue);
  if (updatedCounterValue===0){
    counterElement.style.color = "green";
    total-=arguments[1];
    list_items.pop(arguments[0]);

  }
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
    total-=arguments[1];

    if(arguments[0] in units){
      units[arguments[0]]=units[arguments[0]]-1;
    }
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
    updatedCounterValue=0;
    alert("Number of Items must be positive");
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}
