(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var navBarContent =
    `<div class="nav-wrapper container">
      <a id="logo-container" class="brand-logo" style="color: white" > &Pi;&Alpha;&Phi; FRATERNITY | SJSU </a>
      <ul class="right hide-on-med-and-down" style="color: white">
        <li><a href="../" style="color: white;">    HOME </a></li>
        <li><a href="../chapters" style="color: white"> CHAPTERS </a></li>
        <li><a href="../rush" style="color: white">     RUSH </a></li>
        <li><a href="../gallery" style="color: white">  GALLERY </a></li>
        <li><a href="../about" style="color: white">    ABOUT </a></li>
        <li><a href="../contact" style="color: white">  CONTACT </a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="../">     HOME </a></li>
        <li><a href="../chapters"> CHAPTERS </a></li>
        <li><a href="../rush">     RUSH </a></li>
        <li><a href="../gallery">  GALLERY </a></li>
        <li><a href="../about">    ABOUT </a></li>
        <li><a href="../contact">  CONTACT </a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>`;
    $("nav").append(navBarContent);
  }); // end of document ready
})(jQuery); // end of jQuery name space
