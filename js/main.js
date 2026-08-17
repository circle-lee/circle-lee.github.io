var $g_jsonData = null;

function loadData() {
    // Standard jQuery getJSON
    $.getJSON("./assets/data.json", function (data) {
        $g_jsonData = data;
    }).fail(function () {
        // Fallback for environments with standard fetch
        fetch("./assets/data.json")
            .then(function (res) { return res.json(); })
            .then(function (data) {
                $g_jsonData = data;
            })
            .catch(function (err) {
                console.error("Failed to load data.json:", err);
            });
    });
}

function addProEx(idx, jsonData) {
    var title = jsonData.title;
    var company_name = jsonData.company_name;
    var period = jsonData.period;
    var role = jsonData.role;
    var skillSets = jsonData.skillSets;
    var projects = jsonData.projects;
    var state = jsonData.state; // 'keep' or 'end'

    var isCurrent = state === "keep" || (period && period.toLowerCase().includes("present"));
    var statusBadge = isCurrent 
        ? '<span class="badge badge-active"><span class="badge-dot"></span>Present</span>' 
        : '<span class="badge badge-past">Completed</span>';

    var $item = $('<div class="timeline-item"></div>');
    var $marker = $('<div class="timeline-marker ' + (isCurrent ? "marker-active" : "") + '"><div class="marker-dot"></div></div>');
    var $card = $('<div class="card timeline-card ' + (isCurrent ? "card-highlight" : "") + '"></div>');

    var headerHtml = `
        <div class="card-header">
            <div class="card-title-group">
                <h3 class="card-title">${title}</h3>
                <div class="card-company"><i class="fas fa-building"></i> ${company_name}</div>
            </div>
            <div class="card-meta-group">
                <span class="period-text"><i class="far fa-calendar-alt"></i> ${period}</span>
                ${statusBadge}
            </div>
        </div>
    `;
    $card.append(headerHtml);

    var $cardBody = $('<div class="card-body"></div>');

    if (role) {
        $cardBody.append(`<div class="item-role"><i class="fas fa-keyboard"></i> <span>${role}</span></div>`);
    }

    if (skillSets && skillSets.length > 0) {
        var $skillsSection = $('<div class="item-section"><div class="item-section-title"><i class="fas fa-code"></i> Skills</div><div class="tag-group"></div></div>');
        var $tagGroup = $skillsSection.find(".tag-group");
        $.each(skillSets, function (i, set) {
            $.each(set, function (j, skill) {
                $tagGroup.append(`<span class="tag tag-skill">${skill}</span>`);
            });
        });
        $cardBody.append($skillsSection);
    }

    if (projects && projects.length > 0) {
        var $projSection = $('<div class="item-section"><div class="item-section-title"><i class="fas fa-cubes"></i> Projects / Key Activities</div><ul class="bullet-list"></ul></div>');
        var $bulletList = $projSection.find(".bullet-list");
        $.each(projects, function (i, proj) {
            $bulletList.append(`<li>${proj}</li>`);
        });
        $cardBody.append($projSection);
    }

    $card.append($cardBody);
    $item.append($marker).append($card);
    $("#pro-ex-timeline").append($item);
}

function addAcademicEx(idx, jsonData) {
    var title = jsonData.title;
    var period = jsonData.period;
    var name = jsonData.name;
    var place = jsonData.place;
    var instructor = jsonData.instructor;
    var details = jsonData.details;

    var $item = $('<div class="timeline-item"></div>');
    var $marker = $('<div class="timeline-marker"><div class="marker-dot"></div></div>');
    var $card = $('<div class="card timeline-card"></div>');

    var headerHtml = `
        <div class="card-header">
            <div class="card-title-group">
                <h3 class="card-title">${title}</h3>
                ${name ? `<div class="card-company"><i class="fas fa-graduation-cap"></i> ${name}</div>` : ''}
            </div>
            <div class="card-meta-group">
                <span class="period-text"><i class="far fa-calendar-alt"></i> ${period}</span>
            </div>
        </div>
    `;
    $card.append(headerHtml);

    var $cardBody = $('<div class="card-body"></div>');

    if (place) {
        $cardBody.append(`<div class="item-meta-detail"><i class="fas fa-map-marker-alt"></i> <span>${place}</span></div>`);
    }

    if (instructor) {
        $cardBody.append(`<div class="item-meta-detail"><i class="fas fa-user-tie"></i> <span>${instructor}</span></div>`);
    }

    if (details && details.length > 0) {
        var $ul = $('<ul class="bullet-list mt-2"></ul>');
        $.each(details, function (i, detail) {
            $ul.append(`<li>${detail}</li>`);
        });
        $cardBody.append($ul);
    }

    $card.append($cardBody);
    $item.append($marker).append($card);
    $("#academic-ex-timeline").append($item);
}

