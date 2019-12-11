/* functions used in 'personal' visualization */

function getPubKey() {
    const t = window.location.href.split('/#').pop();
    if(t.length != 44 ) console.log("Wrong token length in the URL", t.length);
    return t;
}

const MINIMUM = 0.2;

function personal(pages, profile) {

    if(!pages) pagestr = '10-0';
    else {
        $("#report").empty();
        pagestr = 10 + '-' + (pages - 10);
    }
    const pk = getPubKey();
    if(!_.size(pk)) {
        $(".potrex--content").hide();
        $("#missingkey").show();
        return;
    }
    const url = buildApiUrl('personal', pk + '/' + pagestr);
    $.getJSON(url, (data) => {
        _.each(data.recent, function(entry, i) {
            if(entry.type == 'video') {
                addVideoRow(entry, i);
            } else if(entry.type == 'home') {
                addHomePage(entry, i);
            } else {
                console.log("Unmanaged condition?", entry);
            }
        });
        addPages(data.total, pagestr);
        if(!profile) updateProfileInfo(data.supporter);

        console.log("Invoking radar rendering using only one profile", MINIMUM);
        const categories = [
            {
                "name": "Live Cams", "macro": "Format",
                "href": "/live?track=6002"
            },
            {
                "name": "Popular With Women", "macro": "Fantasies",
                "href": "/popularwithwomen"
            },
            {
                "name": "Verified Amateurs", "macro": "Format",
                "href": "/video?c=138"
            },
            {
                "name": "Verified Models", "macro": "Format",
                "href": "/video?c=139"
            },
            {
                "name": "Virtual Reality", "macro": "Format",
                "href": "/vr"
            },
            {
                "name": "German", "macro": "Appearance",
                "href": "/video?c=95"
            },
            {
                "name": "60FPS", "macro": "Format",
                "href": "/video?c=105"
            },
            {
                "name": "Amateur", "macro": "Format",
                "href": "/video?c=3"
            },
            {
                "name": "Anal", "macro": "Practices",
                "href": "/video?c=35"
            },
            {
                "name": "Arab", "macro": "Appearance",
                "href": "/video?c=98"
            },
            {
                "name": "Asian", "macro": "Appearance",
                "href": "/video?c=1"
            },
            {
                "name": "Babe", "macro": "Appearance",
                "href": "/categories/babe"
            },
            {
                "name": "Babysitter", "macro": "Fantasies",
                "href": "/video?c=89"
            },
            {
                "name": "BBW", "macro": "Appearance",
                "href": "/video?c=6"
            },
            {
                "name": "Behind The Scenes", "macro": "Format",
                "href": "/video?c=141"
            },
            {
                "name": "Big Ass", "macro": "Appearance",
                "href": "/video?c=4"
            },
            {
                "name": "Big Dick", "macro": "Appearance",
                "href": "/video?c=7"
            },
            {
                "name": "Big Tits", "macro": "Appearance",
                "href": "/video?c=8"
            },
            {
                "name": "Bisexual Male", "macro": "Fantasies",
                "href": "/video?c=76"
            },
            {
                "name": "Blonde", "macro": "Appearance",
                "href": "/video?c=9"
            },
            {
                "name": "Blowjob", "macro": "Practices",
                "href": "/video?c=13"
            },
            {
                "name": "Bondage",  "macro": "Fantasies",
                "href": "/video?c=10"
            },
            {
                "name": "Brazilian", "macro": "Appearance",
                "href": "/video?c=102"
            },
            {
                "name": "British", "macro": "Appearance",
                "href": "/video?c=96"
            },
            {
                "name": "Brunette", "macro": "Appearance",
                "href": "/video?c=11"
            },
            {
                "name": "Bukkake", "macro": "Practices",
                "href": "/video?c=14"
            },
            {
                "name": "Cartoon",  "macro": "Format",
                "href": "/video?c=86"
            },
            {
                "name": "Casting", "macro": "Fantasies",
                "href": "/video?c=90"
            },
            {
                "name": "Celebrity", "macro": "Fantasies",
                "href": "/video?c=12"
            },
            {
                "name": "Closed Captions", "macro": "Format",
                "href": "/video?c=732"
            },
            {
                "name": "College", "macro": "Fantasies",
                "href": "/categories/college"
            },
            {
                "name": "Compilation", "macro": "Format",
                "href": "/video?c=57"
            },
            {
                "name": "Cosplay", "macro": "Fantasies",
                "href": "/video?c=241"
            },
            {
                "name": "Creampie", "macro": "Practices",
                "href": "/video?c=15"
            },
            {
                "name": "Cuckold", "macro": "Fantasies",
                "href": "/video?c=242"
            },
            {
                "name": "Cumshot", "macro": "Practices",
                "href": "/video?c=16"
            },
            {
                "name": "Czech", "macro": "Appearance",
                "href": "/video?c=100"
            },
            {
                "name": "Described Video", "macro": "Format",
                "href": "/described-video"
            },
            {
                "name": "Double Penetration", "macro": "Practices",
                "href": "/video?c=72"
            },
            {
                "name": "Ebony", "macro": "Appearance",
                "href": "/video?c=17"
            },
            {
                "name": "Euro", "macro": "Appearance",
                "href": "/video?c=55"
            },
            {
                "name": "Exclusive", "macro": "Format",
                "href": "/video?c=115"
            },
            {
                "name": "Feet", "macro": "Fantasies",
                "href": "/video?c=93"
            },
            {
                "name": "Female Orgasm", "macro": "Practices",
                "href": "/video?c=502"
            },
            {
                "name": "Fetish", "macro": "Fantasies",
                "href": "/video?c=18"
            },
            {
                "name": "Fingering", "macro": "Practices",
                "href": "/video?c=592"
            },
            {
                "name": "Fisting", "macro": "Practices",
                "href": "/video?c=19"
            },
            {
                "name": "French", "macro": "Appearance",
                "href": "/video?c=94"
            },
            {
                "name": "Funny", "macro": "Fantasies",
                "href": "/video?c=32"
            },
            {
                "name": "Gangbang", "macro": "Practices",
                "href": "/video?c=80"
            },
            {
                "name": "Gay", "macro": "Fantasies",
                "href": "/gayporn"
            },
            {
                "name": "Handjob", "macro": "Practices",
                "href": "/video?c=20"
            },
            {
                "name": "Hardcore", "macro": "Fantasies",
                "href": "/video?c=21"
            },
            {
                "name": "HD Porn", "macro": "Format",
                "href": "/hd"
            },
            {
                "name": "Hentai", "macro": "Format",
                "href": "/categories/hentai"
            },
            {
                "name": "Indian", "macro": "Appearance",
                "href": "/video?c=101"
            },
            {
                "name": "Interactive", "macro": "Format",
                "href": "/interactive"
            },
            {
                "name": "Interracial",  "macro": "Fantasies",
                "href": "/video?c=25"
            },
            {
                "name": "Italian", "macro": "Appearance",
                "href": "/video?c=97"
            },
            {
                "name": "Japanese", "macro": "Appearance",
                "href": "/video?c=111"
            },
            {
                "name": "Korean", "macro": "Appearance",
                "href": "/video?c=103"
            },
            {
                "name": "Latina", "macro": "Appearance",
                "href": "/video?c=26"
            },
            {
                "name": "Lesbian", "macro": "Fantasies",
                "href": "/video?c=27"
            },
            {
                "name": "Massage", "macro": "Fantasies",
                "href": "/video?c=78"
            },
            {
                "name": "Masturbation", "macro": "Practices",
                "href": "/video?c=22"
            },
            {
                "name": "Mature", "macro": "Appearance",
                "href": "/video?c=28"
            },
            {
                "name": "MILF", "macro": "Appearance",
                "href": "/video?c=29"
            },
            {
                "name": "Muscular Men", "macro": "Appearance",
                "href": "/video?c=512"
            },
            {
                "name": "Music", "macro": "Format",
                "href": "/video?c=121"
            },
            {
                "name": "Old/Young", "macro": "Fantasies",
                "href": "/video?c=181"
            },
            {
                "name": "Orgy", "macro": "Practices",
                "href": "/video?c=2"
            },
            {
                "name": "Parody", "macro": "Fantasies",
                "href": "/video?c=201"
            },
            {
                "name": "Party", "macro": "Fantasies",
                "href": "/video?c=53"
            },
            {
                "name": "Pissing", "macro": "Practices",
                "href": "/video?c=211"
            },
            {
                "name": "Pornstar", "macro": "Format",
                "href": "/categories/pornstar"
            },
            {
                "name": "POV", "macro": "Format",
                "href": "/video?c=41"
            },
            {
                "name": "Public", "macro": "Fantasies",
                "href": "/video?c=24"
            },
            {
                "name": "Pussy Licking", "macro": "Practices",
                "href": "/video?c=131"
            },
            {
                "name": "Reality", "macro": "Format",
                "href": "/video?c=31"
            },
            {
                "name": "Red Head", "macro": "Appearance",
                "href": "/video?c=42"
            },
            {
                "name": "Role Play", "macro": "Fantasies",
                "href": "/video?c=81"
            },
            {
                "name": "Romantic", "macro": "Fantasies",
                "href": "/video?c=522"
            },
            {
                "name": "Rough Sex", "macro": "Fantasies",
                "href": "/video?c=67"
            },
            {
                "name": "Russian", "macro": "Appearance",
                "href": "/video?c=99"
            },
            {
                "name": "School", "macro": "Fantasies",
                "href": "/video?c=88"
            },
            {
                "name": "Scissoring", "macro": "Practices",
                "href": "/video?c=532"
            },
            {
                "name": "SFW", "macro": "Format",
                "href": "/sfw"
            },
            {
                "name": "Small Tits", "macro": "Appearance",
                "href": "/video?c=59"
            },
            {
                "name": "Smoking", "macro": "Fantasies",
                "href": "/video?c=91"
            },
            {
                "name": "Solo Female", "macro": "Fantasies",
                "href": "/video?c=492"
            },
            {
                "name": "Solo Male", "macro": "Fantasies",
                "href": "/video?c=92"
            },
            {
                "name": "Squirt", "macro": "Practices",
                "href": "/video?c=69"
            },
            {
                "name": "Step Fantasy", "macro": "Fantasies",
                "href": "/video?c=444"
            },
            {
                "name": "Strap On", "macro": "Practices",
                "href": "/video?c=542"
            },
            {
                "name": "Striptease", "macro": "Fantasies",
                "href": "/video?c=33"
            },
            {
                "name": "Tattooed Women", "macro": "Appearance",
                "href": "/video?c=562"
            },
            {
                "name": "Teen", "macro": "Appearance",
                "href": "/categories/teen"
            },
            {
                "name": "Threesome", "macro": "Fantasies",
                "href": "/video?c=65"
            },
            {
                "name": "Toys", "macro": "Fantasies",
                "href": "/video?c=23"
            },
            {
                "name": "Trans Male", "macro": "Appearance",
                "href": "/video?c=602"
            },
            {
                "name": "Trans With Girl", "macro": "Fantasies",
                "href": "/video?c=572"
            },
            {
                "name": "Trans With Guy", "macro": "Fantasies",
                "href": "/video?c=582"
            },
            {
                "name": "Transgender", "macro": "Appearance",
                "href": "/transgender"
            },
            {
                "name": "Verified Couples", "macro": "Format",
                "href": "/video?c=482"
            },
            {
                "name": "Vintage", "macro": "Format",
                "href": "/video?c=43"
            },
            {
                "name": "Webcam", "macro": "Format",
                "href": "/video?c=61"
            }
        ];

        const retvalFormat = _.map(_.filter(categories, { macro: 'Format' }), function(e) {
            return { 'axis': e.name, value: MINIMUM, }; });
        const retvalFantasies = _.map(_.filter(categories, { macro: 'Fantasies' }), function(e) {
            return { 'axis': e.name, value: MINIMUM, }; });
        const retvalAppearance = _.map(_.filter(categories, { macro: 'Appearance' }), function(e) {
            return { 'axis': e.name, value: MINIMUM, }; });
        const retvalPractices = _.map(_.filter(categories, { macro: 'Practices' }), function(e) {
            return { 'axis': e.name, value: MINIMUM, }; });

        const yourcats = _.flatten(_.compact(_.map(data.recent, 'categories')));
        const yourordered = _.reverse(_.sortBy(_.map(_.countBy(yourcats), function(c, n) { return { c, n, } }), 'c'));

        renderPersonalRadar(retvalFantasies, '#radarFantasies', yourordered);
        renderPersonalRadar(retvalPractices, '#radarPractices', yourordered, 300);
        renderPersonalRadar(retvalFormat, '#radarFormat', yourordered, 300);
        renderPersonalRadar(retvalAppearance, '#radarAppearance', yourordered);
        $(".loader").hide();
    });
}

