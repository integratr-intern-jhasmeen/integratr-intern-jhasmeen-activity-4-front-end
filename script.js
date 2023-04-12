let text = ""
    var payload = []

    function onSubmit() {
        var Firstname = document.getElementById("Firstname").value;
        var Middlename = document.getElementById("Middlename").value;
        var Lastname = document.getElementById("Lastname").value;
        var checkboxes = document.getElementsByClassName("checkbox")

        text = ""
        index = 0;

        payload.length = 0
        for (const checkbox of checkboxes) {
            if(payload.length == 0){
            document.getElementById("Sports").innerHTML = "No Selected Sports"
            console.log("Test1");
        }
        if (checkbox.checked == true) {
            payload.push(checkbox.value);
            console.log("Test2");
        }
    }
    payload.forEach(TransformData);
    document.getElementById("fullname").innerHTML = Firstname +  ""  + Middlename + "" + Lastname
    console.log("Test3");
}
function TransformData(item, index){
    text += index + (" ") + item + "<br>";
    document.getElementById("Sports").innerHTML = text
    console.log("Test4");
}