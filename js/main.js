
var $g_jsonData = null;

function loadData() {
    /*
    $.getJSON('./assets/data.json', function (data) {
        $g_jsonData = data;
    });
    */


    var jsonText = '{    "pro_ex":    [        {            "title": "Software Engineer",            "company_name": "LINE Plus Coporation",            "period": "2021.08 - Present",            "job": "Desktop Developer",            "loc": "l",            "projects": [ ]        },        {            "title": "Firmware Engineer",            "company_name": "SK hynix",            "period": "2021.01 - 2021.07",            "job": "SSD Flash Translation Layer (FTL) Developer",            "loc": "r",            "projects": [ "PE9110 - PCIe Gen4 DataCenter SSD", "PC801 - PCIe Gen4 Client SSD" ]        },        {            "title": "Junior Firmware Engineer",            "company_name": "SK hynix",            "period": "2019.01 - 2020.12",            "job": "SSD FTL Developer",            "loc": "r",            "projects": [ "PE9110 - PCIe Gen4 DataCenter SSD", "PC801 - PCIe Gen4 Client SSD", "PE8110 - PCIe Gen3 Enterprise SSD" ]        },        {            "title": "Software Engineer",            "company_name": "Smart&Wise",            "period": "2015.07 - 2016.01",            "job": "Web (FE/BE) Developer",            "loc": "l",            "projects": [ "Homepage of General Students\' Association at Korea Univ.", "Homepage of Counseling Program at Korea University", "Homepage of Smart&Wise" ]        },        {            "title": "Software Engineer",            "company_name": "ECO, Inc.",            "period": "2013.09 - 2015.06",            "job": "Windows Developer",            "loc": "r",            "projects": [ "Book Searcher for KIOSK", "eBook Viewer for KIOSK", "eBook Viewer for web" ]        }    ],    "edu":    [        {            "degree_name": "M.E degree at Dept. of Computer Engineering",            "period": "2017 - 2018",            "school": "Kwangwoon University",            "lab": "in Information and Communication Technology (ICT) Laboratory",            "loc": "l",            "detail": ""        },                {            "degree_name": "B.E degree at Dept. of Computer Engineering",            "period": "2011 - 2016",            "school": "Kwangwoon University",            "lab" : "",            "loc": "r",            "detail": "graduated at the top of Dept. of Computer Engineering, Kwangwoon University (1/84)"        }    ]}';

    $g_jsonData = $.parseJSON(jsonText);
}


function addProEx(idx, jsonData) {
    var title = jsonData.title;
    var company_name = jsonData.company_name;
    var period = jsonData.period;
    var job = jsonData.job;
    var loc = jsonData.loc;
    var projects = jsonData.projects;

    var $div_content = $("<div class='content'></div>");
    $div_content.append('<p>' + title + ", " + period + '</p>');
    $div_content.append('<p><i class="fas fa-building white-space"></i> ' + company_name + '</p>');
    $div_content.append('<p><i class="fas fa-keyboard white-space"></i> ' + job + '</p>');
    $.each(projects, function (idx, project) {
        $div_content.append('<p><i class="fas fa-check white-space"></i> ' + project + '</p>');
    });

    var $div_line_l = $("<div class='line-l'></div>");
    var $div_line_r = $("<div class='line-r'></div>");

    var $div_line_loc = null;
    if (loc == "l") {
        $div_line_loc = $div_line_l;

        $div_line_l.append($div_content);
        $div_line_l.append('<div class="link-line"></div>');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
    }

    $div_line_loc.append();

    var $div_line = $("<div class='line'></div>");
    $div_line.append($div_line_l);
    $div_line.append($div_line_r);

    $('#pro-ex').append($div_line);
}

function addEdu(idx, jsonData) {
    var degree_name = jsonData.degree_name;
    var school = jsonData.school;
    var period = jsonData.period;
    var lab = jsonData.lab;
    var loc = jsonData.loc;
    var detail = jsonData.detail;

    var $div_content = $("<div class='content'></div>");
    $div_content.append('<p>' + degree_name + ", " + period + '</p>');
    $div_content.append('<p><i class="fas fa-university white-space"></i> ' + school + '</p>');
    if (lab != "") {
        $div_content.append('<p><i class="fas fa-desktop white-space"></i> ' + lab + '</p>');
    }
    if (detail != "") {
        $div_content.append('<p class="edu-detail">' + detail + '</p>');
    }

    var $div_line_l = $("<div class='line-l'></div>");
    var $div_line_r = $("<div class='line-r'></div>");

    var $div_line_loc = null;
    if (loc == "l") {
        $div_line_loc = $div_line_l;

        $div_line_l.append($div_content);
        $div_line_l.append('<div class="link-line"></div>');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
    }

    $div_line_loc.append();

    var $div_line = $("<div class='line'></div>");
    $div_line.append($div_line_l);
    $div_line.append($div_line_r);

    $('#edu').append($div_line);
}

function loadProEx() {
    $.each($g_jsonData.pro_ex, addProEx);
    $.each($g_jsonData.edu, addEdu);
}