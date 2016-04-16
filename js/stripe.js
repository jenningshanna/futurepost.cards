
	// This identifies your website in the createToken call below
	Stripe.setPublishableKey('pk_test_YEPWfjMqdWrR2nrIAevve7QI');
	
	$('#payment-form').submit(function(e) {
    	var form = $(this);

	    // Disable the submit button to prevent repeated clicks
	    form.find('button').prop('disabled', true);
	
	    Stripe.card.createToken(form, stripeResponseHandler);
	    
// 		    Stripe.card.createToken({
// 			  number: $('.card-number').val(),
// 			  cvc: $('.card-cvc').val(),
// 			  exp_month: $('.card-expiry-month').val(),
// 			  exp_year: $('.card-expiry-year').val(),
// 			  metadata: {
// 				  console.log('working metadata');
// 				  to: $('.send-to').val(),
// 				  msg: $('.send-msg').val(),
// 				  sign: $('.send-sign').val()
// 				  }
// 			}, stripeResponseHandler);
	
	    // Prevent the form from submitting with the default action
	    return false;
	});
	
	var stripeResponseHandler = function(status, response) {
		var form = $('#payment-form');
	
		if (response.error) {
		    // Show the errors on the form
		    form.find('.payment-errors').text(response.error.message);
		    form.find('button').prop('disabled', false);
		} else {
		    // token contains id, last4, and card type
		    var token = response.id;
		    // Insert the token into the form so it gets submitted to the server
		    form.append($('<input type="hidden" name="stripeToken" />').val(token));
		    // and re-submit
		    form.get(0).submit();
		}
	};