function renderPersonalRadar(retval, targetElement, yourordered, maxSize=500) {

    const factor = 5 / _.first(yourordered).c;
    const axes1 = _.map(retval, function(entry) {
        let presence = _.find(yourordered, { n: entry.axis });
        if(presence) {
            entry.value = ( factor * presence.c ) + MINIMUM;
        }
        else { // this is an hack to change least as possible in radarChart
            entry.axis = '_' + entry.axis;
        }
        return entry;
    });

    const monotop = [{
        name: "xxxx",
        axes: axes1,
    }, {
        name: "aaaa",
        axes: []
    }];

    var margin = {top: 100, right: 100, bottom: 100, left: 100},
        height = Math.min(maxSize, window.innerHeight - margin.top - margin.bottom - 20);
        width = height; // Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
            
    var color = d3.scaleOrdinal()
        .range(["#ffffff","#f98e05","#00A0B0"]);
        
    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: false,
        color: color,
        labelColor: '#f98e05',
        secondaryLabel: '#1b1b1b'
    };        

    // Call function to draw the Radar chart
    RadarChart(targetElement, monotop, radarChartOptions);
}

function updateProfileInfo(profile) {
    const publicKey = `${profile.publicKey}`;
    const userName = `${profile.p}`;
    const createdAt = new Date(`${profile.creationTime}`);
    const lastActivity = new Date(`${profile.lastActivity}`);
    const createdAtFormatted = createdAt.toUTCString();
    const lastActivityFormatted = lastActivity.toUTCString();

    $('#createdAtFormatted').text(createdAtFormatted);
    $('#accessToken').text(publicKey);
    $('#lastActivityFormatted').text(lastActivityFormatted);
    $('#user-name').text(userName);

    if (profile.tag) {
        $("#tag-name").text(profile.tag.name);
        $("#tag-badge").removeAttr('hidden');
        console.log('tag only ---', profile.tag);
    }
    console.log("profile display", profile);
}

