/* photo Running One By One */
let image =document.querySelector('.slider_image');
let translate=0;
setInterval(()=>{
    if (translate>=0 && translate<1000) /* (PhotoCount -1) *100 */
    {
        translate+=100;
    }
    else
    {
        translate=0;
    }
   
    console.log (`${-translate}%`);
    image.style.transition='2s';
    image.style.transform = `translateX(${-translate}%)`;

},5000)
/********************************* */
/* photo Running One By One */