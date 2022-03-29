require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note punch provide harvest fork bridge ten'; 
let testAccounts = [
"0xd1c2cac5eed372cc2a64219190a293492a3660a5fa52fe1456d8166f082c49f2",
"0xd1c29a5eeaae2a00086d27c80f355df37fd5c9d551f62d8a4b3b7476fe7bd506",
"0xe8027bf32e3b12741309a62026aaf40058b4e8f81a518448ac070b1f59303d18",
"0xe468b95ed47193a5ced5b10236cfb5dcb8f0e9639c807633efb91c92fff0db76",
"0x9a7ed98e42c676fbcafa63f2a122ebee714f196720c35024ea2838632ba0919c",
"0x557fd36a0b4d9320c4a339e1a42165e0b686ae6d4cd17e7967eaf32dfc12092d",
"0xd675b817ad684804ed967433feff01304c99e986ab71fe09b724dd5cde08d785",
"0x12bc77d2f470872a63435330d9ebe94250fc83ec6ac30c64602e3420bba92909",
"0x948dcc82635d4923c6c3143b7fea34d0f703a99403046e02d95efc65ca06b595",
"0xd7b43e71876d932d2c0991a9516dc36310c8ee467489494f78cdfc6795bdf4b4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

