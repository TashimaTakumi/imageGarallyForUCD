window.onload=function(){
  //console.log("open!");
  let result="";
  for(let i=1;i<=43;i++){
    //console.log(`loop was started. now number is ${i}`);
    let oneLi=`<li><section><figure><img onclick="modalOn(this)" src="img/domesticOpen/domeOpen(${i}).jpg"/></figure></section></li>`;
    console.log(parseInt(`img/domesticOpen/domeOpen(${i}).jpg`));
    result+=oneLi;
  }
  //console.log(`result is here:${result}`);
  document.getElementById("mainGarally").innerHTML=result;
}

modalOn=function(e){
  modalWindow.opacity="1";
  modalWindow.visibility="visible";
  modalImg.src=e.src;
}
goToNextMmodalWindow=function(){
  const nowSrc=modalImg.src;
  //const nowNumber=nowSrc.slice()
}
modalOff=function(){
  modalWindow.opacity="0";
}
