import data from './data.json' assert {type : "json"};
console.log(data["hi"]);
function buildSemBlock() {
    var idx = "AY 2021/2022 Semester 1";
    console.log(idx);
    var moduleList = data[idx];
    console.log(moduleList);
    var id = moduleList.id;
    var totalCount = Object.keys(data).length;
    console.log(id);
    console.log("totalcount = " + totalCount);
    console.log(moduleList.nusmods.length);
    var html="";
    for (var i = 0, l = moduleList.nusmods.length; l > i; i++) {
        html += "<div class=\"modcontainer\">";
        html += "<h2 style=\"font-size:30px; margin-bottom: 1px;\">" + moduleList.nusmods[i] + "</h2>";
        html += "<h3 style=\"font-size:25px; padding-top: 0; margin-top: 0;\">" + moduleList.names[i] +"</h3>";
        html += "<img src=\"images/modicons/"+ moduleList.images[i]+"\" class=\"mod-img\">" + 
        "<p style=\"font-size: xx-large; margin-top: 1px; margin-bottom: 1px;\">" + 
            "<a href=\"modulereviews/cs1101s.html\" style=\"color:rgb(4, 10, 95);\">Review</a></p>" + 
            "</div>";
    }
    document.getElementsByClassName('wrapper-grid5')[-1 * id + (totalCount - 2)].innerHTML=html;
    console.log("index of wrapper-grid5 = " + (-1 * id + (totalCount - 2)));

}
buildSemBlock();