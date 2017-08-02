function getTimeDifference(d) {
    let timeRemaining = d.getTime() - Date.now() + 1000*60*60*24 - 1000*60*60*2

    let seconds = Math.floor((timeRemaining / 1000) % 60);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));


    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}

function repaintList(events) {
    events.sort((a, b) => {
        return a.date - b.date
    })

    $('div#events').empty()

    events.map(e => {

        let diff = getTimeDifference(e.date)

        $('div#events').append(
            '<div class="row"> ' +
            '<div class="col-xs-3"><h4 class="name">' + e.name + '</h4></div> ' +
            '<div class="col-xs-9"><h4 class="time">' +diff.days + ' Tage ' + diff.hours + ' Stunden ' + diff.minutes + ' Minuten ' + diff.seconds + ' Sekunden</h4></div>' +
            '</div>'
        )
    })
}

function updateEventsList(response) {

    let events = []
    response.items.map(e => {
        events.push({name: e.summary, date: new Date(e.start.date)})
    })

    repaintList(events)
    setInterval(() => { repaintList(events) }, 1000)
}

$(document).ready(function () {
    console.log("Starting")

    const mykey = 'AIzaSyClWoaRWkxfwxicbclPz054p-9mnH_5d94';
    const calendarid = 'rglaeklvfaqil7mr0cgt7g6k9o@group.calendar.google.com';

    $.ajax({
        type: 'GET',
        url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarid + '/events?key=' + mykey),
        dataType: 'json',
        success: updateEventsList,
        error: function (response) {
            console.log(response)
        }
    });

});