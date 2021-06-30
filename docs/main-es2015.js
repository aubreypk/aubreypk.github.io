(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+be9":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  padding-top: 160px;\n}\n.wrap .question {\n  position: absolute;\n  padding-left: 240px;\n  width: 216px;\n  color: #232323;\n  font-family: \"Work Sans\";\n  font-size: 32px;\n  letter-spacing: -0.2px;\n  line-height: 40px;\n}\n.wrap .glide__slides {\n  padding: 10px 0px;\n  align-items: center;\n  justify-content: center;\n}\n.wrap .glide__slides .glide__slide {\n  line-height: 24px;\n  margin: 0;\n  font-size: 20px;\n  text-align: center;\n  box-sizing: border-box;\n  height: 284px;\n  width: 216px;\n  border: 2px solid rgba(150, 150, 150, 0.08);\n  border-radius: 8px;\n  background: linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);\n}\n.wrap .glide__slides .glide__slide img {\n  display: block;\n  width: 80px;\n  height: 80px;\n  margin: 45px auto 25px auto;\n  background-color: #fff;\n}\n.wrap .glide__slides .glide__slide .title {\n  margin-top: 50px;\n}\n.wrap .glide__slides .glide__slide .start-here {\n  display: none;\n  margin-top: 65px;\n}\n.wrap .glide__slides .glide__slide.glide__slide--active {\n  box-sizing: border-box;\n  height: 556px;\n  width: 456px !important;\n  border: 2px solid rgba(150, 150, 150, 0.08);\n  border-radius: 16px 16px 12px 12px;\n  background: linear-gradient(180deg, #FFFFFF 0%, #EBEBEB 100%);\n}\n.wrap .glide__slides .glide__slide.glide__slide--active .title {\n  height: 40px;\n  color: #232323;\n  font-family: \"Work Sans\";\n  font-size: 40px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  line-height: 58px;\n  text-align: center;\n}\n.wrap .glide__slides .glide__slide.glide__slide--active img {\n  width: 160px;\n  height: 160px;\n}\n.wrap .glide__slides .glide__slide.glide__slide--active .start-here {\n  display: block;\n  height: 24px;\n  color: #232323;\n  font-family: \"Work Sans\";\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.2px;\n  line-height: 32px;\n  cursor: pointer;\n}\n.wrap .glide__slides .glide__slide.glide__slide--active .start-here span {\n  margin-left: 5px;\n}\n.wrap .glide__arrows {\n  position: relative;\n  top: -80px;\n}\n.wrap .glide__arrow {\n  border-radius: 100%;\n  border: none;\n  box-shadow: none;\n  background-color: #232323;\n  width: 40px;\n  height: 40px;\n}\n.wrap .glide__arrow--left {\n  left: 28%;\n  top: unset;\n  bottom: -40px;\n}\n.wrap .glide__arrow--right {\n  right: 28%;\n  top: unset;\n  bottom: -40px;\n}\n@media only screen and (max-width: 1080px) {\n  .wrap .question {\n    left: 5%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .wrap .question {\n    display: none;\n  }\n  .wrap .glide .glide__track {\n    margin: 0 15px;\n  }\n  .wrap .glide .glide__track .glide__slides .glide__slide.glide__slide--active {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLDJDQUFBO0FBR047QUFGTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFJUjtBQUZNO0VBQ0UsZ0JBQUE7QUFJUjtBQUZNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSVI7QUFESTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZEQUFBO0FBR047QUFETTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQURNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFHUjtBQURNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdSO0FBRlE7RUFDRSxnQkFBQTtBQUlWO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSjtBQUdBO0VBRUk7SUFDRSxRQUFBO0VBREo7QUFDRjtBQUtBO0VBRUk7SUFDRSxhQUFBO0VBSko7RUFPSTtJQUNFLGNBQUE7RUFMTjtFQU9RO0lBQ0UsZ0JBQUE7RUFMVjtBQUNGIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG4gIC5xdWVzdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogMjQwcHg7XG4gICAgd2lkdGg6IDIxNnB4O1xuICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC5nbGlkZV9fc2xpZGVzIHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5nbGlkZV9fc2xpZGUge1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAyODRweDtcbiAgICAgIHdpZHRoOiAyMTZweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTUwLDE1MCwxNTAsMC4wOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZGRkZGIDAlLCAjRUJFQkVCIDEwMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBtYXJnaW46IDQ1cHggYXV0byAyNXB4IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgLnN0YXJ0LWhlcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZ2xpZGVfX3NsaWRlLmdsaWRlX19zbGlkZS0tYWN0aXZlIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IDU1NnB4O1xuICAgICAgd2lkdGg6IDQ1NnB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE1MCwxNTAsMTUwLDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDEycHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkZGRkYgMCUsICNFQkVCRUIgMTAwJSk7XG5cbiAgICAgIC50aXRsZXtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgIH1cbiAgICAgIC5zdGFydC1oZXJlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgY29sb3I6ICMyMzIzMjM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmdsaWRlX19hcnJvd3N7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTgwcHg7XG4gIH1cbiAgLmdsaWRlX19hcnJvdyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuZ2xpZGVfX2Fycm93LS1sZWZ0IHtcbiAgICBsZWZ0OiAyOCU7XG4gICAgdG9wOiB1bnNldDtcbiAgICBib3R0b206IC00MHB4O1xuICB9XG4gIC5nbGlkZV9fYXJyb3ctLXJpZ2h0IHtcbiAgICByaWdodDogMjglO1xuICAgIHRvcDogdW5zZXQ7XG4gICAgYm90dG9tOiAtNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAud3JhcCB7XG4gICAgLnF1ZXN0aW9uIHtcbiAgICAgIGxlZnQ6IDUlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC53cmFwIHtcbiAgICAucXVlc3Rpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmdsaWRlIHtcbiAgICAgIC5nbGlkZV9fdHJhY2sge1xuICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgLmdsaWRlX19zbGlkZXMge1xuICAgICAgICAgIC5nbGlkZV9fc2xpZGUuZ2xpZGVfX3NsaWRlLS1hY3RpdmUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/YoungDrive/My Files/Dev/Assignments/Carousel/carousel/carousel/src/main.ts */"zUnb");


/***/ }),

