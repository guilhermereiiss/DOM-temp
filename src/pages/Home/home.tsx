// import {style} from "./home.module.css"
import Header from "../../components/header/header"
import Produtos from "../../components/produtos/produtos"
import TextAnimation from "../../components/framer/Framer"
function Home() {
  return (
    <div>
        <Header/>
        <TextAnimation/>
        <Produtos/>
    </div>
  )
}

export default Home
