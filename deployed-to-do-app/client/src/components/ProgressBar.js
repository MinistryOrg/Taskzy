const ProgressBar = ({ progress }) => {
  const colors = [
    '#ffd49c',
    '#f79b8d',
    '#4176d7',
    '#5EC793',
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  console.log(randomColor)

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: randomColor }}
      ></div>
    </div>
  )
}

export default ProgressBar
