$(document).ready(function() {
  var headerContent =
    `
    <div id="heading-banner">
      <img src="/sjsupaphi.github.io/pics/Pi Alpha Phi Frat.png" width="100%" height="300px"/>
    </div>
    <ul id="navBar" width = "800px">
      <nav class="navbar navbar-expand-lg navbar-light bg-light navBar-expand" width = "800px">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"> Chapters <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Rush <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 About
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#"> Pillars </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"> FAQ </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"> Contact Us </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </ul>`;
  $("header").append(headerContent);

  var footerContent =
    `<div class="row">
        <div class="col-sm-4 text-center">
          <h4 style="margin-bottom: 12px;">Contact</h4>
          <ul id="footer-contactList">
            <li><a data-toggle="modal" data-target="#np-modal">National President</a> | </li>
              <div id="np-modal" class="modal fade">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <h4> Contact |  &Pi;&Alpha;&Phi; National Board</h4>
                    <p>National President: nb@pialphaphi.com<br/>Contact our national board for inquiries about startng a chapter of Pi Alpha Phi at your University.</p>
                  </div>
                </div>
              </div>
            <li><a data-toggle="modal" data-target="#cp-modal">Chapter President</a> | </li>
              <div id="cp-modal" class="modal fade">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <h4> Contact |  &Pi;&Alpha;&Phi; Chapter President</h4>
                    <p>Chapter President: president.pialphaphi@gmail.com<br/>Contact our chapter president for any further questions regarding Pi Alpha Phi at San José State University.</p>
                  </div>
                </div>
              </div>
            <li><a data-toggle="modal" data-target="#wd-modal">Web Developer</a></li>
              <div id="wd-modal" class="modal fade">
              <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <h4> Contact |  &Pi;&Alpha;&Phi; Web Developer</h4>
                    <p>Vincent Truong (&Delta;223): vincevutruong@gmail.com<br/><a href="https://www.linkedin.com/in/vincevtruong /" target="_blank" >LinkedIn Profile</a><br/>
                    <p>David Vu (&Delta;196): david.d.vu@sjsu.edu<br/><a href="https://www.linkedin.com/in/david-vu-408/" target="_blank" >LinkedIn Profile</a><br/>Contact for inquiries on web development quotes for your organization.</p>
                  </div>
                </div>
              </div>
        </div>
        <div class="col-sm-4 text-center">
          <img src="../imgs/brotherhood-links.png" height="100px"/>
        </div>
        <div class="col-sm-4 text-center" style="padding-top: 5px;">
          <h4 style="margin-bottom: 10px;">Social Media</h4>
          <ul id="social-media-icons" style="margin: auto 0">
            <li><a href="https://www.instagram.com/sjsupaphi/" target="_blank"><i class="fab fa-instagram" style="margin-right: 5px"></i></a></li>
            <li><a href="https://www.facebook.com/sjsupaphi/" target="_blank"><i class="fab fa-facebook" style="margin-right: 5px"></i></i></a></li>
            <li><a href="https://twitter.com/sjsupaphi" target="_blank"><i class="fab fa-twitter" style="margin-right: 5px"></i></a></li>
        </div>
    </div>`;
  $('footer').addClass("container-fluid");
  $('footer').append(footerContent);
});
