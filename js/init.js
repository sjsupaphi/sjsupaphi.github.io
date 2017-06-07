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
            <li><button data-target="modal1" class="btn-flat white-text modal-trigger"> National </button></li>
              <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4> Contact | National </h4>
                  <p> Website: http://pialphaphi.com/ </p>
                  <p> Email: nb@pialphaphi.com </p>
                  <p> Instagram: https://www.instagram.com/pialphaphi1929/ </p>
                </div>
              </div>
            <li><button data-target="modal2" class="btn-flat white-text modal-trigger"> Chapter </button></li>
              <div id="modal2" class="modal">
                <div class="modal-content">
                  <h4> Contact | Delta Chapter </h4>
                  <p> President: xxxxxx@gmail.com </p>
                </div>
              </div>
            <li><button data-target="modal3" class="btn-flat white-text modal-trigger"> Rush </button></li>
              <div id="modal3" class="modal">
                <div class="modal-content">
                  <h4> Contact | Rush </h4>
                  <p> Rush: rush@gmail.com </p>
                </div>
              </div>
            <li><button data-target="modal4" class="btn-flat white-text modal-trigger"> Author </button></li>
              <div id="modal4" class="modal">
                <div class="modal-content">
                  <h4> Contact | Author </h4>
                  <p> Email: jonathan.pan@sjsu.edu </p>
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
    </div>
    <div class="footer-copyright">
      <div class="container">
        <a class="grey-text text-lighten-3"> JP </a>
      </div>
    </div>`;
    $("nav").append(footerContent);
  }); // end of document ready
})(jQuery); // end of jQuery name space
