import Footer from '@Components/Footer'
import NavBar from '@Components/NavBar/NavBar'
import '@Assets/Scss/pageLayout.scss'

const renderBody = () => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(<div>Dat do da den day</div>)
  }
  return arr
}

export default function HomeScreen() {
  return (
    <>
      {/**Header */}
      <NavBar />

      {/**Body */}
      <div className="container">
        {renderBody().map((item) => {
          return item
        })}
      </div>

      {/**Footer */}
      <Footer />
    </>
  )
}
