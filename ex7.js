#! /usr/bin/env node

const HTTP_PORT = 8039;

var fetch = require('node-fetch');

main().catch(() => 1);

async function main() {
    try {
        var res = await fetch("http://localhost:8039/get-records");
        console.log('test');
        if(res && res.ok) {
            let records = await res.json();
            if(records && records.length > 0) {
                console.log(records);
                process.exitCode = 0;
                return;
            }
        }
    } catch(err) {
        console.error(err);
    }

    // process.exitCode = 1;
}