// import Ban from '../images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='one w-full h-[550px] my-12 rounded-2xl text-white flex flex-col items-center justify-center text-center space-y-5' >
           
                <h2 className='text-[52px] font-bold'>Discover an exceptional cooking <br /> class  tailored for you!</h2>
                <p className='w-3/6 mx-auto'>Golden, juicy chicken coated in a simple creamy sauce with tomatoes, garlic, and thyme. I love this with mashed potatoes and a salad! This is just so good</p>
                <div className='flex justify-center gap-4'>
                    <button className='btn bg-[#0BE58A] text-black border-0 rounded-full text-xl'>Explore Now</button>
                    <button className='btn text-xl border-white rounded-full  btn-outline text-white'>Our Feedback</button>
                </div>
            
        </div>
    );
};

export default Banner;