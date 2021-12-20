$(document).ready(function () {
    var currentFloor = 2;
    var floorPath =  $(".home-image path "); // каждый текущи этаж в SVG
    var counterUp = $(".counter-up");/*кнопка увеличения этажа*/
    var counterDown = $(".counter-down");/*кнопка уменьшения этажа*/
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-buttom");
    var viewFlatsButton = $(".view-flats");
    floorPath.on("mouseover", function() {   // функция при наведении мышкой на этаж
        floorPath.removeClass('current-floor');// удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значения у текущего этажа
        $(".counter").text(currentFloor); // занисываются значения этажа в счетчик справа
    });

      floorPath.on("click", toggleModal);// обращаюсь к этажу по клику и переходим к (2)
      modalCloseButton.on("click", toggleModal); // обращаюсь к кнопке закрытия и переходим к (2)
      viewFlatsButton.on("click", toggleModal);

counterUp.on("click", function () { //отслеживаем клик по кнопке вверх, условие в уме
    if (currentFloor < 18) { // чтобы не выходило за границы этажей
    currentFloor++;// прибавляем этаж
    usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2,
    useGroupping: false });// форматиуем значение этажей чтобы было 01 , а не 1
    $(".counter").text(usCurrentFloor);// записываем значение этажа в счетчик справа
    floorPath.removeClass('current-floor');// удаляем активный класс
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсвечиваем текущий класс
    }
  });   
// аналогично вышесказанному, только для этажей вниз
  counterDown.on("click", function () {
    if(currentFloor > 2){
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2,
            useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
});
 function toggleModal(){// (2) идет обращение и выполняем функцию по логике 'если есть убираем, если нет - добавляем(тугглКлас)'
   modal.toggleClass('is-open');
 }
}); 