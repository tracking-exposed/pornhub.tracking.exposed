function generateButtons() {

    if (window.location.origin.match(/localhost/)) {
        url='http://localhost:10000/api/v2/random';
        console.log("Development URL", url);
    } else {
        url='/api/v2/random';
        console.log("Production URL", url);
    }

    $.getJSON(url, function(data) {
        _.each(data, addButton);
        console.log("loaded", _.size(data), "users/buttons");
        $(".cause--refresh").click(radarRefresh);
        markDisabledButtons();
    });
};

function addButton(userInfo) {
    const entry = $("#master").clone();
    const computedId = `u-${userInfo.publicKey}`;
    entry.attr("id", computedId);
    $("#profiles").append(entry);

    const name = userInfo.p.replace(/-.*/, '');
    $(entry).attr('trexlab', name);
    entry.text(name);
    entry.removeAttr('hidden');
};

function markDisabledButtons() {
    $(".cause--refresh").removeAttr('disabled');
    const users = _.compact(getUsers());
    _.each(users, function(publicKey) {
        $('#u-' + publicKey).attr('disabled', true);
    });
}

function radarRefresh() {
    const id = $(this).attr('id').substr(2);
    const users = _.reverse(_.compact(getUsers()));
    if(_.size(users) == 2)
        users.pop();
    users.push(id);

    $('#u-' + id).text('Loading...');

    window.history.pushState(null, "pornhub compare game", "/compare/#" + users.join(','));
    console.log("updated href and marking the new publicKey as disabled buttons", name);
    markDisabledButtons();
    initializeRadar();
}

function getUsers() {
    const option = window.location.href.split('/#').pop();
    if(!option || _.size(option) < 30 ) {
        console.log("failed first integrity check", option);
        return [null, null];
    }
    const users = _.split(option, ',');
    try {
        if(_.size(users) != 2) {
            console.log("failed second integrity check", users);
            return [null, null];
        }
    } catch(e) {
        console.log("handled error in getUsers: ", e);
        return [ null, null ];
    }
    return users;
}

function initializeRadar() {
    // this function is invoke by 'public.js'

    const users = getUsers();

    if (window.location.origin.match(/localhost/)) {
        url='http://localhost:10000/api/v1/radar/' + users.join(',');
        console.log("Development URL", url);
    } else {
        url='/api/v1/radar/' + users.join(',');
        console.log("Production URL", url);
    }

    var margin = {top: 100, right: 100, bottom: 100, left: 100},
        width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
            
    var color = d3.scaleOrdinal()
        .range(["#ffffff","#f98e05","#00A0B0"]);
        
    var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 0.5,
      levels: 5,
      roundStrokes: true,
      color: color,
    };

    $.getJSON(url, function(data) {
    /* this is the format
         {axis:"Battery Life",value:0.22}, 
         {axis:"Brand",value:0.28},          */
        console.log("rendering radar graph with", data, 'from', users);
        RadarChart(".radarChart", data.tops, radarChartOptions);

        const potentialLabel1 = $('#u-' + users[0]).attr('trexlab');
        if(_.size(potentialLabel1))
            $('#u-' + users[0]).text(potentialLabel1);

        const potentialLabel2 = $('#u-' + users[1]).attr('trexlab');
        if(_.size(potentialLabel2))
            $('#u-' + users[1]).text(potentialLabel2);
    });
};