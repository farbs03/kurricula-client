export default function formatTime (time) {

    let afternoon = false

    let mins = `${time % 60}`
    if(mins < 10) {
        mins = `0${mins}`
    }
    let hours = `${(time - mins) / 60}`

    if(hours > 12) {
        afternoon = true
        hours = `${hours - 12}`
    }

    return `${hours}:${mins} ${afternoon ? ' PM' : ' AM'}`
}