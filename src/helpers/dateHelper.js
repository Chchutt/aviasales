export function dateHelper (segments, duration) {
  const timeTo = segments.split('T')[1].slice(0, 5)
  const fullTimeDuration = duration / 24
  const dataHours = timeTo.slice(0, 2)
  const dataMinutes = timeTo.slice(3, 5)
  const hours = Math.trunc(fullTimeDuration)
  const minutes = (Math.trunc((fullTimeDuration % hours) * 100))
  const updateHours = +hours + +dataHours
  const updatedMinutes = +dataMinutes + +minutes
  if (+updateHours > 23 || +updatedMinutes > 59) {
    const moreHours = Math.trunc(updatedMinutes / 60)
    const freshHours = Math.trunc((updateHours + moreHours) % 24)
    const freshMinutes = updatedMinutes % 60
    if (freshHours < 10 && freshMinutes < 10) {
      return `0${freshHours}:0${freshMinutes}`
    }
    if (freshHours < 10) {
      return `0${freshHours}:${freshMinutes}`
    }
    if (freshMinutes < 10) {
      return `${freshHours}:0${freshMinutes}`
    }
    return `${freshHours}:${freshMinutes}`
  }
  return `${updateHours}:${updatedMinutes}`
}

export function durationToTime (duration) {
  const fullTime = duration / 24
  const hours = Math.trunc(fullTime)
  const minutes = (Math.trunc((fullTime % hours) * 100))
  if (+hours > 23 || +minutes > 59) {
    const moreHours = Math.trunc(minutes / 60)
    const freshHours = Math.trunc((hours + moreHours))
    const freshMinutes = minutes % 60
    if (freshHours < 10 && freshMinutes < 10) {
      return `0${freshHours}ч ${freshMinutes}м`
    }
    if (freshHours < 10) {
      return `0${freshHours}ч ${freshMinutes}м`
    }
    if (freshMinutes < 10) {
      return `${freshHours}ч ${freshMinutes}м`
    }
    return `${freshHours}ч ${freshMinutes}м`
  }
  return `${hours}ч ${minutes}м`
}
