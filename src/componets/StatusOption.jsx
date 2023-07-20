
function StatusOption({ fontSizeText, colorText, option, colorOption, widthBand }) {
  return (
    <p className={`m-0 p-1`} >
      <span className={`fw-bolder m-0 p-1 px-3 text-${colorText} bg-${colorOption}`}
        style={{ fontSize: fontSizeText, width: widthBand, borderRadius: "16px" }}>
        {option}
      </span>
    </p>
  )
}

export default StatusOption