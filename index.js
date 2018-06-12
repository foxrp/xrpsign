const RippleKeypairs = require('ripple-keypairs');
const RippleBinaryCodec = require('ripple-binary-codec');
const RippleHashes = require('ripple-hashes');

const sign = (tx, secret) => {

    if (typeof tx === 'string') {
        tx = JSON.parse(tx);
    }

    let txBlob;
    let txId;
    let keypair = RippleKeypairs.deriveKeypair(secret.trim());
    tx.SigningPubKey = keypair.publicKey;
    tx.TxnSignature = RippleKeypairs.sign(RippleBinaryCodec.encodeForSigning(tx), keypair.privateKey);

    txBlob = RippleBinaryCodec.encode(tx);
    txId = RippleHashes.computeBinaryTransactionHash(txBlob);

    return {
        tx: tx,
        tx_blob: txBlob,
        tx_id: txId
    };
};

module.exports = sign;
