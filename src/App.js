import React from 'react';
import './App.css';
import QRCode from 'qrcode.react'
import addresses from './vanity-addresses.js';

// images
import logo from './logo.png';

// generate from the command line for performance
// vanityeth -i babe
const keypairs = addresses.slice(0,50)

const App = () => {
  // print a copy of each wallet that Maiden can use to reclaim unused funds
  return <div>
    {keypairs.map(keypair =>
      <div className='wallet-pair' key={keypair.address}>
        <Wallet address={keypair.address} privKey={keypair.privKey}/>
        <Wallet address={keypair.address} privKey={keypair.privKey}/>
      </div>
    )}
  </div>
}

const Wallet = ({ address, privKey }) =>
  <div className='wallet' key={address}>
    {
      //<p>This paper wallet has been pre-loaded with Ether. It can be imported into a wallet such as Jaxx to complete the Maiden Challenge!</p>
    }

    <div className='content-box box-public-address'>
      <h2>Public Address</h2>
      <QRCode
        value={address}
        size={300}
        level='H'
      />
      <p>You can share your public address. This is how people can send you Ether.</p>
      <span className='address'>{address}</span>
    </div>

    <img src={logo} alt='Maiden Logo' className='box-logo'/>

    <div className='content-box box-private-key'>
      <h2>Private Key</h2>
      <QRCode
        value={privKey}
        size={300}
        level='H'
      />
      <p>This is your private key. Do not share this with anyone or save it anywhere!</p>
      <span className='address'>{privKey}</span>
    </div>

  </div>

export default App;