function addEdu(idx, jsonData) {
    var degree_name = jsonData.degree_name;
    var school = jsonData.school;
    var period = jsonData.period;
    var lab = jsonData.lab;
    var detail = jsonData.detail;

    var $item = $('<div class="timeline-item"></div>');
    var $marker = $('<div class="timeline-marker"><div class="marker-dot"></div></div>');
    var $card = $('<div class="card timeline-card"></div>');

    var headerHtml = `
        <div class="card-header">
            <div class="card-title-group">
                <h3 class="card-title">${degree_name}</h3>
                <div class="card-company"><i class="fas fa-university"></i> ${school}</div>
            </div>
            <div class="card-meta-group">
                <span class="period-text"><i class="far fa-calendar-alt"></i> ${period}</span>
            </div>
        </div>
    `;
    $card.append(headerHtml);

    var $cardBody = $('<div class="card-body"></div>');

    if (lab) {
        $cardBody.append(`<div class="item-meta-detail"><i class="fas fa-microchip"></i> <span>${lab}</span></div>`);
    }

    if (detail) {
        $cardBody.append(`<div class="highlight-box"><i class="fas fa-star text-accent"></i> <span>${detail}</span></div>`);
    }

    $card.append($cardBody);
    $item.append($marker).append($card);
    $("#edu-timeline").append($item);
}

function addOpenSrc(idx, jsonData) {
    var img_name = jsonData.img_name;
    var nameClean = img_name.replace(/\.[^/.]+$/, "");
    var $div_logo = $(`
        <div class="logo-card">
            <div class="logo-img-wrap">
                <img src="./assets/${img_name}" alt="${nameClean}" loading="lazy" />
            </div>
            <span class="logo-name">${nameClean}</span>
        </div>
    `);
    $("#open-src-content").append($div_logo);
}

function addTechStack(idx, jsonData) {
    var img_name = jsonData.img_name;
    var displayName = jsonData.name || img_name.replace(/\.[^/.]+$/, "");
    var $div_logo = $(`
        <div class="logo-card">
            <div class="logo-img-wrap">
                <img src="./assets/${img_name}" alt="${displayName}" loading="lazy" />
            </div>
            <span class="logo-name">${displayName}</span>
        </div>
    `);
    $("#tech-stack-content").append($div_logo);
}

function addPaper(targetId, jsonData) {
    var author = jsonData.author;
    var title = jsonData.title;
    var journal = jsonData.journal;
    var link = jsonData.link;

    var titleContent = (link !== undefined && link !== "")
        ? `<a target="_blank" rel="noopener noreferrer" href="${link}" class="paper-title-link">"${title}" <i class="fas fa-external-link-alt"></i></a>`
        : `"${title}"`;

    var $card = $(`
        <div class="card pub-card">
            <div class="pub-header">
                <h4 class="pub-title">${titleContent}</h4>
            </div>
            <div class="pub-authors"><i class="fas fa-user-edit"></i> ${author}</div>
            <div class="pub-venue"><i class="fas fa-bookmark"></i> ${journal}</div>
        </div>
    `);

    $(targetId).append($card);
}

function addInternationalJournal(idx, jsonData) {
    addPaper("#inter_jnl-list", jsonData);
}
function addDomesticJournal(idx, jsonData) {
    addPaper("#dome_jnl-list", jsonData);
}
function addConference(idx, jsonData) {
    addPaper("#conf-list", jsonData);
}

function addPatent(targetId, jsonData) {
    var author = jsonData.author;
    var title = jsonData.title;
    var date = jsonData.date;
    var link = jsonData.link;

    var titleContent = (link !== undefined && link !== "")
        ? `<a target="_blank" rel="noopener noreferrer" href="${link}" class="paper-title-link">"${title}" <i class="fas fa-external-link-alt"></i></a>`
        : `"${title}"`;

    var $card = $(`
        <div class="card pub-card">
            <div class="pub-header">
                <h4 class="pub-title">${titleContent}</h4>
            </div>
            <div class="pub-authors"><i class="fas fa-users"></i> ${author}</div>
            <div class="pub-venue"><i class="fas fa-stamp"></i> ${date}</div>
        </div>
    `);

    $(targetId).append($card);
}

function addInternationalPatent(idx, jsonData) {
    addPatent("#inter_pat-list", jsonData);
}
function addDomesticPatent(idx, jsonData) {
    addPatent("#dome_pat-list", jsonData);
}

function addAwards(idx, text) {
    var $card = $(`
        <div class="card award-card">
            <div class="award-icon-box"><i class="fas fa-medal"></i></div>
            <div class="award-content">${text}</div>
        </div>
    `);
    $("#awards-list").append($card);
}

function renderData() {
    if ($g_jsonData == null) {
        setTimeout(renderData, 200);
        return;
    }

    $("body").removeClass("hidden");

    $.each($g_jsonData.pro_ex, addProEx);
    $.each($g_jsonData.academic_ex, addAcademicEx);
    $.each($g_jsonData.edu, addEdu);
    $.each($g_jsonData.open_src, addOpenSrc);
    $.each($g_jsonData.tech_stack, addTechStack);
    $.each($g_jsonData.inter_jnl, addInternationalJournal);
    $.each($g_jsonData.dome_jnl, addDomesticJournal);
    $.each($g_jsonData.conf, addConference);
    $.each($g_jsonData.inter_pat, addInternationalPatent);
    $.each($g_jsonData.dome_pat, addDomesticPatent);
    $.each($g_jsonData.awards, addAwards);
}
