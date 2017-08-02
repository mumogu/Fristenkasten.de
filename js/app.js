const apikey = 'AIzaSyClWoaRWkxfwxicbclPz054p-9mnH_5d94';
const calendarid = 'rglaeklvfaqil7mr0cgt7g6k9o@group.calendar.google.com';
const apiurl = 'https://www.googleapis.com/calendar/v3/calendars/'

new Vue({
    el: '#app',
    data: {
        rawEvents: undefined,
        events: []
    },
    ready: function () {
        this.fetchEvents()
    },
    methods: {
        fetchEvents: function () {
            let xhr = new XMLHttpRequest()
            let self = this
            xhr.open('GET', apiurl + calendarid + '/events?key=' + apikey)
            xhr.onload = function () {
                self.rawEvents = JSON.parse(xhr.responseText)
                self.parseEvents()
            }
            xhr.send()
        },
        parseEvents: function () {
            let self = this

            self.rawEvents.items.map(function (e) {
                self.events.push({name: e.summary, date: new Date(e.start.date)})
            })

        },
        getTimeDifference: function (d) {
            let timeRemaining = d.getTime() - Date.now() + 1000 * 60 * 60 * 24 - 1000 * 60 * 60 * 2

            let seconds = Math.floor((timeRemaining / 1000) % 60);
            let minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
            let hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

            return {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        }
    }
})