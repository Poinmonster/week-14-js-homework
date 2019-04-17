var tableData = data;

let tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    
    data.forEach((dataRow) => {
        
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((value) => {
            let cell = row.append('td');
            cell.text(value);
        })
    })
}

buildTable(data);

d3.select("#filter-btn")
      .on("click", function() {
          d3.event.preventDefault();
          let date = d3.select('#datetime').property('value');

          if(date) {
              selectedData = data.filter((row) => row.datetime === date); 
          }

        buildTable(selectedData)
        })