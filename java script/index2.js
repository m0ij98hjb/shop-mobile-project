var productImg = document.querySelectorAll('.get-target');
var allproducts = document.querySelectorAll('ul li')
var content = document.querySelector('.content')
var btn2 = document.querySelector('.btn2')
var tootal1 = document.querySelector('.tootal1')
var tootalprice = 0



productImg.forEach(function(item){
    item.onclick = function(){

        var target = this.dataset.target
        document.getElementById(target).classList.remove("d-none")

    }
})

allproducts.forEach(function(item2){
    item2.onclick =function(){
        tootalprice +=  +(item2.getAttribute("price"))
        content.innerHTML += item2.textContent +"//"

        if(content.innerHTML !=""){
            btn2.style.display ="block";
        }
    }
})

btn2.onclick = function (){
    tootal1.innerHTML = tootalprice
}

