import AboutUs from '@/components/aboutUs/aboutus'
import Footer from '@/components/footer/footer'
import Gallery from '@/components/galerry/galery'
import Menu from '@/components/menu/menu'
import Navbar from '@/components/navbar/navbar'
import Rez from '@/components/rez/rez'
import SliderComp from '@/components/slider/slider'

export default function Home() {
  return (
    <>
      <Navbar/>
      <SliderComp/>
      <AboutUs/>
      <Menu/>
      <Gallery/>
      <Rez/>
      <Footer/>
    </>
  )
}
