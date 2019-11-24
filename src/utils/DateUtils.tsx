import moment from 'moment';

export function getPostWritedDate(writedDate: Date) {
  const currentDateTime = moment();
  const momentWritedDate = moment(writedDate);

  const year = moment.duration(currentDateTime.diff(momentWritedDate)).years();
  const month = moment
    .duration(currentDateTime.diff(momentWritedDate))
    .months();
  const day = moment.duration(currentDateTime.diff(momentWritedDate)).days();
  const hour = moment.duration(currentDateTime.diff(momentWritedDate)).hours();
  const minute = moment
    .duration(currentDateTime.diff(momentWritedDate))
    .minutes();

  const isHourAgo =
    moment.duration(currentDateTime.diff(momentWritedDate)).asHours() < 1;

  if (isHourAgo) {
    return `${minute}분전 콘텐츠가 공유 되었습니다`;
  }

  const isDayAgo =
    moment.duration(currentDateTime.diff(momentWritedDate)).asDays() < 1;

  if (isDayAgo) {
    return `${hour}시간전 콘텐츠가 공유 되었습니다`;
  }

  const isMonthAgo =
    moment.duration(currentDateTime.diff(momentWritedDate)).asMonths() < 1;

  if (isMonthAgo) {
    return `${day}일전 콘텐츠가 공유 되었습니다`;
  }

  const isYearAgo =
    moment.duration(currentDateTime.diff(momentWritedDate)).asYears() < 1;

  if (isYearAgo) {
    return `${month}달전 콘텐츠가 공유 되었습니다`;
  }

  return `${year}년전 콘텐츠가 공유 되었습니다`;
}
