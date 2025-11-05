import { Link } from "react-router-dom";
import Shop from "./Shop";

function Home() {
  
  return (
    <div className="bg-slate-50 md:pl-10 md:pr-10 pt-20">
      <section id="hero" className="section-p1">
        <div className="banner">
          {/* <video autoplay muted loop src="videoimg/vid4.mp4"></video> */}
          <img src="/videoimg/vd2.jpg" alt="" className="w-full" />
        </div>
      </section>
      <section
        id="collection"
        className="flex flex-col items-center justify-center w-full sm:pl-24 sm:pr-24 pt-20"
      >
        <Shop/>
        <div className="flex justify-end w-full">
          <Link to="/product" className="rounded-md hover:bg-slate-700 bg-slate-500 text-white font-bold pl-5 pr-5 pt-2 pb-2">
            view all <i className="ri-arrow-right-long-line"></i>
          </Link>
        </div>
      </section>

      

      <section id="banner" className="mt-10">
        <div className="flex">
          <img src="/videoimg/wh2.jpg" alt="" className="w-[50%] h-[500px]" />
          <img src="/videoimg/wh16.jpg" alt="" className="w-[50%] h-[500px]" />
        </div>
      </section>
    </div>
  );
}

export default Home;
