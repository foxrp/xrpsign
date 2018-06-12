xrpsign
=======

A simple package for signing XRP transactions.

## Installation

```
npm install xrpsign
```

## Usage

```js
const sign = require('xrpsign');

// tx can be an object or the JSON equivalent.
const tx = {
    TransactionType: 'Payment',
    Account: 'rQBnNY5w5cALHbMaue2VefSzuBfxafwqp9',
    Fee : '12',
    Destination: 'rnQ1WgToG2RL9Fjmofif9ixYVgJTi6BLas',
    Amount: '1000000',
    Sequence: 3
};

const secret = 'sxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

// signedTx is now a transaction object with the signed data.
let signedTx = sign(tx, secret);
```

## Acknowledgements

Big thanks to [@WietseWind](https://twitter.com/WietseWind) for help on this one. 
