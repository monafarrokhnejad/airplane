import moment from "moment-timezone";
import { DEFAULT_DATE } from "~/utilities/dateFormat";

export const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
export const LOS_ANGELES_ZONE = "America/Los_Angeles";

export const convertTime = ({ date, timeZone = userTimeZone, format = DEFAULT_DATE }) => {
  return moment(date).tz(timeZone).format(format);
};

export const getToday = () => moment().tz(userTimeZone).format();

export const calcStartDate = ({ endDate, diffInDays, format, timeZone = userTimeZone }) =>
  moment(endDate).tz(timeZone).clone().subtract(diffInDays, "days").format(format);

export const diffInDays = ({ endDate, startDate, timeZone = userTimeZone }) =>
  moment(endDate).tz(timeZone).diff(moment(startDate).tz(timeZone), "days");
