export const getDate = (date) => {
    const sana = new Date(date)
    const day = sana.getDay()
    const month = sana.getMonth()
    const year = sana.getFullYear()
    const hour = sana.getHours()
    const minute = sana.getMinutes()
    return `${day}.${month}.${year}   ${hour}:${minute}` //23:20
}
