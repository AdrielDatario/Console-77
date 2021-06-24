var name_array = [];

function submit()
{
    var display_student_array = [];
    
   
    for (var j = 1; j <=4; j++){
        var Names = document.getElementById("name_of_the_student_"+j).value;
        console.log(Names);
         name_array.push(Names);
    }

    console.log(name_array);

    var length_array = name_array.length;
    console.log(length_array);

    for (var k = 0; k < length_array; k++){

        display_student_array.push("<h4>NAME - " + name_array[k]+ "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){

    var hi = name_array.sort();
    console.log(name_array);
    console.log(hi);

    var sorting_array = [];

    var length_array = name_array.length;
    console.log(length_array);

    for (var k = 0; k < length_array; k++){

        sorting_array.push("<h4>NAME - " + name_array[k]+ "</h4>");
        console.log(sorting_array);
    }

    var remove_commas = sorting_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}