let lastHomepageId = null;
function addHomePage(data, i) {
    const entry = $("#masterHome").clone();
    const computedId = `homepage-${data.id}`;
    entry.attr("id", computedId);
    $("#report").append(entry);

    if(lastHomepageId == data.metadataId)
        return;

    /* else, we should display the entry */
    lastHomepageId = data.metadataId;

    let newSectionHTML = "";
    _.each(data.sections, function(s,i ) {
        if(i == 0) {
            newSectionHTML = "<div class='col-12' style='border-bottom: 0.1px solid white;padding-top:10px;padding-bottom:10px'>" +
                '<span class="col-7" style="display:inline-block">' + 
                "<small>ACCESSED HOMEPAGE<b> ― " + data.relative + "</b></small>" +
                '</span>' + 
                '<span class="col-5" style="display:inline-block">' + "Selected producers " + '</span>' + 
                '</div>';
        }
        newSectionHTML += "<div class='col-12' style='border-bottom: 0.1px solid white'>";
        newSectionHTML += '<span class="col-7" style="display:inline-block;vertical-align:top;">' + s.display + '</span> <span class="col-4" style="display:inline-block">';
        _.each(s.videos, function(video, i) {
            newSectionHTML += ( video.authorName ?
                "<span style='background-color:#fa9900;border-radius:2px;margin-right:4px;margin-bottom:4px;color:white;padding:3px;display:inline-block;'>"
                + video.authorName +
                "</span>" : "<error>" 
            );
        })
        newSectionHTML += "</span>";
        newSectionHTML += "</div>";
        console.log(s.display, _.size(newSectionHTML));
    });

    $("#" + computedId).html(newSectionHTML);
    entry.removeAttr('hidden');
}

