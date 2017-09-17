<template>
    <div id="app">
        <h1 class="page-header">Fristenkasten.de</h1>
        <p class="intro-text">
            So viele Abschlussarbeiten, so wenig Zeit! Da kann man schonmal den Überblick verlieren.
            Dagegen hilft jetzt Fristenkasten.de! Alle Abschlussarbeiten im handlichen Überblick.
        </p>
        <fk-countdown v-for="e in events" v-bind:event="e" v-bind:key="e.name"></fk-countdown>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                events: [],
                response: ''
            }
        },
        created() {
            const apiurl = 'https://www.googleapis.com/calendar/v3/calendars/'
            const calendarid = 'rglaeklvfaqil7mr0cgt7g6k9o@group.calendar.google.com'
            const apikey = 'AIzaSyClWoaRWkxfwxicbclPz054p-9mnH_5d94'
            const url = apiurl + calendarid + '/events?key=' + apikey

            axios.get(url).then(resp => {
                this.response = resp
                this.processResponse()
            })
        },
        methods: {
            processResponse() {
                let r = this.response

                r.data.items.map(e => {
                    this.events.push({
                        name: e.summary,
                        date: new Date(e.start.date)
                    })
                })

                this.events.sort((a, b) => {
                    return a.date - b.date
                })
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Damion');

    body {
        background-color: rgb(42, 57, 75);
    }

    .page-header {
        color: white;
        margin: 0;
        font-size: 10vw;
        text-align: center;
        font-family: Damion;

        @media(min-width: 800px) {
            font-size: 800px * 0.1;
        }
    }

    .intro-text {
        font-family: Roboto;
        color: white;
        text-align: center;
        line-height: calc(100% + 1vw);
        margin-bottom: 50px;
        font-size: calc(12px + .5vw);
    }

    #app {
        max-width: 800px;
        margin: 0 auto;
    }

</style>
