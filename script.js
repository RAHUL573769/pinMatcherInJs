function getPin(){
    const pin= Math.round(Math.random()*10000)
   console.log(pin);
    const pinString=pin +"";
    // console.log(pinString);
    if(pinString.length===4){
        return pin
    }
    else{
        return getPin();
    }
}
function generatePin(){
  const pin=getPin();
  document.getElementById('display-pin').value=pin;



}

document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target.innerText);
    const number=event.target.innerText;
})