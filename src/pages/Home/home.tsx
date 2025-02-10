// import {style} from "./home.module.css"
import Header from "../../components/header/header"
import Produtos from "../../components/produtos/produtos"
import TextAnimation from "../../components/framer/Framer"
import Footer from "../../components/footer/Footer"

function Home() {
  return (
    <div>
        <Header/>
        <TextAnimation/>
        <Produtos/>
        <Footer/>
    </div>
  )
}

export default Home
