import stripe

# Set your secret key: remember to change this to your live secret key in production
# See your keys here https://dashboard.stripe.com/account/apikeys
stripe.api_key = "pk_test_YEPWfjMqdWrR2nrIAevve7QI"

# Get the credit card details submitted by the form
token = request.POST['stripeToken']

# Create the charge on Stripe's servers - this will charge the user's card
try:
  charge = stripe.Charge.create(
    amount=5431, # amount in cents, again
    currency="usd",
    source=token,
    description="Test charge",
    metadata={"order_id": "6735"}
  )
except stripe.error.CardError:
  # The card has been declined
  pass