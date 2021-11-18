function items() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText)

            var items = response.items;

            document.getElementById("view").style.display = "none";

            document.getElementById("items").innerHTML = `<thead>
        <tr>
          <th scope="col">Sl.No.</th>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit</th>
          <th scope="col">Department</th>
          <th scope="col">Notes</th>
          
        </tr>
      </thead>
      <tbody id="tableBody">
      <tr id="my_span0" >
      <td>${items[0].slNo}</td>
      <td>${items[0].name}</td>
      <td>${items[0].quantity}</td>
      <td>${items[0].unit}</td>
      <td>${items[0].Department}</td>
      <td>${items[0].Notes}</td>
      
      </tr>

      <tr id="my_span1" >
      <td>${items[1].slNo}</td>
      <td>${items[1].name}</td>
      <td>${items[1].quantity}</td>
      <td>${items[1].unit}</td>
      <td>${items[1].Department}</td>
      <td>${items[1].Notes}</td>
      
      </tr>

      <tr id="my_span2" >
      <td>${items[2].slNo}</td>
      <td>${items[2].name}</td>
      <td>${items[2].quantity}</td>
      <td>${items[2].unit}</td>
      <td>${items[2].Department}</td>
      <td>${items[2].Notes}</td>
      
      </tr>

      <tr id="my_span3" >
      <td>${items[3].slNo}</td>
      <td>${items[3].name}</td>
      <td>${items[3].quantity}</td>
      <td>${items[3].unit}</td>
      <td>${items[3].Department}</td>
      <td>${items[3].Notes}</td>
     
      </tr>

      <tr id="my_span4" >
      <td>${items[4].slNo}</td>
      <td>${items[4].name}</td>
      <td>${items[4].quantity}</td>
      <td>${items[4].unit}</td>
      <td>${items[4].Department}</td>
      <td>${items[4].Notes}</td>
     
      </tr>
      
      <tr id="my_span5" >
      <td>${items[5].slNo}</td>
      <td>${items[5].name}</td>
      <td>${items[5].quantity}</td>
      <td>${items[5].unit}</td>
      <td>${items[5].Department}</td>
      <td>${items[5].Notes}</td>
      
      </tr>

      <tr id="my_span6" >
      <td>${items[6].slNo}</td>
      <td>${items[6].name}</td>
      <td>${items[6].quantity}</td>
      <td>${items[6].unit}</td>
      <td>${items[6].Department}</td>
      <td>${items[6].Notes}</td>
     
      </tr>

      <tr id="my_span7" >
      <td>${items[7].slNo}</td>
      <td>${items[7].name}</td>
      <td>${items[7].quantity}</td>
      <td>${items[7].unit}</td>
      <td>${items[7].Department}</td>
      <td>${items[7].Notes}</td>
     
      </tr>
      
      <tr id="my_span8" >
      <td>${items[8].slNo}</td>
      <td>${items[8].name}</td>
      <td>${items[8].quantity}</td>
      <td>${items[8].unit}</td>
      <td>${items[8].Department}</td>
      <td>${items[8].Notes}</td>
      
      </tr>

      <tr id="my_span9" >
      <td>${items[9].slNo}</td>
      <td>${items[9].name}</td>
      <td>${items[9].quantity}</td>
      <td>${items[9].unit}</td>
      <td>${items[9].Department}</td>
      <td>${items[9].Notes}</td>
     
      </tr>

      
      </tbody>`;


            document.getElementById("add").innerHTML = `<div style="padding-bottom:10%;" id="myDIV" class="header">
                    
            </div>`
        }
    }
    xhttp.open("GET", "items.json", true)
    xhttp.send();
}

