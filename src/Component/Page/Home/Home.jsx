import Banner from './Banner/Banner'
import HealthService from './HealthService/HealthService'
import HealthProgram from './HealthProgram/HealthProgram'
import HealthCard from './HealthCard/HealthCard';
import BannerTwo from './Banner/BannerTwo';

const Home = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Banner />
      <HealthService />
      <HealthProgram />
      <HealthCard />
      <BannerTwo />
    </div>
  );
};

export default Home;