function printMessage(element, text, type) {
    if(!type) var type = 'danger';
    element.html('<p class="alert alert-' + type + ' mb-3">' + text + '</p>');
}

function createTag() { return manageTag('create'); }
function joinTag() { return manageTag('join'); }
function manageTag(action) {
    const pk = getPubKey();
    const error = $('#error');
    const resultDiv = $('#result');
    error.empty();
    resultDiv.empty();

    console.log("manageTag", action);

    const tag = $('#tag').val();
    const password = $("#password").val();
    const description = $("#description").val();
    const private = $("#private").is(':checked')

    /* in data we add the tag info to be sent */
    let data = {
        tag,
        password,
        description,
        accessibility: private ? 'private': 'public'
    };

    /* this was happening in development, maybe never happen in production */
    if( _.size(password) > 0 && data.accessibility == 'private')
        $("#group-password-wrapper").show();
    if( _.size(description) >  0 && action == 'create' )
        $("#description-block").show();

    /* validation */
    if(_.size(tag) == 0) {
        printMessage(error, 'Please, enter a tag name.');
        return;
    }

    if(action == 'create') {
        $("#description-block").show();
        if(_.size(description) == 0) {
            printMessage(error, 'Please add a description to the new tag');
            return;
        }
    } else {
        $("#description-block").hide();
        _.unset(data, 'description');
    }

    if(private) {
        $("#group-password-wrapper").show();
        if(_.size(password) < 8) {
            printMessage(error, 'Private tag require a password longer than 8 keys.');
            return;
        }
    } else {
        data.password = "";
        $("#group-password-wrapper").hide();
    }

    /* XHR section */
    let url = null;
    if(action == 'create')
        url = buildApiUrl(`profile/${pk}/tag`, null, 2);
    else /* action == 'update' */
        url = buildApiUrl(`profile/${pk}`, null, 2);

    console.log("Ready to ", action, tag, "via", url);

    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(function(response) {
        return response.json();
    }).then(function(result) {
        if(result.error == true) {
            console.log("Server side error:", result);
            printMessage(resultDiv, result.message);
        }
        else {
            updateProfileInfo(result.profile);
            printMessage(resultDiv, 'Tag "<b>' + result.group.name + '</b>" has been created', 'success');
        }
        return result;
    })
    .catch(function(e) {
        printMessage(error, "fail to communicate with the server");
        console.log(e.message);
    });
}

