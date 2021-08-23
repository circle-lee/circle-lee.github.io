
var $g_jsonData = null;

function loadData() {
    /*
    $.getJSON('./assets/data.json', function (data) {
        $g_jsonData = data;
    });
    */
    $g_jsonData = $.parseJSON('{    "pro_ex":    [        {            "title": "Software Engineer",            "company_name": "LINE Plus Corporation",            "period": "2021.08 - Present",            "job": "Desktop Developer",            "loc": "l",            "projects": [ ]        },        {            "title": "Firmware Engineer",            "company_name": "SK hynix",            "period": "2021.01 - 2021.07",            "job": "SSD FTL Developer",            "loc": "r",            "projects": [ "PE9110 - PCIe Gen4 DataCenter SSD", "PC801 - PCIe Gen4 Client SSD" ]        },        {            "title": "Junior Firmware Engineer",            "company_name": "SK hynix",            "period": "2019.01 - 2020.12",            "job": "SSD FTL Developer",            "loc": "r",            "projects": [ "PE9110 - PCIe Gen4 DataCenter SSD", "PC801 - PCIe Gen4 Client SSD", "PE8110 - PCIe Gen3 Enterprise SSD" ]        },        {            "title": "Software Engineer",            "company_name": "Smart&Wise",            "period": "2015.07 - 2016.01",            "job": "Web (FE/BE) Developer",            "loc": "l",            "projects": [ "Homepage of General Students\' Association at Korea Univ.", "Homepage of Counseling Program at Korea University", "Homepage of Smart&Wise" ]        },        {            "title": "Software Engineer",            "company_name": "ECO, Inc.",            "period": "2013.09 - 2015.06",            "job": "Windows Developer",            "loc": "r",            "projects": [ "Book Searcher for KIOSK", "eBook Viewer for KIOSK", "eBook Viewer for web" ]        }    ],    "edu":    [        {            "degree_name": "M.E degree at Dept. of Computer Engineering",            "period": "2017 - 2018",            "school": "Kwangwoon University",            "lab": "in Information and Communication Technology (ICT) Laboratory",            "loc": "l",            "detail": ""        },                {            "degree_name": "B.E degree at Dept. of Computer Engineering",            "period": "2011 - 2016",            "school": "Kwangwoon University",            "lab" : "",            "loc": "r",            "detail": "graduated at the top of Dept. of Computer Engineering, Kwangwoon University (1/84)"        }    ],    "open_src":    [        {            "img_name": "NS-3.png"        },        {            "img_name": "GNUboard5.png"        }    ],    "tech_stack":    [        {            "img_name": "C.png"        },        {            "img_name": "cpp.png"        },        {            "img_name": "Csharp.png"        },        {            "img_name": "python.png"        },        {            "img_name": "php.png"        },        {            "img_name": "matlab.png"        },        {            "img_name": "html5.png"        },        {            "img_name": "javascript.png"        },        {            "img_name": "xna.png"        },        {            "img_name": "WPF.png"        },        {            "img_name": "NS-3.png"        },        {            "img_name": "GNUboard5.png"        }    ],    "inter_jnl":    [        {            "author": "<b>Won Hyoung Lee</b> and Ho Young Hwang,",            "title": "A-MPDU aggregation with optimal number of MPDUs for delay requirements in IEEE 802.11ac,",            "journal": "<i>PLoS ONE</i>, 14(3): e0213888, 17 pages, Mar. 2019 (<b>SCIE</b>).",            "link": "https://doi.org/10.1371/journal.pone.0213888"        },        {            "author": "<b>Won Hyoung Lee</b>, Ho Young Hwang, and Jo Woon Chong,",            "title": "Runtime Estimation of the Number of Active Devices in IEEE 802.15.4 slotted CSMA/CA Networks with Deferred Transmission and No Acknowledgment using ARMA Filters,",            "journal": "<i>Wireless Communications and Mobile Computing</i>, Vol. 2018, Article ID 5420876, 12 pages, Sep. 2018 (<b>SCIE</b>).",            "link": "https://doi.org/10.1155/2018/5420876"        }    ],    "dome_jnl":    [        {            "author": "<b>W. H. Lee</b> and H. Y. Hwang,",            "title": "Tuning Backoff Period for Enhancing System Throughput with Estimating Number of Devices in IEEE 802.15.4 Slotted CSMA/CA,",            "journal": "<i>The Journal of KIICE (The Journal of the Korea Institute of Information and Communication Engineering)</i>, Vol. 22, No. 9, pp. 1243-1249, Sep. 2018 (KCI).",            "link": "http://www.dbpia.co.kr/Journal/ArticleDetail/NODE07538585"        },        {            "author": "D.-H. Lee, <b>W. H. Lee</b>, S.-M. Kang, and H. Y. Hwang,",            "title": "Frequency Allocation and Path Selection Scheme in Underlay Cognitive Radio Networks with Application of Network Coding,",            "journal": "<i>The Journal of KICS (The Journal of the Korean Institute of Communication Sciences)</i>, Vol. 40, No. 12, pp. 2372-2380, Dec. 2015 (KCI).",            "link": "http://www.dbpia.co.kr/Journal/ArticleDetail/NODE06579095"        }    ],    "conf":    [        {            "author": "Do-Haeng Lee, <b>Won Hyoung Lee</b>, Eol Choi, and Ho Young Hwang,",            "title": "Subcarrier Allocation and Relay Selection for Uplink Transmission in OFDMA-Based Cognitive Radio Systems,",            "journal": "<i>2013 International Conference on ICT Convergence (ICTC)</i>, Jeju, Korea, pp. 485-487, Oct. 14-16, 2013.",            "link": "https://doi.org/10.1109/ICTC.2013.6675402"        },        {            "author": "<b>W. H. Lee</b> and H. Y. Hwang,",            "title": "Performance Evaluation of A-MPDU Aggregation for Delay Requirements in IEEE 802.11ac,",            "journal": "<i>KICS Conference Fall 2016</i>, pp. 342-343, Seoul, Korea, Nov. 19, 2016.",            "link": ""        },        {            "author": "D.-H. Lee, <b>W. H. Lee</b>, and H. Y. Hwang,",            "title": "Network Coding-Based Relay Selection in Underlay Cognitive Radio Networks,",            "journal": "<i>KICS Conference Fall 2014</i>, pp. 352-353, Daejeon, Korea, Nov. 22, 2014.",            "link": ""        },        {            "author": "<b>W. H. Lee</b>, E. Choi, D.-H. Lee, and H. Y. Hwang,",            "title": "Performance Evaluation of a Downlink Bandwidth Allocation Scheme with Inter-Cell Interference in LTE-based Relay Systems,",            "journal": "<i>SWCC 2013 (Summer Workshop on Computer Communications 2013)</i>, Vol. S1-2, pp. 147-149, Yangpyeong, Korea, Aug. 22-23, 2013.",            "link": ""        }    ],    "dome_pat":    [        {            "author": "H. Y. Hwang and <b>W. H. Lee</b>,",            "title": "Method and apparatus for estimating the number of devices in a slotted CSMA/CA network,",            "date": "No. 10-2121501, Korea, June 4, 2020."        },        {            "author": "H. Y. Hwang and <b>W. H. Lee</b>,",            "title": "Method and apparatus for improving system throughput in slotted CSMA/CA network,",            "date": "No. 10-2070301, Korea, Jan. 20, 2020."        },        {            "author": "H. Y. Hwang and <b>W. H. Lee</b>,",            "title": "Apparatus and method for transmitting aggregated frame,",            "date": "No. 10-1974168, Korea, Apr. 24, 2019."        },        {            "author": "H. Y. Hwang, D.-H. Lee, <b>W. H. Lee</b>, and S.-M. Kang,",            "title": "Path selection method and apparatus in cognitive radio network,",            "date": "No. 10-1824190, Korea, Jan. 25, 2018."        },        {            "author": "H. Y. Hwang, I. G. Jeong, and <b>W. H. Lee</b>,",            "title": "Method of Improving Service Rate using Minimum Received Power in Cognitive Relay Network and Apparatus Thereof,",            "date": "No. 10-1626952, Korea, May 27, 2016."        },        {            "author": "H. Y. Hwang, I. G. Jeong, and <b>W. H. Lee</b>,",            "title": "Method of Improving Service Rate using Maximum Link Rate in Cognitive Relay Network and Apparatus Thereof,",            "date": "No. 10-1626951, Korea, May 27, 2016."        }    ],    "awards":    [        "우수상, NAND개발사업총괄 신입사원 공통과정(NSSUP), SK하이닉스주식회사 NAND개발사업총괄, 2019년 2월 28일.",        "장려상, 컴퓨터공학과 졸업작품전시회, 광운대학교 컴퓨터공학과, 2016년 11월 18일.",        "장려상, 제 5회 소프트웨어프로그래밍 경진대회, 광운대학교 공학교육혁신센터, 2016년 9월 29일.",        "장학증서, 광운대학교 총동문회, 2015년 10월 6일.",        "표창장, 서울특별시교원단체총연합회, 2011년 2월 9일."    ]}');
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
    $div_content.append('<p class="white-space"><i class="fas fa-building"></i> ' + company_name + '</p>');
    $div_content.append('<p class="white-space"><i class="fas fa-keyboard"></i> ' + job + '</p>');
    $.each(projects, function (idx, project) {
        $div_content.append('<p class="project-white-space"><i class="fas fa-check"></i> ' + project + '</p>');
    });

    var $div_line_l = $("<div class='line-l'></div>");
    var $div_line_r = $("<div class='line-r'></div>");

    var $div_line_loc = null;
    if (loc == "l") {
        $div_line_loc = $div_line_l;

        $div_line_l.append($div_content);
        $div_line_l.append('<div class="link-line"></div>');
        $div_line_r.addClass('line-e');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
        $div_line_l.addClass('line-e');
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
    $div_content.append('<p class="white-space"><i class="fas fa-university"></i> ' + school + '</p>');
    if (lab != "") {
        $div_content.append('<p class="white-space"><i class="fas fa-desktop"></i> ' + lab + '</p>');
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
        $div_line_r.addClass('line-e');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
        $div_line_l.addClass('line-e');
    }

    $div_line_loc.append();

    var $div_line = $('<div class="line"></div>');
    $div_line.append($div_line_l);
    $div_line.append($div_line_r);

    $('#edu').append($div_line);
}

function addOpenSrc(idx, jsonData) {
    var img_name = jsonData.img_name;
    
    var $div_logo = $('<div class="open-src-logo"><img src="./assets/' + img_name + '"></div>');
    $('#open-src').append($div_logo);
}

function addTechStack(idx, jsonData) {
    var img_name = jsonData.img_name;
    
    var $div_logo = $('<div class="tech-stack-logo"><img src="./assets/' + img_name + '"></div>');
    $('#tech-stack').append($div_logo);
}

function addPaper(id, jsonData) {
    var author = jsonData.author;
    var title = jsonData.title;
    var journal = jsonData.journal;
    var link = jsonData.link;
    
    var $div_paper = $('<div class="paper"></div>');
    $div_paper.append($('<p>' + author + '</p>'));
    if (link == "") {
        $div_paper.append($('<p class="title">"' + title + '"</p>'));
    }
    else {
        $div_paper.append($('<p class="title"><a target="_blank" href="' + link + '">"' + title + '"</a></p>'));
    }
    $div_paper.append($('<p class="journal">' + journal + '</p>'));

    $(id).append($div_paper);
}
function addInternationalJournal(idx, jsonData) {
    addPaper('#inter_jnl', jsonData);
}
function addDomesticJournal(idx, jsonData) {
    addPaper('#dome_jnl', jsonData);
}
function addConference(idx, jsonData) {
    addPaper('#conf', jsonData);
}

function addPatent(id, jsonData) {
    var author = jsonData.author;
    var title = jsonData.title;
    var date = jsonData.date;
    
    var $div_patent = $('<div class="patent"></div>');
    $div_patent.append($('<p>' + author + '</p>'));
    $div_patent.append($('<p class="title">"' + title + '"</p>'));
    $div_patent.append($('<p>' + date + '</p>'));

    $(id).append($div_patent);
}
function addDomesticPatent(idx, jsonData) {
    addPatent('#dome_pat', jsonData);
}

function addAwards(id, jsonData) {
    var text = jsonData;
    $('#awards').append($('<div class="award"><p>' + text + '</p></div>'))
}


function renderData() {
    if ($g_jsonData == null) {
        setTimeout(renderData, 500);
        return;
    }

    $('body').removeClass('hidden');

    $.each($g_jsonData.pro_ex, addProEx);
    $.each($g_jsonData.edu, addEdu);
    $.each($g_jsonData.open_src, addOpenSrc);
    $.each($g_jsonData.tech_stack, addTechStack);
    $.each($g_jsonData.inter_jnl, addInternationalJournal);
    $.each($g_jsonData.dome_jnl, addDomesticJournal);
    $.each($g_jsonData.conf, addConference);
    $.each($g_jsonData.dome_pat, addDomesticPatent);
    $.each($g_jsonData.awards, addAwards);
}