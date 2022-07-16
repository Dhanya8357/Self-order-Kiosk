var quantity1=0;
var quantity2=0;
var quantity3=0; 
var quantity4=0;
var quantity5=0;
var itemPrice = 25, gst = 0.13, finalPrice=0;
var totalCost1=0;
var totalCost2=0;
var totalCost3=0;
var totalCost4=0;
var totalCost5=0;
let custName = "";

function additem1()
{
    quantity1 = parseInt(prompt("Enter Quantity"))
    if(quantity1>0 && !isNaN(quantity1))
    {
        alert('Item Added to Cart')
    }
   else 
    {
        alert("Please Enter Valid Input ");
    }
}
        
function additem2()
{
    quantity2 = parseInt(prompt("Enter Quantity"))
    if(quantity2>0 && !isNaN(quantity2))
    {
        alert('Item Added to Cart')
    }
    else 
    {
        alert("Please Enter Valid Input ");
    }
}

function additem3()
{
    quantity3 = parseInt(prompt("Enter Quantity"))
    if(quantity3>0 && !isNaN(quantity3))
    {
        alert('Item Added to Cart')
    }
   else 
    {
        alert("Please Enter Valid Input ");
    }
}

function additem4()
{
    quantity4 = parseInt(prompt("Enter Quantity"))
    if(quantity4>0 && !isNaN(quantity4))
    {
        alert('Item Added to Cart')
    }
   else 
    {
        alert("Please Enter Valid Input ");
    }
}

function additem5()
{
    quantity5 = parseInt(prompt("Enter Quantity"))
    if(quantity5>0 && !isNaN(quantity5))
    {
        alert('Item Added to Cart')
    }
   else 
    {
        alert("Please Enter Valid Input ");
    }
}

function displayBill() 
{
    custName = prompt("Enter your name");
    if(isNaN(custName))
    {
        document.write("BILL")
        document.write(`<br><br>customer name : ${custName}`)
        document.write('<table width="40%" align = "center" border= "3px solid black">');
        document.write('<tr><th>Products bought</th><th>Quantity</th><th>Unit Price</th><th>Cost</th><th>Tax(13%)</th><th>Subtotal</th></tr>');
        if(quantity1 > 0)
        {
        totalPrice= quantity1 * itemPrice;   
        tax = totalPrice * gst;
        totalCost1 = tax + totalPrice;
        document.write(`<tr><td>Coke</td><td>${quantity1}</td><td>${itemPrice}</td><td>${totalPrice}</td><td>${tax}</td><td>${totalCost1}</td></tr>`)
        }
        if(quantity2 > 0)
        {
        totalPrice= quantity2 * itemPrice;   
        tax = totalPrice * gst;
        totalCost2 = tax + totalPrice;
        document.write(`<tr><td>Fries</td><td>${quantity2}</td><td>${itemPrice}</td><td>${totalPrice}</td><td>${tax}</td><td>${totalCost2}</td></tr>`)
        }
        if(quantity3 > 0)
        {
        totalPrice= quantity3 * itemPrice;   
        tax = totalPrice * gst;
        totalCost3 = tax + totalPrice;
        document.write(`<tr><td>Burger</td><td>${quantity3}</td><td>${itemPrice}</td><td>${totalPrice}</td><td>${tax}</td><td>${totalCost3}</td></tr>`)
        }
        if(quantity4 > 0)
        {
        totalPrice= quantity4 * itemPrice;   
        tax = totalPrice * gst;
        totalCost4 = tax + totalPrice;
        document.write(`<tr><td>Candy</td><td>${quantity4}</td><td>${itemPrice}</td><td>${totalPrice}</td><td>${tax}</td><td>${totalCost4}</td></tr>`)
        }
        if(quantity5 > 0)
        {
        totalPrice= quantity5 * itemPrice;   
        tax = totalPrice * gst;
        totalCost5 = tax + totalPrice;
        document.write(`<tr><td>Sprite</td><td>${quantity5}</td><td>${itemPrice}</td><td>${totalPrice}</td><td>${tax}</td><td>${totalCost5}</td></tr>`)
        }
        finalPrice = totalCost1 + totalCost2 + totalCost3 + totalCost4 + totalCost5;
        document.write(`<tr><td></td><td></td><td></td><td></td><td>Check out</td><td>${finalPrice}</td></tr>`)
    }
    else
    {
        alert("please enter your name");
    }
}
  

