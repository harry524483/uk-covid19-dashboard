import moment from 'moment';

const formatDate = (date: string) => moment(date).format('Do MMM YY HH:mm:ss');

export default formatDate;
