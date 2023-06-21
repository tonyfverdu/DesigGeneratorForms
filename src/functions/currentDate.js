function currentDate() {
  const date = new Date()
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  const sekunden = date.getSeconds().toString()
  const minuten = date.getMinutes().toString()
  const uhr = date.getHours().toString()

  const DD_MM_YYYY = day + "-" + month + "-" + year
  const HH_MM_SS = uhr + ":" + minuten + ":" + sekunden

  return (
    {
      Date_DD_MM_YY: DD_MM_YYYY,
      Time_HH_MM_SS: HH_MM_SS
    }
  )
}

export default currentDate;