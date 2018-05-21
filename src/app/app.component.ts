import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  // template: "<router-outlet></router-outlet>"
  template: `<nav class="navbar navbar-default menu-header menu-shadow" id="menu-header-demo">
  <div class="container-fluid">
    <div class="navbar-header pull-left">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu-test" aria-expanded="false" id="menu-button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="sr-only">Toggle navigation</span>
      </button>
      <a class="navbar-left logo" href="javascript:;"><img src = "/assets/iRent_Logo3.jpg" height="100" width="100"></a>
    </div>
    <div class="clearfix visible-xs-block visible-sm-block"></div>
    <div class="navbar-collapse collapse navbar-centered" id="menu-test">
      <ul class="nav navbar-nav">
        <li><a style= "padding-top: 40px;" [routerLink]="['/']">Home</a></li>
        <li><a style= "padding-top: 40px;" [routerLink]="['/mission']">About Us</a></li>
      </ul>
    </div>
  </div>
</nav>




    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
