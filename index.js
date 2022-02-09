"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("@azure/identity");
console.log("Starting...");
(async () => {
    const creds = new identity_1.AzureCliCredential();
    const before = +new Date();
    await creds.getToken("https://vault.azure.net/.default");
    const after = +new Date();
    console.log(`Fetched a token with AzureCliCredential in ${((after - before) /
        1000).toFixed(1)} seconds`);
})();
(async () => {
    const creds = new identity_1.DefaultAzureCredential();
    const before = +new Date();
    await creds.getToken("https://vault.azure.net/.default");
    const after = +new Date();
    console.log(`Fetched a token in with DefaultAzureCredential ${((after - before) /
        1000).toFixed(1)} seconds`);
})();
