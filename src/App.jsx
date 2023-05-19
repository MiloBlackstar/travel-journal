import Data from "./Data"
import Navbar from "./compounds/navbar"
import Main from "./compounds/main-section"

export default function App() {

  const Places = Data.map(item => {
    return <Main key={item.id} item={item} />
  })

  return (
    <div className="page">
      <Navbar />
      {Places}
    </div> 
  )
}