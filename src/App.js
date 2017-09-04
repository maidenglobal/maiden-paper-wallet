import React from 'react';
import './App.css';
import QArt from 'react-qart';

// images
import logo from './logo.png';

// generate from the command line for performance
// vanityeth -i babe
const keypairs = [
  { address: '0xbabe40f81a1c431e447052f53f07e09656be2369', privKey: 'c4ac002141d62ec59f9df0603a7a27ead61470364b9a48e6c0e27c976399dc8d' },
  // { address: '0xbabe1eda87999682305daa0b8e1a5b72b685a5c5', privKey: 'f501bc401092a351b3cfc56f68d87b102cc410cb21474a63587f8689dabb2d55' },
  // { address: '0xbabe7d05e58318b1c17f92006ee81ddebad80967', privKey: 'c36a7327cdc437767c8706852e919c60a094de36af01efff1e72335f28d557c6' }
]

const App = () => {
  return <div>
    {keypairs.map(Wallet)}
  </div>
}

const Wallet = ({ address, privKey }) =>
  <div key={address}>
    <QArt
      value={address}
      imagePath={logo.slice(1)}
      size='300'
    />
    <span className='address'>{address}</span>
    <span className='address'>{privKey}</span>
    <QArt
      value={privKey}
      imagePath={logo}
      filter='threshold'
      size='300'
    />
    <p>You can share your public address. This is how people can send you Ether.</p>
    <p>This paper wallet has been pre-loaded with Ether. It can be imported into a wallet such as Jaxx to complete the Maiden Challenge!</p>
    <p>If you complete the challenge, you will receive a reward</p>
  </div>

export default App;
