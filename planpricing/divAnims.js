function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {    
    if(isScrolledIntoView($('#chooseplan')))
    {
        
        var table1El = document.getElementById("table1");
        table1El.classList.add("animate__animated", "animate__pulse");
        setTimeout(() => { table1El.classList.remove("animate__animated"); }, 1);

        var table2El = document.getElementById("table2");
        table2El.classList.add("animate__animated", "animate__shakeX");
        setTimeout(() => { table2El.classList.remove("animate__animated"); }, 1);

        var table3El = document.getElementById("table3");
        table3El.classList.add("animate__animated", "animate__bounce");
        setTimeout(() => { table3El.classList.remove("animate__animated"); }, 1);
    }    
    
});