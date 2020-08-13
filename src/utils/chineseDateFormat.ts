export const getChineseDateTimeFormat = (date: Date) => {
  return `${[date.getFullYear(), date.getMonth(), date.getDay()].join("-")} ${[
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ].join(":")}`;
};
