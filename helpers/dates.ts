const getOffsetArr = (items: number) => {
  return Array.from({ length: items }, () => null)
}

export const getMonthGridData = (month: number, year: number) => {
  const daysArr = [];
  const total = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= total; i++) {
    const date = new Date(year, month, i);

    daysArr.push({
      date,
      day: i,
      weekday: date.getDay(), // 0 = Sunday
    });
  }

  // Get initial offset
  const initialWeekDay = daysArr[0].weekday;
  const initialOffsetArr = getOffsetArr(initialWeekDay);

  const finalWeekDay = daysArr[daysArr.length - 1].weekday;
  const finalOffsetArr = finalWeekDay != 6 ? getOffsetArr(6 - finalWeekDay) : [];

  daysArr.unshift(...initialOffsetArr);
  daysArr.push(...finalOffsetArr)

  return daysArr;
}