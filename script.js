const Url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
var imgBox = document.querySelector(".imgBox");
var input = document.querySelector(".container input");
var qrImg = document.querySelector(".imgBox img");

function qrGenerator(){
    if(input.value.length > 0 ){
        imgBox.style.width = "15vw";
            qrImg.src = Url + input.value;
    }
    else{
        imgBox.style.width = "0";
        input.classList.add("error");
        setTimeout(function(){
        input.classList.remove("error");
        },1500)
    }
}

document.querySelector(".container button")
.addEventListener("click",function(){
    qrGenerator();
})