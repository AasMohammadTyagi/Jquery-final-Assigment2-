var data = $.getJSON("data.json", function (result) {
  return result;
});
//console.log(data);
$(
  $(document).ready(function () {
    // ADD a row
    $("#myForm").submit((e) => {
      e.preventDefault();
      var _name = $("#name").val();
      var _address = $("#address").val();
      var _age = $("#age").val();
      var uniqueId = $.guid++;
      data.push({
        id: Math.floor(Math.random() * 9000),
        name: _name,
        address: _address,
        age: _age,
      });
      save(data);
    });
    data = data.responseJSON;
   // console.log(data);
    for (let i=0; i<data.length; i++) {
      // $('#t-body').append(`<tr><td>` + data[i].name + `</td><td>` + data[i].email + `</td><td>` + data[i].phone + `</td><td>` + data[i].country + `</td><td>` + data[i].currency + `</td></tr>`);
      $("#tbody").append(
        `<tr><td>` +
          data[i].name +
          "</td><td>" +
          data[i].address +
          `</td><td>` +
          data[i].age +
          `</td><td><button class='btn btn-info btn-xs btn-edit' data-bs-toggle="modal" data-bs-target="#myModal"  value="` +
          data[i].id +
          `">Edit</button><button class='btn btn-danger btn-xs btn-delete'  value="` +
          data[i].id +
          `">Delete</button></td></tr>`
      );
    }

  
    $(".btn-danger").click(function (e) {
      e.preventDefault();
      let id = $(this).val();
      let i = data.findIndex((i) => i.id == id);
      console.log(id);
       console.log(i);
      data.splice(i, 1);
     
      save(data);
    });

    //var _tr = null;
    var id1;
    var i1;
 //   $(document).on("click", ".btn-edit", function () {
    $(".btn-edit").click(function(e){
        e.preventDefault();
      id1 = $(this).val();
     i1 = data.findIndex((i1) => i1.id1 == id1);
      //console.log(i1+1);
      //console.log(id1);
      _tr = $(this).closest("tr");
       
      //('<form action="" id="myForm2"><input type="text" name="name" id="nameEdit"placeholder="name"><input type="text" name="address" id="addressEdit" placeholder="Address"><input type="number" name="age" id="ageEdit" placeholder="Age"><button type="button" id="cancel">cancel</button><button type="button" id="save">save</button></form>');

      // <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Contact Us</button>

      /* '<div class="modal" id="myModal"><div class="modal-dialog"> <div class="modal-content"><div class="modal-header"><h5 class="modal-title">Contact Us</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button>  </div> <div class="modal-body"> <form><div class="mb-3"> <label class="form-label required">Name</label><input type="text" class="form-control"></div><div class="mb-3"> <label class="form-label required">Email</label>  <input type="email" class="form-control"></div><div class="mb-3"><label class="form-label required">Type ypur message here</label><textarea class="form-control"></textarea></div></form></div><div class="modal-footer"><button type="submit" class="btn btn-primary">Submit</button><button type="submit" class="btn btn-danger">Cancel</button></div></div></div></div>'
       */
      var _name = _tr.find("td:eq(0)").text();
      var _address = _tr.find("td:eq(1)").text();
      var _age = _tr.find("td:eq(2)").text();

      $("#nameEdit").val(_name);
      $("#ageEdit").val(_age);
      $("#addressEdit").val(_address);
    });

    //$(document).on('click','#save',function(){

    $("#save").click(function() {
        
      if (_tr) {
        var _name = $("#nameEdit").val();
        var _address = $("#addressEdit").val();
        var _age = $("#ageEdit").val();

        _tr.find("td:eq(0)").text(_name);
        _tr.find("td:eq(1)").text(_address);
        _tr.find("td:eq(2)").text(_age);
       // alert("Recorde has been updated");

        //let id = $("this").val();
         let i = data.findIndex((i1) => i1.id1 == id1);
        //console.log(i);
        //console.log(i1);
        data[i1+1].name = _name;
        data[i1+1].age = _age;
        data[i1+1].address = _address;
        save(data);
      }
      $("#myModal").modal("hide");
      //save(data);
    });

    // $(document).on("click", "#cancel", function () {
        $("#cancel").click(function(){
      $("#myModal").modal("hide");
    });


  

  
  }));

function save(storageObj) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(storageObj));
  var dlAnchorElem = document.getElementById("downloadAnchorElem");
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "data.json");
  dlAnchorElem.click();
}
