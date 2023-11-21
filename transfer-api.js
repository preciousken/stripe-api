require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function payoutToNigeriaBank() {
    try {
      const payout = await stripe.payouts.create({
        amount: 500000, // Amount in kobo (e.g., 500000 kobo represents ₦5000)
        currency: 'NGN', // Nigerian Naira currency code
        method: 'standard', // Payout method (standard or instant)
        destination: {
          // Bank account details for the Nigerian bank
          // Replace these values with the actual bank account details
          type: 'bank_account',
          currency: 'NGN',
          account_number: '0473035834',
          routing_number: 'ROUTING_NUMBER',
          account_holder_name: 'ADEMOLA KEHINDE PELUMI',
          // Additional fields might be required based on the bank and country
          // Add them as necessary (e.g., bank_code, swift, etc.)
        },
      });
  
      console.log('Payout created:', payout);
    } catch (error) {
      console.error('Error initiating payout:', error);
    }
  }
  
  // Call the function to initiate the payout
  payoutToNigeriaBank();