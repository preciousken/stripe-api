require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createTransfer = async() => {
    const transfer = await stripe.transfers.create({
        amount: 400,
        currency: 'usd',
        destination: 'acct_1032D82eZvKYlo2C',
        transfer_group: 'ORDER_95',
      });

    console.log(transfer)
}
createTransfer()