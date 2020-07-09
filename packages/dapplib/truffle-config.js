require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind history imitate private fortune turkey'; 
let testAccounts = [
"0x84d1f7512968bd4169ef900a3ad6f2148f16e9fff7bade8651f77d98ac0a1bfb",
"0x4c6a21e26737de85768eeb89aa538c40b63a69dfa83fdfedf74d6bb5e722ca23",
"0x6f03617ca83a0d6d429b2822780bc2c639402c149d79394ea35068384dae08d7",
"0xb7e93c2733bf03fdb94a890ebdd8efa053ed69f05c7bf90b3532d8ee2dc66d5e",
"0x64179d94d2ea222c3e5002535ec02a75f1c0576ab5ccea4d340f3218a5fa429e",
"0xe53b11fa2fb5fea61c1a0a8b6c2ec3ac790ff99b71599ae80168fabb1f8e647b",
"0xd01f397d9a9b82590b3fb32f494ef6b0a815058334bc90dbfaac51eb275ebbcf",
"0xeecf2a81da38415dc70a1d22157f9202d00e151c792ae735f3c266ff4120cdbc",
"0x4e3f2d8ea34083504befa266dc6e4d69bc06452af029dedec27df81b4fffb796",
"0x6f73532f2559c1817caa7127e6bce603217d26383acbc4f0a2abfbed41fc5a3d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