function downloadCSV() {
    const pk = getPubKey();
    const csvurl = serverWrap(`/api/v1/personal/${pk}/csv`);
    console.log("downloadCSV from: ", csvurl);
    window.open(csvurl);
}

function addPages(total, pages) {
    const ul = $('#pagination').find('ul');
    const pageString = pages.split('-').pop();
    const actualPage = pageString.slice(0, -1);

    ul.empty();
    if(total > 10) {
        var page;
        const pagesNumber = _.round(total / 10);
        // const description = `There are <b>${total}</b> evidences. Page <b>${actualPage}</b> of <b>${pagesNumber}</b>`;
        const description = `Page <b>${actualPage}</b> of <b>${pagesNumber}</b>`;
        $('#total-evidence').html(description);
        for (page = 1; page < pagesNumber + 1; page++) {
            let liStyle = '';
            let pageValue =  page + '0';
            if (pageValue == ( (_.parseInt(actualPage) || 0) + 1 ) + '0')  liStyle = ' red';
            ul.append('<li class="page-item"><a class="page-link' + liStyle + '" onclick="personal(' + pageValue + ', true)">'+ page +'</a></li>');
        }
    }
}

let lastMetadataId = null;
function addVideoRow(video, i) {
    const entry = $("#master").clone();
    const computedId = `video-${video.id}`;
    entry.attr("id", computedId);
    $("#report").append(entry);

    if(lastMetadataId == video.metadataId)
        return;
    /* else, we should display the entry */
    lastMetadataId = video.metadataId;

    console.log(i, video);
    $("#" + computedId + " .compare").attr('href', `/compare/#${video.videoId}`);
    let title = $("#" + computedId + " .compare").attr('title') + "«" + video.title + "»";
    $("#" + computedId + " .compare").attr('title', title);

    $("#" + computedId + " .producer").text(video.producer.name + ' [' + video.producer.type + ']');

    $("#" + computedId + " .related").attr('href', `/related/#${video.videoId}`);
    title = $("#" + computedId + " .related").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .related").attr('title', title);

    $("#" + computedId + " .author").attr('href', `/author/#${video.videoId}`);

    $("#" + computedId + " .delete").on('click', removeEvidence);
    $("#" + computedId + " .delete").attr('yttrex-id', `${video.id}`);
    title = $("#" + computedId + " .delete").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .delete").attr('title', title);

    $("#" + computedId + " .relative").text(video.relative);
    $("#" + computedId + " .title").text(video.title);
    $("#" + computedId + " .categories").text(video.categories.join(','));

    entry.removeAttr('hidden');
}

function removeEvidence(e) {
    const id = $(this).attr('yttrex-id');
    const pk = getPubKey();
    const deleteURL = buildApiUrl(`personal/${pk}/selector/id/${id}`, null, 2);
    console.log(deleteURL);
    return fetch(deleteURL, {
        method: 'DELETE',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer' // no-referrer, *client
    }).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(result) {
        const selectorId = `#video-${id}`;
        $(selectorId).fadeOut(300);
        console.log(result);
    });
}

function showPassword(status) {
    if( status == 'private') $('#group-password-wrapper').show();
    else $('#group-password-wrapper').hide();
}
