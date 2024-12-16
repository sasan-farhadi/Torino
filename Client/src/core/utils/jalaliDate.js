import { toJalaali } from "jalaali-js"
import { e2p } from "./number"

const jalali = (date) => {
    const { jy, jd, jm } = toJalaali(new Date(date))
    const newDate = `${e2p(jy)}/${e2p(jm)}/${e2p(jd)}`
    return newDate
}

const dateCalc = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const differenceInMilliseconds = endDate - startDate;

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    return differenceInDays
}


export { jalali, dateCalc }