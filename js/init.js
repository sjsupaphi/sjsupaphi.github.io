(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var navBarContent =
    `<div class="nav-wrapper container">
      <a id="logo-container" class="brand-logo" style="color: white" > &Pi;&Alpha;&Phi; FRATERNITY | SJSU </a>
      <ul class="right hide-on-med-and-down" style="color: white">
        <li><a href="../" class="nav-tab">        HOME </a></li>
        <li><a href="../about" class="nav-tab">    ABOUT </a></li>
        <li><a href="../chapters" class="nav-tab"> CHAPTERS </a></li>
        <li><a href="../rush" class="nav-tab">     RUSH </a></li>
        <li><a href="../alumni" class="nav-tab">    ALUMNI </a></li>
        <li><a href="../gallery" class="nav-tab">  GALLERY </a></li>
        <li><a href="../contact" class="nav-tab">  CONTACT </a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="../" class="nav-tab">        HOME </a></li>
        <li><a href="../about" class="nav-tab">    ABOUT </a></li>
        <li><a href="../chapters" class="nav-tab"> CHAPTERS </a></li>
        <li><a href="../rush" class="nav-tab">     RUSH </a></li>
        <li><a href="../alumni" class="nav-tab">    ALUMNI </a></li>
        <li><a href="../gallery" class="nav-tab">  GALLERY </a></li>
        <li><a href="../contact" class="nav-tab">  CONTACT </a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>`;
    $("nav").append(navBarContent);

    var footerContent =
    `<div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text"> Our Organization </h5>
          <p class="grey-text text-lighten-4"> Pi Alpha Phi is an organization that holds value in brotherhood above all.  As a whole, we strive to make a name for ourselves while respecting the five pillars we hold dearest.  Through 25 years of growth, development, and fortitude our success not only within our chapter but also united across the country has prevailed. </p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text center"> Contact </h5>
          <ul class="center">
            <li><button data-target="modal1" class="btn-flat white-text modal-trigger"> Nationals </button></li>
              <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4> Contact |  &Pi;&Alpha;&Phi; National Board</h4>
                  <p> Website: http://pialphaphi.com/ </p>
                  <p> Email: nb@pialphaphi.com </p>
                  <p> Instagram: https://www.instagram.com/pialphaphi1929/ </p>
                </div>
              </div>
            <li><button data-target="modal2" class="btn-flat white-text modal-trigger"> Chapter </button></li>
              <div id="modal2" class="modal">
                <div class="modal-content">
                  <h4> Contact | &Pi;&Alpha;&Phi; SJSU Chapter President</h4>
                  <p> President: president.pialphaphisjsu@gmail.com </p>
                </div>
              </div>
            <li><button data-target="modal3" class="btn-flat white-text modal-trigger"> Contributors </button></li>
              <div id="modal3" class="modal">
                <div class="modal-content">
                  <h4> Contact | Author </h4>
                  <p> Email: jonathan.pan@sjsu.edu <br> Email: david.d.vu@sjsu.edu </p>
                </div>
              </div>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text center">Social Media</h5>
          <ul class="center">
            <li>
              <a class="white-text" href="https://www.facebook.com/sjsupaphi/">
                <i class="mdi mdi-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a class="white-text" href="https://www.instagram.com/sjsupaphi/">
                <i class="mdi mdi-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
    $("footer").append(footerContent);
  }); // end of document ready
})(jQuery); // end of jQuery name space
