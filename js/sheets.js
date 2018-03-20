var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzQe3juQFolzGWSm5Nfz0ao-KI0ogeSLbvWtQ-Mdyjx6IEu7GU/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})