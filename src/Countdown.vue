<template>
    <div class="timer">

        <div class="block name">
            <p class="text"><b>{{ event.name }}</b></p>
        </div>

        <div class="block">
            <p class="digit">{{ timeDifference.days }}</p>
            <p class="text">Tage</p>
        </div>
        <div class="block">
            <p class="digit">{{ timeDifference.hours }}</p>
            <p class="text">Stunden</p>
        </div>
        <div class="block">
            <p class="digit">{{ timeDifference.minutes }}</p>
            <p class="text">Minuten</p>
        </div>
        <div class="block">
            <p class="digit">{{ timeDifference.seconds }}</p>
            <p class="text">Sekunden</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                now: Date.now()
            }
        },
        props: ['event'],
        created() {
            let self = this
            setInterval(function() {
                self.now = Date.now()
            }, 1000)
        },
        computed: {
            timeDifference() {
                let d = this.event.date
                // target time - current time + 24h - 2h for the timezone error
                let timeRemaining = d.getTime() - this.now + 1000 * 60 * 60 * 24 - 1000 * 60 * 60 * 2

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
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

    .timer {
        //border: 1px solid red;

        display: flex;
        flex-direction: row;

        font-size: calc(16px + .5vw);

        border-top: 1px solid grey;

        padding-top: 15px;
        padding-bottom: 15px;

        p {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
    .block {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: auto;


        align-items: center;

    }
    .name {
        flex-grow: 3;
        align-self: center;
        width: .3vw;
        font-size: calc(15px + 2vw);
    }
    .text {
        //border: 1px solid red;

        color: #1abc9c;
        font-family: 'Roboto Condensed', serif;
        font-weight: 40;
    }

    .digit {
        //border: 1px solid red;

        color: #ecf0f1;
        font-weight: 100;
        font-family: 'Roboto', serif;


    }

</style>
