import * as moment from 'moment';

export function getTime() : string{
    const format: string = "YYYY-MM-DD"
    var date: Date = new Date();
    var dateTime: string = moment(date).format(format);
    return dateTime;
}