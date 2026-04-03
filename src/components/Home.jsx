
import { NavLink } from "react-router";
import TrendingApps from "./TrendingApps";

const Home = () => {
    return (
        <div className='bg-gray-50'>
          <section className='text-center items-center mx-auto w-11/12 md:pt-10 pt-5'>
            <h1 className='text-4xl font-bold text-black'>We Build  <br /><span className='gradient-text'>Productive</span> Apps</h1>
            <p className='md:mx-10 lg:mx-20 my-4 md:my-8 text-gray-600'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-5 pb-5'>
                <a href="https://play.google.com/store/games?device=windows" className='btn btn-outline text-black px-5 font-semibold border-gray-700 hover:bg-purple-500'><img className='w-7 h-8' src="/src/assets/icons8-google-play-48.png" alt="" /> Google Play</a>
                <a href="https://www.apple.com/app-store/" className='btn btn-outline text-black px-5 font-semibold border-gray-700 hover:bg-purple-500'><img className='w-7 h-8' src="/src/assets/icons8-app-store-48.png" alt="" /> App store</a>
            </div>
            </section>  
            {/* second section */}
            <section>
<div className='flex justify-center'>
    <img className='w-1/2 text-center items-center' src="/src/assets/hero.png" alt="" />
</div>
<div className='gradient-bg text-center items-center px-[30%] py-5 md-py-8'>
<h1 className='font-semibold text-xl text-white'>Trusted by Millions, Built for You</h1>


{/* three card */}
<div className='md:flex justify-center text-center items-center md:gap-10 lg:gap-20 my-8'>
<div className="card text-white text-center items-center my-5">
    <h6 className='text-sm'>Total Downloads</h6>
    <h1 className='text-3xl font-bold'>29.6M</h1>
    <p className='text-sm'>21% more than last month</p>
</div>
<div className="card text-white text-center items-center my-5">
    <h6 className='text-sm'>Total Reviews</h6>
    <h1 className='text-3xl font-bold'>906K</h1>
    <p className='text-sm'>46% more than last month</p>
</div>
<div className="card text-white text-center items-center my-5">
    <h6 className='text-sm'>Active Apps</h6>
    <h1 className='text-3xl font-bold'>132+</h1>
    <p className='text-sm'>31 more will Launch</p>
</div>

</div>
</div>
            </section>


                        {/* trending apps section */}
                        <section className='text-center items-center w-11/12 mx-auto'>
                            <div className='my-10 mx-auto'>
                                <h1 className='text-black text-xl font-bold mb-2'>Trending Apps</h1>
                                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                            </div>
                            <TrendingApps />
                        </section>
                         <div className='mx-auto items-center text-center'>
                <NavLink to="/apps" className='btn gradient-bg border-none px-10 my-5'>Show All </NavLink>
            </div>
        </div>
    );
};

export default Home;