/***/ "8PEf":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  height: 80px;\n  background-color: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  font-size: 10px;\n  font-weight: 600;\n  padding: 0 10%;\n  position: relative;\n  z-index: 1;\n}\n.header .wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header .wrapper .left-section {\n  display: flex;\n  align-items: center;\n}\n.header .wrapper .left-section .brand img {\n  height: 96px;\n  width: 96px;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);\n  position: absolute;\n  top: 0;\n}\n.header .wrapper .left-section .nav {\n  display: inline-block;\n  align-items: center;\n  margin-left: 130px;\n}\n.header .wrapper .left-section .nav .nav-item {\n  display: inline-block;\n  margin-right: 40px;\n  cursor: pointer;\n  height: 24px;\n  color: #232323;\n  font-family: \"Work Sans\";\n  font-size: 16px;\n  letter-spacing: -0.2px;\n  line-height: 23px;\n  text-align: center;\n  font-weight: lighter;\n}\n.header .wrapper .right-section {\n  display: flex;\n  align-items: center;\n}\n.header .wrapper .right-section .search-icon {\n  width: 15px;\n  height: auto;\n  cursor: pointer;\n  margin-right: 50px;\n}\n.header .wrapper .right-section .dropdown-container {\n  cursor: pointer;\n}\n.header .wrapper .right-section .dropdown-container .inline {\n  display: inline-block;\n  margin-left: 15px;\n}\n.header .wrapper .right-section .dropdown-container .yellow-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 100%;\n  background-color: #ffcc01;\n}\n.header .wrapper .right-section .dropdown-container .text {\n  margin-left: 10px;\n  height: 24px;\n  color: #232323;\n  font-family: \"Work Sans\";\n  font-size: 16px;\n  font-weight: lighter;\n  letter-spacing: -0.2px;\n  line-height: 23px;\n  text-align: center;\n}\n.header .wrapper .right-section .dropdown-container .arrow-down-icon {\n  width: 8px;\n  height: auto;\n  margin-left: 5px;\n  position: relative;\n  top: 1px;\n}\n.header .wrapper .right-section .slider-container {\n  display: none;\n  margin-left: 41px;\n  border-radius: 10px;\n  background-image: url(\"/src/assets/images/bg.svg\");\n  background-size: auto;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.header .wrapper .right-section .slider-container .inline {\n  font-size: 8px;\n  display: inline-block;\n  padding: 5px 10px 5px 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.header .wrapper .right-section .slider-container .inline.active {\n  opacity: 1;\n  width: 60px;\n  margin-left: 2px;\n  padding: 5px;\n  text-align: center;\n  background-image: url(\"/src/assets/images/active.svg\");\n  background-size: auto;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.header .wrapper .right-section .nav-menu {\n  display: none;\n}\n@media only screen and (max-width: 1366px) {\n  .header .wrapper .right-section .dropdown-container {\n    display: none;\n  }\n  .header .wrapper .right-section .slider-container {\n    display: inline-block;\n  }\n}\n@media only screen and (max-width: 1080px) {\n  .header .wrapper .left-section .nav {\n    display: none;\n  }\n  .header .wrapper .right-section .slider-container {\n    display: none;\n  }\n  .header .wrapper .right-section .nav-menu {\n    display: inline-block;\n    margin-left: 20px;\n    cursor: pointer;\n  }\n  .header .wrapper .right-section .nav-menu img {\n    width: 15px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .header {\n    padding: 0 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRGdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUdwQjtBQUFZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRWhCO0FBRGdCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBR3BCO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFBWTtFQUNJLGVBQUE7QUFFaEI7QUFEZ0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBR3BCO0FBRGdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR3BCO0FBRGdCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR3BCO0FBRGdCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUdwQjtBQUFZO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUVoQjtBQURnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUdwQjtBQUZvQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUl4QjtBQUFZO0VBQ0ksYUFBQTtBQUVoQjtBQUlBO0VBSWdCO0lBQ0ksYUFBQTtFQUpsQjtFQU1jO0lBQ0kscUJBQUE7RUFKbEI7QUFDRjtBQVVBO0VBSWdCO0lBQ0ksYUFBQTtFQVhsQjtFQWVjO0lBQ0ksYUFBQTtFQWJsQjtFQWVjO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFibEI7RUFja0I7SUFDSSxXQUFBO0VBWnRCO0FBQ0Y7QUFtQkE7RUFDSTtJQUNJLGFBQUE7RUFqQk47QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjk2KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAubGVmdC1zZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmJyYW5kIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcm9wZG93bi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAuaW5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnllbGxvdy1kb3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hcnJvdy1kb3duLWljb24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9iZy5zdmcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIC5pbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2FjdGl2ZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIC5oZWFkZXIge1xuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgLmxlZnQtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0LXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carousel.component.html */ "j/sx");
/* harmony import */ var _carousel_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.component.scss */ "+be9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "A0bn");




// Glide

let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() { }
    // tslint:disable-next-line:typedef
    ngAfterViewInit() {
        // tslint:disable-next-line:prefer-const
        let glideMulti1 = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"]('.multi1', {
            type: 'carousel',
            focusAt: 'center',
            keyboard: true,
            gap: 15,
            perView: 5,
            breakpoints: {
                1366: {
                    perView: 5
                },
                1080: {
                    perView: 3
                },
                600: {
                    perView: 1
                }
            }
        });
        glideMulti1.mount();
    }
};
CarouselComponent.ctorParameters = () => [];
CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'carousel',
        template: _raw_loader_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carousel_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CarouselComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"content\">\n  <carousel></carousel>\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.module */ "iXwx");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "8PEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "iXwx":
