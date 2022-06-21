const creator = alice.addr;
const defaultFrozen = true;
const unitName = "ALICEART";
const assetName = "tenx";
const url = "https://www.canva.com/design/DAFEL6w5NI0/E4_6HLZKvf5GV-RNSTSXWw/view?utm_content=DAFEL6w5NI0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
const managerAddr = undefined;
const reserveAddr = undefined;
const freezeAddr = undefined;
const clawbackAddr = undefined;
const total = 1; // NFTs have totalIssuance of exactly 1
const decimals = 0; // NFTs have decimals of exactly 0
const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
    from: creator,
    total,
    decimals,
    assetName,
    unitName,
    assetURL: url,
    assetMetadataHash: metadata,
    defaultFrozen,
    freeze: freezeAddr,
    manager: managerAddr,
    clawback: clawbackAddr,
    reserve: reserveAddr,
    suggestedParams: params,
});