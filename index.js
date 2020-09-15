// var basicprice = document.getElementById("basicprice").innerText
var maintenance=0
var bp=2490
var dimension=0;
function priceCheck(obj) {
    // document.getElementById("basicprice").innerText = obj.value
    dimension=obj.value
    maintenance=120*obj.value
    document.getElementById("maintenance").innerText=maintenance
    clcFunc(obj.value)
    totalAmountFunc()

}

// plc

var plc1 = document.getElementById("plc1")
var plc2 = document.getElementById("plc2")
var plc3 = document.getElementById("plc3")
var plcNumbers = 0;
var plcprice = document.getElementById("plcprice")
var plcAmount=0;


function plcCheck1() {
    if (this.plc1.checked) {
        plcNumbers++
    } else {
        plcNumbers--
    }
    call123()
    
}

function plcCheck2() {
    if (this.plc2.checked) {
        plcNumbers++
    } else {
        plcNumbers--
    }
    call123()
}

function plcCheck3() {
    if (this.plc3.checked) {
        plcNumbers++
    } else {
        plcNumbers--
    }
    call123()
}

function call123() {
    if (plcNumbers == 0) {
        plcprice.innerText = 0
        plcAmount=0
    } else if (plcNumbers == 1) {
        plcprice.innerText = 250
        plcAmount=250
    } else if (plcNumbers == 2) {
        plcprice.innerText = 400
        plcAmount=400
    } else if (plcNumbers == 3) {
        plcprice.innerText = 550
        plcAmount=550
    }
    totalAmountFunc()
     
}

// discount
var dis1=document.getElementById("dis1")
var dis2=document.getElementById("dis2")
var totalDiscount=0;

function disCheck1(){
    if(dis1.checked){
        totalDiscount=totalDiscount+100
    }else{
        totalDiscount=totalDiscount-100
    }   
    disCheck()
}
function disCheck2(){
    if(dis2.checked){
        totalDiscount=totalDiscount+200
    }else{
        totalDiscount=totalDiscount-200
    }  
    disCheck() 
}
function disCheck(){
document.getElementById("totalDiscount").innerText=totalDiscount
totalAmountFunc()
}

// clc
var clc=document.getElementById("clc")
clcPrice=0
function clcFunc(j){
    if(j==1200 || j==1500){
        // alert('okay')
        this.clcPrice=200000
        clc.innerText=clcPrice
        // console.log(this.clcPrice)
    }else{
        // alert('not okat ')
        this.clcPrice=250000
        clc.innerText=clcPrice
        // console.log(clcPrice)
    }
    totalAmountFunc()
}

// legal charges
legalCharge=45000;
var legalChargeId=document.getElementById("legalCharge").innerText=legalCharge





// totalAmount
function totalAmountFunc(){
 
var totalAmount=(dimension*(2490+plcAmount) + clcPrice + legalCharge+maintenance)-totalDiscount
document.getElementById("totalAmount").innerText=totalAmount
document.getElementById("totalAmountBtn").innerText=totalAmount

   
}