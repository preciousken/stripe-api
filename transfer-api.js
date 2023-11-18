const stripe = require('stripe')('sk_test_your_key');
require('dotenv').config();

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