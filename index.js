"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("@azure/identity");
console.log("hi");
const creds = new identity_1.DefaultAzureCredential();
(async () => {
    const before = +new Date();
    await creds.getToken("https://vault.azure.net/.default");
    const after = +new Date();
    console.log(`Fetched a token in ${((after - before) / 1000).toFixed(1)} seconds`);
})();
