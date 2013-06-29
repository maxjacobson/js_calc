/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

$(document).ready(function() {

  var left_value, right_value, operation, result;

  $("#wrapper").on("keyup", function() {
    $(this).find("div").each(function(index) {
      left_value = parseFloat($(this).find("input").eq(0).val());
      right_value = parseFloat($(this).find("input").eq(1).val());
      $results_box = $(this).find("input").eq(2);
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
      result = isNaN(result) ? "" : result;
      $results_box.val(result);
    });
  });
});
