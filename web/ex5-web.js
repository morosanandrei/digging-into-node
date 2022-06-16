(function Ex5() {
    var btn;
    var recordsList;

    document.addEventListener("DOMContentLoaded", init, false);
    
    function init() {
        btn = document.querySelectorAll("[rel*=js-btn]")[0];
        recordsList = document.querySelectorAll("[rel*=js-records-list]")[0];

        btn.addEventListener("click", getRecords, false);
    }

    function renderRecords(records) {
        var transforms = {
            "row": {
                "<>": "tr",
                html: "<td>${something}</td><td>${other}</td>",
            },
            "table": {
                "<>": "table",
                border: "1",
                cellPadding: "10",
                html: function table() {
                    return `<tr><td>Something</td><td>Other</td>`
                }
            }
        };

        // recordsList.innerHTML = json2html.transform({}, transform)
        recordsList.innerHTML = records;
    }

    async function getRecords() {
        console.log('test');
        var res = await fetch("/get-records");
        if(res && res.status == 200) {
            let records = await res.json();
            if (records && records.length > 0) {
                renderRecords(records);
            }
        }
        // recordsList.innerHTML = '...';
    }
})()