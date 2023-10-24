
function timeWord(time) {

    let result;
    let gap = ''
    let middle = ''
    let firstHalf = time.slice(0, 2)
    let timeOfDay;

    if (firstHalf.startsWith('0')) {
        timeOfDay = 'am'

    } else if (firstHalf.startsWith('1') && firstHalf !== '11' && firstHalf !== '12') {
        timeOfDay = 'pm'
    }

    let secHalf = time.slice(-2)
    let counter = 0;
    let counter2 = 0;
    let arrayFirstHalf = []
    let arraySecHalf = []

    for (let i = 0; i < 24; i++) {
        counter++;

        let string = counter.toString()

        let fullValFirstHalf = '0' + string

        if (fullValFirstHalf.length === 3) {
            fullValFirstHalf = fullValFirstHalf.slice(1)
        }

        arrayFirstHalf.push(fullValFirstHalf)
    }


    for (let i = 0; i < 59; i++) {
        counter2++;

        let string2 = counter2.toString()

        let fullValSecHalf = '0' + string2


        if (fullValSecHalf.length === 3) {
            fullValSecHalf = fullValSecHalf.slice(1)
        }

        arraySecHalf.push(fullValSecHalf)
    }



    const [oneam, twoam, threeam, fouram, fiveam, sixam, sevenam, eightam, nineam, tenam, elevenam,
        twelveam, onepm, twopm, threepm, fourpm, fivepm, sixpm, sevenpm,
        eightpm, ninepm, tenpm, elevenpm] = arrayFirstHalf

    const timeFirstHalf = {
        oneam, twoam, threeam, fouram, fiveam, sixam, sevenam, eightam, nineam, tenam, elevenam,
        twelveam, onepm, twopm, threepm, fourpm, fivepm, sixpm, sevenpm,
        eightpm, ninepm, tenpm, elevenpm
    }

    Object.keys(timeFirstHalf).forEach((ke) => {
        timeFirstHalf[timeFirstHalf[ke]] = ke.slice(0, -2);
    })

    let start = timeFirstHalf[firstHalf]


    const [one, two, three, four, five, six, seven, eight, nine, ten, eleven,
        twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen,
        twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix,
        twentyseven, twentyeigth, twentynine, thirty, thirtyone, thirtytwo, thirtythree,
        thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, fourty,
        fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive, fourtysix, fourtyseven,
        fourtyeight, fourtynine, fifty, fiftyone, fiftytwo, fiftythree, fiftyfour,
        fiftyfive, fiftysix, fiftyseven, fiftyeight, fiftynine
    ] = arraySecHalf;

    const timeObjSecHalf = {
        one, two, three, four, five, six, seven, eight, nine, ten, eleven,
        twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen,
        twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix,
        twentyseven, twentyeigth, twentynine, thirty, thirtyone, thirtytwo, thirtythree,
        thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, fourty,
        fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive, fourtysix, fourtyseven,
        fourtyeight, fourtynine, fifty, fiftyone, fiftytwo, fiftythree, fiftyfour,
        fiftyfive, fiftysix, fiftyseven, fiftyeight, fiftynine
    }

    Object.keys(timeObjSecHalf).forEach((k) => {
        timeObjSecHalf[timeObjSecHalf[k]] = k;

    })

    if (firstHalf > 23) {
        firstHalf = '23'
    }


    if (firstHalf === '00' && time !== '00:00') {
        let firstResHalf = 'twelve'
        start = 'twelve'
    }

    let end = timeObjSecHalf[secHalf]

    if (secHalf === '00' && time !== '12:00' && time !== '00:00') {
        end = `o'clock`
    }



    if (time[3] === '0' && time[4] !== '0') {
        middle = 'oh'
    }

    if (middle) {
        gap = ' '
    }

    if (firstHalf >= '12') {
        timeOfDay = 'pm'
    }


    if (firstHalf === '10' || firstHalf === '11') {
        timeOfDay = 'am';

    }

    if (end) {
        if (end.startsWith('twenty') || end.startsWith('thirty') || end.startsWith('fourty')) {
            end = end.substring(0, 6) + " " + end.substring(6);
        } else if (end.startsWith('fifty')) {
            end = end.substring(0, 5) + " " + end.substring(5);
        } else {
            end = end
        }
    }


    result = start + gap + middle + ' ' + end + ' ' + timeOfDay;

    if (time === '12:00') {
        result = 'noon'
    }
    if (time === '00:00') {
        result = 'midnight'
    }
    console.log(result)

    return result;
}

timeWord('00:00')       //midnight
timeWord('00:12')       //twelve twelve am
timeWord('01:00')       //one o'clock am
timeWord('06:01')       //six oh one am
timeWord('06:10')       //six ten am  
timeWord('06:18')       //six eighteen am
timeWord('06:30')       //six thirty am
timeWord('10:34')       //ten thirty four am
timeWord('12:00')       //noon
timeWord('12:09')       //twelve oh nine pm
timeWord('23:23')       //eleven twenty three pm



module.exports = timeWord;