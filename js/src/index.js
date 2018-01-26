window.onload=function(){
  //console.log("open!");
  let result="";
  for(let i=1;i<=43;i++){
    //console.log(`loop was started. now number is ${i}`);
    let oneLi=`<li><section><figure><img onclick="modalOn(this)" src="img/domesticOpen/domeOpen(${i}).jpg"/></figure></section></li>`;
    //console.log(`img/domesticOpen/domeOpen(${i}).jpg`.replace(/[^0-9]/g,""));
    result+=oneLi;
  }
  //console.log(`result is here:${result}`);
  document.getElementById("mainGarally").innerHTML=result;
}

modalOn=function(e){
  console.log("modalOpen");
  modalWindow.style.opacity="1";
  modalWindow.style.visibility="visible";
  blackWindow.style.opacity="0.95";
  blackWindow.style.visibility="visible";
  console.log(e.src);
  modalImg.src=e.src;
  modalWindow.style.height=modaImg.height;
  modalWindow.style.width=modalImg.width;
}
goToNextModalWindow=function(){
  //console.log("goToNext!")
  const nowSrc=modalImg.src;
  const nowNumber=parseInt(nowSrc.replace(/[^0-9]/g,""));
  console.log(nowNumber);
  if(nowNumber<43){
    modalImg.src=`img/domesticOpen/domeOpen(${nowNumber+1}).jpg`;
  }
  modalWindow.height=modaImg.height;
  modalWindow.width=modalImg.width;
}
goToBeforeModalWindow=function(){
  const nowSrc=modalImg.src;
  const nowNumber=nowSrc.replace(/[^0-9]/g,"");
  if(nowNumber>1){
    modalImg.src=`img/domesticOpen/domeOpen(${nowNumber-1}).jpg`
  }
  modalWindow.style.height=modaImg.height;
  modalWindow.style.width=modalImg.width;
}
modalOff=function(){
  modalWindow.style.opacity="0";

  blackWindow.style.opacity="0";
  blackWindow.style.visibility="hidden";
  setTimeout(()=>{
      modalWindow.style.visibility="hidden";
  },0.3*1000)
}
