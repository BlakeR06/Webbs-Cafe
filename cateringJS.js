const viewReceiptButton = document.getElementById('viewReceiptButton')

const sf1 = document.getElementById('sf1')
const sf2 = document.getElementById('sf2')
const sf3 = document.getElementById('sf3')
const sf4 = document.getElementById('sf4')

const sd1 = document.getElementById('sd1')
const sd2 = document.getElementById('sd2')
const sd3 = document.getElementById('sd3')
const sd4 = document.getElementById('sd4')

const fri1 = document.getElementById('fri1')
const fri2 = document.getElementById('fri2')
const fri3 = document.getElementById('fri3')
const fri4 = document.getElementById('fri4')

const dri1 = document.getElementById('dri1')
const dri2 = document.getElementById('dri2')
const dri3 = document.getElementById('dri3')
const dri4 = document.getElementById('dri4')

const ria1 = document.getElementById('ria1')
const ria2 = document.getElementById('ria2')
const ria3 = document.getElementById('ria3')
const ria4 = document.getElementById('ria4')
const ria5 = document.getElementById('ria5')
const ria6 = document.getElementById('ria6')
const ria7 = document.getElementById('ria7')
const ria8 = document.getElementById('ria8')

const rip1 = document.getElementById('rip1')
const rip2 = document.getElementById('rip2')
const rip3 = document.getElementById('rip3')
const rip4 = document.getElementById('rip4')
const rip5 = document.getElementById('rip5')
const rip6 = document.getElementById('rip6')
const rip7 = document.getElementById('rip7')
const rip8 = document.getElementById('rip8')

let sf1Price = 1.23
let sf2Price = 1.23
let sf3Price = 1.23
let sf4Price = 1.23

let sd1Price = 1.23
let sd2Price = 1.23
let sd3Price = 1.23
let sd4Price = 1.23

const receiptContainer = document.getElementById('receiptContainer')
const receiptSectionTitle1 = document.getElementById('receiptSectionTitle1')
const receiptSectionTitle2 = document.getElementById('receiptSectionTitle2')
const total = document.getElementById('total')
const placeOrder = document.getElementById('placeOrder')

viewReceiptButton.addEventListener('click', function(){
    if(sf1.value > 0 || sf2.value > 0 || sf3.value > 0 || sf4.value > 0 || sd1.value > 0 || sd2.value > 0 || sd3.value > 0 || sd4.value > 0 ){
        receiptContainer.style.display = 'block'
        if(sf1.value > 0 || sf2.value > 0 || sf3.value > 0 || sf4.value > 0){
            receiptSectionTitle1.style.display = 'block'
        }
        if(sd1.value > 0 || sd2.value > 0 || sd3.value > 0 || sd4.value > 0){
            receiptSectionTitle2.style.display = 'block'
        }
        Receipt()
    }
    else{
        alert('No items selected')
    }
})

function Receipt(){
    if(sf1.value > 0){
        fri1.style.display = 'flex'
        ria1.textContent = 'Amount: ' + sf1.value
        rip1.textContent = 'Price: $' + (sf1Price * sf1.value)
    }
    if(sf2.value > 0){
        fri2.style.display = 'flex'
        ria2.textContent = 'Amount: ' + sf2.value
        rip2.textContent = 'Price: $' + (sf2Price * sf2.value)
    }
    if(sf3.value > 0){
        fri3.style.display = 'flex'
        ria3.textContent = 'Amount: ' + sf3.value
        rip3.textContent = 'Price: $' + (sf3Price * sf3.value)
    }
    if(sf4.value > 0){
        fri4.style.display = 'flex'
        ria4.textContent = 'Amount: ' + sf4.value
        rip4.textContent = 'Price: $' + (sf4Price * sf4.value)
    }

    if(sd1.value > 0){
        dri1.style.display = 'flex'
        ria5.textContent = 'Amount: ' + sd1.value
        rip5.textContent = 'Price: $' + (sd1Price * sd1.value)
    }
    if(sd2.value > 0){
        dri2.style.display = 'flex'
        ria6.textContent = 'Amount: ' + sd2.value
        rip6.textContent = 'Price: $' + (sd2Price * sd2.value)
    }
    if(sd3.value > 0){
        dri3.style.display = 'flex'
        ria7.textContent = 'Amount: ' + sd3.value
        rip7.textContent = 'Price: $' + (sd3Price * sd3.value)
    }
    if(sd4.value > 0){
        dri4.style.display = 'flex'
        ria8.textContent = 'Amount: ' + sd4.value
        rip8.textContent = 'Price: $' + (sd4Price * sd4.value)
    }

    totalAmount = (sf1Price * sf1.value) + (sf2Price * sf2.value) + (sf3Price * sf3.value) + (sf4Price * sf4.value) + (sd1Price * sd1.value) + (sd2Price * sd2.value) + (sd3Price * sd3.value) + (sd4Price * sd4.value)
    roundedAmount = totalAmount.toFixed(2)
    total.textContent = 'Total: $' + roundedAmount
}

placeOrder.addEventListener('click', function(){
    alert('Order Placed Succesfully!')
    window.location.href = 'home.html'
})