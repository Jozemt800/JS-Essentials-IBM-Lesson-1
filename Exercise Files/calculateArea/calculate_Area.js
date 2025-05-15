let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}



let montlhyRental;
let transportCost;
let electricity;


function calculateTotal () {
    montlhyRental = parseFloat(document.getElementById('monthlyRental').value);
    transportCost = parseFloat(document.getElementById('transportCost').value);
    electricity = parseFloat(document.getElementById('electricity').value);

    let bill = montlhyRental + transportCost + electricity;
        document.getElementById('bill').innerText = `Your Monthly Expenses Total is: K ${bill}`;
}