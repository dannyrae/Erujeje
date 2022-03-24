openNav = ()=>{
	let list = document.getElementById("myNav");
	let tribe = document.getElementById("main");

	if (list.style.display === "block") {
		list.style.display = "none";
		tribe.style.display = "flex";
	} else {
		list.style.display = "block";
		tribe.style.display = "none";
	}
}


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
          $(".navbar").addClass("sticky");
        else
          $(".navbar").removeClass("sticky");
    });

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass('active');
    });
});