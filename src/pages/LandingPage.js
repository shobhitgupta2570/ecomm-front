import Banner from '../components/Banner';
import Categories from '../components/Categories';
import CouponByCategories from '../components/CouponByCategories';
import DealsOfTheDay from '../components/DealsOfTheDay';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import Menu from '../components/Menu';
import Offer from '../components/Offer';
import PopularMembership from '../components/PopularMembership';
import PopularProducts from '../components/PopularProducts';
import Subscribe from '../components/Subscribe';

export default function landingPage() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      <DealsOfTheDay></DealsOfTheDay>
      <CouponByCategories></CouponByCategories>
      <Offer></Offer>
      <PopularMembership></PopularMembership>
      <Subscribe></Subscribe>
      <HowItWorks></HowItWorks>
      <Categories></Categories>
      <Footer></Footer>
    </div>
  )
}
