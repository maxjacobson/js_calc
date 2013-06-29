/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

// wait til the page is ready
$(document).ready(function() {

  // initialize variables we'll be using
  var left_value, right_value, operation, result, results_box;

  // whenever a key is released within the div of id "wrapper" run this function
  $("#wrapper").on("keyup", function() {

    // find all of the divs within wrapper and iterate over them
    // "this" changes each time
    $(this).find("div").each(function() {

      // fetch current values as of this keypress
      left_value = parseFloat($(this).find("input").eq(0).val());
      right_value = parseFloat($(this).find("input").eq(1).val());

      // find the third input box of current div and stash it for a sec
      results_box = $(this).find("input").eq(2);

      // get id of current div to determine which operation to do
      operation = $(this).attr("id");
      switch (operation) {
        case "addition":
          result = left_value + right_value;
          break;
        case "subtraction":
          result = left_value - right_value;
          break;
        case "multiplication":
          result = left_value * right_value;
          break;
        case "division":
          result = left_value / right_value;
          break;
        case "modulus":
          result = left_value % right_value;
          break;
      }

      // if the result isn't a number, don't just display "NaN"
      result = isNaN(result) ? "fill me with math!" : result;

      // display the result
      results_box.val(result);

    }); // end each

  }); // end on keyup

}); // end document ready
