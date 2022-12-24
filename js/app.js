$(".menu-icon").on("click", function(){
  $(".menu-nav").toggleClass("d-none");
  let result = $(".menu-nav").hasClass("d-none")
  // console.log(result)
  if(result){
    $(".menu-icon").removeAttr("src","../images/icon-close-menu.svg").attr("src","../images/icon-menu.svg")
  }else{
    $(".menu-icon").removeAttr("src","./images/icon-menu.svg").attr("src","./images/icon-close-menu.svg")
  }
})

