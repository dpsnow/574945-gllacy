function getVals(){
  // Get slider values
  const parent = this.parentNode;
  const slides = parent.getElementsByClassName('range-slider__control');
  console.log( slides );
  let slide1 = parseFloat( slides[0].value );
  let slide2 = parseFloat( slides[1].value );

  // Neither slider will clip the other, so make sure we determine which is larger
  if ( slide1 > slide2 ){
    const tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }
  
  const displayElement = parent.parentNode.getElementsByClassName('range-slider__values')[0];
  displayElement.innerHTML = `Цена: ${ slide1 } руб. – ${ slide2 } руб.`;
}

window.onload = function(){
  // Initialize Sliders
  const sliderSections = document.getElementsByClassName('range-slider');
  for( let x = 0; x < sliderSections.length; x++ ){
    const sliders = sliderSections[x].getElementsByClassName('range-slider__control');
    for( let y = 0; y < sliders.length; y++ ){
      if ( sliders[y].type ==='range' ){
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
}