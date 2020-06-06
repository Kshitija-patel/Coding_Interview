var request = new XMLHttpRequest()

request.open('GET', 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php', true)
request.send()
request.onload = function () {
    //accessing JSON data here - employees object
    var data = JSON.parse(this.response);
    // console.log(data)

    // employees array
    var employees = Object.values(data);
    console.log(employees)

    //console.log(employees[0])

    // employee fname of 1st employee
    for (var i = 0; i < employees.length; i++) {

        // var container = document.getElementById("container")

        //square
        var divSquare = document.createElement("div");
        divSquare.classList.add('square');
        divSquare.classList.add('left');
        document.getElementById("container").appendChild(divSquare);

        //crownDiv
        var divCrown = document.createElement("div");
        divCrown.classList.add('crown');
        divSquare.appendChild(divCrown);

        //circle
        var divCircle = document.createElement("div");
        divCircle.classList.add('circle');
        divCircle.id = "circle" + [i];
        divSquare.appendChild(divCircle);

        //employee image
        var divImage = document.createElement('img');
        divImage.src = 'http://sandbox.bittsdevelopment.com/code1/employeepics/' + [i + 1] + '.jpg';
        divImage.classList.add('circle1');
        divCircle.appendChild(divImage);

        //employee name
        var div_emp_name = document.createElement("div");
        div_emp_name.classList.add('emp_name');
        div_emp_name.id = "emp_name" + [i];
        divSquare.appendChild(div_emp_name);

        //employee bio
        var div_emp_bio = document.createElement("div");
        div_emp_bio.classList.add('emp_bio');
        div_emp_bio.id = "emp_bio" + [i];
        divSquare.appendChild(div_emp_bio);

        //employee role
        var div_emp_role = document.createElement("div");
        div_emp_role.classList.add('emp_role');
        div_emp_role.id = "emp_role" + [i];
        divSquare.appendChild(div_emp_role);

        //display name
        document.getElementById("emp_name" + [i]).innerHTML += employees[i].employeefname + " " + employees[i].employeelname;
        //display bio
        document.getElementById("emp_bio" + [i]).innerHTML += employees[i].employeebio;
        //display roles
        for (var x = 0; x < employees[i].roles.length; x++) {
            //console.log(employees[i].roles[x]);
            var span = document.createElement("span");
            span.style.backgroundColor = employees[i].roles[x].rolecolor;
            span.innerHTML = employees[i].roles[x].rolename;
            span.classList.add('emp_role');
            divSquare.appendChild(span);
        }
        // display crown image if featured
        if (employees[i].employeeisfeatured == 1) {

            var divImage1 = document.createElement('img');
            divImage1.src = 'crown.jpg';
            divImage1.classList.add('crownImage');
            divCrown.appendChild(divImage1);

        }
    }
};