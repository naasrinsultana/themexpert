'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}
"use strict";

$(function () {
  $(document).scroll(function () {
    var $nav = $("header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});