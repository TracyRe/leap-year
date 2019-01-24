

/**
 * Identifies a leap year. Returns a boolean.
 * @param {string} year
 */
function leapYear(year) {
  if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
}


$(document).ready(function() {
  $("form#leapYear").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#yearInput").val());
    var result = leapYear(year) === true ? "YES!" : "NO :(";
    $("p.yearResult").text(result);
  });

  $("button#redo").click(function(){
    $("input#yearInput").val("");
    $("p.yearResult").text("");
  });

});
