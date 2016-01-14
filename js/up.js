 "use strict";
 (function() {
     function interval(a, b) {
         setTimeout(function() {
             a();
             interval(a, b);
         }, b);
     }
     interval(function() {
         alert("ha-fa");
     }, 2000);
 })();