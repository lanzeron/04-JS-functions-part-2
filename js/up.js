 "use strict";
 (function() {
     function interval(fun, delay) {
         setTimeout(function() {
             fun ();
             interval(fun, delay);
         }, delay);
     }
     interval(function() {
         alert("ha-fa");
     }, 2000);
 })();