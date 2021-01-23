$(document).ready(function(){

    let imageBox = $(".slider ul");
    let itemWidth = $(".slider li").width();
    let imageQuantity = $(".slider ul").children('li').length;
    let currentImage = 1;

    imageBox.css('width', itemWidth*imageQuantity);

    $(".slider a").on('click', function () {  
        let whichButton = $(this).data('nav');
        
        if(whichButton === 'next'){
            if(currentImage === imageQuantity){
                currentImage = 1;
                transition(currentImage, itemWidth);
            }else{
                currentImage++; 
                transition(currentImage, itemWidth)
            }
         
        }else if(whichButton === 'prev'){
            if(currentImage === 1){
                currentImage = imageQuantity;
                transition(currentImage, itemWidth);
            }else{
                currentImage--;
                transition(currentImage, itemWidth);   
            }
        }
    });

    function transition(currentImageInput, imageWidthInput ){
        let pxValue = -(currentImageInput-1) * imageWidthInput;
        imageBox.animate({
            'left': pxValue
        });
    }
})