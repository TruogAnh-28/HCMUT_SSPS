window.addEventListener('load', (e) => {
    document.getElementById('logout').addEventListener("click", function () {
        document.getElementById('logout_popup').classList.add("open-popup");
    })
    document.getElementById('del').addEventListener("click", function () {
        document.getElementById('logout_popup').classList.add("close-popup");
    })
});

async function getOrder() {
    var table_tbody = document.getElementById('table_tbody');
    const response = await fetch("http://127.0.0.1:3000/order/infor", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE2ODg2OTIsImV4cCI6MTcwMjI5MzQ5Mn0.fiynwadmi2Mxg3-DZjo8z9MkN4UEp5O1l6-wHmfC-fs"
        }
    }); const data = await response.json();
    for (var i = 0; i < data.length; i++) {
        const para = document.createElement("tr");
        const date1 = document.createElement("td");
        date1.innerText = data[i].orderdatestart;
        para.appendChild(date1);
        const date2 = document.createElement("td");
        date2.innerText = data[i].orderdateend;
        para.appendChild(date2);
        const namefile = document.createElement("td");
        namefile.innerText = data[i].document;
        para.appendChild(namefile);
        const numpages = document.createElement("td");
        numpages.innerText = data[i].numberofpages;
        para.appendChild(numpages);
        const numsides = document.createElement("td");
        numsides.innerText = data[i].numsides;
        para.appendChild(numsides);
        const copies = document.createElement("td");
        copies.innerText = "1";
        para.appendChild(copies);
        const papersize = document.createElement("td");
        papersize.innerText = data[i].size;
        para.appendChild(papersize);
        const bach = document.createElement("td");
        bach.innerText = Math.ceil((parseInt(data[i].numberofpages) / parseInt(numsides.innerText)) * parseInt(copies.innerText));
        para.appendChild(bach);
        const printer = document.createElement("td");
        printer.innerText = "H6";
        para.appendChild(printer);
        const status = document.createElement("td");
        if (data[i].status == "processing") {
            status.innerText = "Processing";
            status.style = "color: red; font-weight: 600";
        }
        else if (data[i].status == "save") {
            status.innerText = "Save";
            status.style = "color: var(--main-color); font-weight: 600";
        }
        else {
            status.innerText = "Done";
            status.style = "color: var(--text-color); font-weight: 600";
        }
        para.appendChild(status);
        /*const del = document.createElement("td");
        const del_a = document.createElement("a");
        del_a.classList.add("del");
        del_a.innerText = "Delete";
        del.appendChild(del_a);
        del.style ="text-decoration: underline; cursor: pointer;font-weight:600"
        if(data[i].status == "processing")
        {
            del.style = "pointer-events:none;";
        }
        para.appendChild(del);*/
        table_tbody.appendChild(para);
    }

};
getOrder();
function SearchFile() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_log");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}