//slide
var speed = 5;
var tab = document.getElementById("demo");
var tab1 = document.getElementById("demo1");
var tab2 = document.getElementById("demo2");
tab2.innerHTML = tab1.innerHTML;
function Marquee() {
  if (tab2.offsetWidth - tab.scrollLeft <= 0)
    tab.scrollLeft -= tab1.offsetWidth
  else {
    tab.scrollLeft++;
  }
}
var MyMar = setInterval(Marquee, speed);
tab.onmouseover = function () { clearInterval(MyMar) };
tab.onmouseout = function () { MyMar = setInterval(Marquee, speed) };



//size
const buttonSize = document.querySelectorAll(".button-size")
buttonSize.forEach(item=>{
  item.addEventListener("click", (e)=>{
    const priceNew = item.getAttribute("priceNew")
    const price = item.getAttribute("price")
    const stock = item.getAttribute("stock")
    
    const priceNewData = document.querySelector(".inner-price-new .formatMoney")
    let moneyN = Number(priceNew)
    let moneyS = moneyN.toLocaleString('vi', {style : 'currency', currency : 'VND'})
    priceNewData.innerHTML = `${moneyS}`

    const priceData = document.querySelector(".inner-price-old")
    moneyN = Number(price)
    moneyS = moneyN.toLocaleString('vi', {style : 'currency', currency : 'VND'})
    priceData.innerHTML = `${moneyS}`

    const stockData = document.querySelector(".stock")
    stockData.innerHTML = stock

    item.classList.add("button-size-active")
    buttonSize.forEach(item1 =>{
      if(item1!=item){
        item1.classList.remove("button-size-active")
      }
    })

    const CartInput = document.querySelector(".formCart .sizeInput")
    CartInput.setAttribute("value", item.getAttribute("id"))
  })
})
