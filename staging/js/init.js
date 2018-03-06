$(document).ready(function() {
  var headerContent =
    `
    <div id="heading-banner">
      <img src="../imgs/rush-flyer.jpg" width="100%" height="400px"/>
    </div>
    <ul id="navBar">
      <li><a href="../index.html">Home</a></li>
      <li>
        <ul class="dropdown">
          <li><a href="../about/index.html">About</a></li>
            <div class="dropdown-content">
            <li><a href="../about/index.html#history">History</a></li>
            <li><a href="../about/index.html#our-pillars">Our Pillars</a></li>
            <li><a href="../about/index.html#chapters">Chapters</a></li>
          </div>
        </ul>
      </li>
      <li>
      <ul class="dropdown">
          <li><a href="../join-us/index.html">Join Us</a></li>
        <div class="dropdown-content">
          <li><a href="../join-us/index.html#rush">Rush</a></li>
          <li><a href="../join-us/index.html#rush-schedule">Spring 2018 Rush Schedule</a></li>
          <li><a href="../join-us/index.html#faq">FAQ</a></li>
        </div>
      </ul>
      </li>
      <li>
        <ul class="dropdown">
        <li><a href="../media/index.html">Media</a></li>
          <div class="dropdown-content">
            <li><a href="#">Videos</a></li>
            <li><a href="#">Photos</a></li>
          </div>
        </ul>
      </li>
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
