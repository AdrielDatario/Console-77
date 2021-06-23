var name_of_array = [];

function submit()
{
    var n1 = document.getElementById("std1").value;
    var n2 = document.getElementById("std2").value;
    var n3 = document.getElementById("std3").value;
    var n4 = document.getElementById("std4").value;

    name_of_array.push(n1);
    name_of_array.push(n2);
    name_of_array.push(n3);
    name_of_array.push(n4);

    console.log(name_of_array);

    document.getElementById("display_name").innerHTML = name_of_array;
    document.getElementById("sumit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_array.sort();
    console.log(name_of_array);
    document.getElementById("display_name").innerHTML = name_of_array;
}