/*!*********************************************!*\
  !*** ./src/app/carousel/carousel.module.ts ***!
  \*********************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.component */ "EfPX");




let CarouselModule = class CarouselModule {
};
CarouselModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]],
        exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]]
    })
], CarouselModule);



/***/ }),

/***/ "j/sx":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n\n  <div class=\"question\">\n    What are you <b>here to do?</b>\n  </div>\n\n  <div class=\"glide multi1\">\n    <div class=\"glide__track\" data-glide-el=\"track\">\n      <ul class=\"glide__slides\">\n        <li class=\"glide__slide\">\n          <img src=\"assets/images/default.png\" alt=\"image\" />\n          <div class=\"title\">Get a device</div>\n          <div class=\"start-here\">\n            START HERE <span>></span>\n          </div>\n        </li>\n        <li class=\"glide__slide\">\n          <img src=\"assets/images/default.png\" alt=\"image\" />\n          <div class=\"title\">Add a phone-line</div>\n          <div class=\"start-here\">\n            START HERE <span>></span>\n          </div>\n        </li>\n        <li class=\"glide__slide\">\n          <img src=\"assets/images/default.png\" alt=\"image\" />\n          <div class=\"title\">Upgrade</div>\n          <div class=\"start-here\">\n            START HERE <span>></span>\n          </div>\n        </li>\n        <li class=\"glide__slide\">\n          <img src=\"assets/images/default.png\" alt=\"image\" />\n          <div class=\"title\">Mobile Internet</div>\n          <div class=\"start-here\">\n            START HERE <span>></span>\n          </div>\n        </li>\n        <li class=\"glide__slide\">\n          <img src=\"assets/images/default.png\" alt=\"image\" />\n          <div class=\"title\">Home Internet</div>\n          <div class=\"start-here\">\n            START HERE <span>></span>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"glide__arrows\" data-glide-el=\"controls\">\n      <button class=\"glide__arrow glide__arrow--left\" data-glide-dir=\"<\"><</button>\n      <button class=\"glide__arrow glide__arrow--right\" data-glide-dir=\">\">></button>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"wrapper\">\n    <div class=\"left-section\">\n      <a href=\"/\" class=\"brand\">\n        <img src=\"assets/images/logo.png\" alt=\"logo\" />\n      </a>\n      <nav class=\"nav\">\n        <div class=\"nav-item\">Store</div>\n        <div class=\"nav-item\">Products & Services</div>\n        <div class=\"nav-item\">Help & Support</div>\n      </nav>\n    </div>\n    <div class=\"right-section\">\n      <img class=\"search-icon\" src=\"assets/images/search.svg\" alt=\"search\" />\n      <div class=\"dropdown-container\">\n        <div class=\"inline yellow-dot\"></div>\n        <div class=\"inline text\">PERSONAL</div>\n        <img class=\"inline arrow-down-icon\" src=\"assets/images/down.svg\" alt=\"dropdown\" />\n      </div>\n      <div class=\"slider-container\">\n        <div class=\"inline text active\">PERSONAL</div>\n        <div class=\"inline text\">BUSINESS</div>\n      </div>\n      <nav class=\"nav-menu\">\n        <img src=\"assets/images/menu.svg\" alt=\"menu icon\" />\n      </nav>\n    </div>\n  </div>\n</header>");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-color: #fff;\n  width: 100%;\n  max-width: 1460px;\n  min-height: calc(100vh - 50px);\n  margin: 0 auto;\n  padding-top: 25px;\n}\n\n@media only screen and (max-width: 1366px) {\n  .content {\n    width: 100%;\n    max-width: 1320px;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .content {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNDYwcHg7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map