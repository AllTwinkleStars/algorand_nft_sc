require("dotenv").config();
const fs = require("fs");
const algosdk = require("algosdk");

//SMART CONTRACT DEPLOYMENT
// declare application state storage (immutable)
const localInts = 0;
const localBytes = 1;
const globalInts = 24;
const globalBytes = 1;

// get accounts from mnemonic
const creatorMnemonic =
    "scan wheel heavy boy feature mind achieve crew comfort gauge valve crew assume doll pyramid insane toe tiger shed prevent color gown oil able inmate";
const userMnemonic =
    "hotel hole fox quit trend manage universe name sketch maximum toast normal develop favorite actual bean extra husband casual acquire seminar float moment ability nose";
const creatorAccount = algosdk.mnemonicToSecretKey(creatorMnemonic);
const userAccout = algosdk.mnemonicToSecretKey(userMnemonic);
const creatorSecret = creatorAccount.sk;
const creatorAddress = creatorAccount.addr;
const sender = userAccout.addr;

//Generate Account
const account = algosdk.generateAccount();
const secrekey = account.sk;
const mnemonic = algosdk.secretKeyToMnemonic(secrekey);
console.log("mnemonic " + mnemonic);
console.log("address " + account.addr);

console.log();
// Connect your client
const algodToken = process.env.REACT_APP_API_KEY;
const baseServer = "https://testnet-algorand.api.purestake.io/ps2/";
const port = "";
const headers = { "X-API-Key": process.env.REACT_APP_API_KEY };

console.log(process.env);
let client = new algosdk.Algodv2(algodToken, baseServer, port, headers);

// Read Teal File
let approvalProgram = "";
let clear_state_program = "";

try {
    approvalProgram = fs.readFileSync(
        "../contract/transaction_approval.teal",
        "utf8"
    );
    console.log(approvalProgram);
} catch (err) {
    console.error(err);
}

// Compile Program
const compileProgram = async(client, programSource) => {
    let encoder = new TextEncoder();
    let programBytes = encoder.encode(programSource);
    let compileResponse = await client.compile(programBytes).do();
    let compiledBytes = new Uint8Array(
        Buffer.from(compileResponse.result, "base64")
    );
    // console.log(compileResponse)
    return compiledBytes;
};