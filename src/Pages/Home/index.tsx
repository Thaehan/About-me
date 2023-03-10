const renderBody = () => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(<div className="container">Dat do da den day</div>)
  }
  return arr
}

export default function HomePage() {
  return (
    <div className="container">
      {renderBody().map((item) => {
        return item
      })}
    </div>
  )
}
