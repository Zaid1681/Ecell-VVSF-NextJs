// import Styles from "./Hero.module.css";
// import { Link } from 'react-router';

export default function MainHero() {
  const myStyle1 = {
    backgroundImage: `url("/headerBg11.jpg")`,
    height: "100%",
  };
  return (
    <main id="hero">
      <div className="bg-[url('/headerBg11.jpg')] min-h-screen	 bg-hero bg-no-repeat bg-cover bg-center bg-fixed gap-10 ">
        <div>
          <div className="mx-auto max-w-6xl   px-6 lg:px-8">
            <div className="py-5 w-100">
              <h4 className="lg:text-2xl  sm:text-xl text-center" style={{ color: "yellow" }}>
                Celebriting Golden Jublie Of Vidyavardhini's College Of Engineering
                And Technology Trust's
              </h4>
            </div>
            <div className="m-auto relative   max-w-2xl text-center">
              <div className=" justify-center ">
                <div className=" flex lg:gap-x-24 gap-x-20 py-2  items-center justify-around lg:h-35 sm:h-25     text-white ">
                  {/* <a href=""> */}
                  <img
                    className="sm:h-[6rem] pl-10 m-auto h-[4rem] lg:h-20"
                    src="/wb.png"
                  />
                  {/* </a> */}
                  {/* <h1 className="text-3xl px-3 mr-5 ">&</h1> */}

                  <img
                    className="relative h-[3.3rem] sm:h-[6rem] m-auto  lg:h-20 lg:mr-8"
                    src="/ecell_logo.png"
                  />
                </div>
              </div>
            </div>
            {/* <h1 className="h-full py-2 pr-4 text-white text-4xl text-center">
Presents!!</h1> */}
            <div className="">
              <p
                style={{ color: "#D4D4D4" }}
                className="lg:text-[1.4rem]  text-[1.4rem]  sm:text-[1.2rem] m-0  text-center items-center "
              >
                Presents
              </p>
            </div>
            <div className="m-auto flex sm:flex-row  justify-center items-center">
              <img
                className="lg:h-[20rem]   sm:h-[16rem] align-center "
                src="/vvsf.png"
              ></img>
            </div>
            <div className="flex sm:flex-row flex-col sm:mt-[-4rem] lg:mt-[-8rem]  align-center justify-between pt-6  md:gap-[15rem] 	">
              {/* <img className="md:h-80 sm:h-50" src="/vvsf.png"></img> */}
              <div className="flex flex-col items-center ">
                <h3 className="lg:text-2xl text-2xl sm:text-2xl px-3  tracking-wider  py-4 text-white text-center">
                  Title Sponser
                </h3>
                <a href="https://learn10x.org/" target="_blank">
                  <img src="/learn10xNew.png" className="  h-[4rem] lg:h-[4rem] sm:h-[3rem] sm:h-[2rem]" />
                </a>
              </div>
              <div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="lg:text-2xl text-2xl sm:text-2xl  text-center items-center  px-3 tracking-widest	 py-4 indent-6 text-white">
                    Powered By{" "}
                  </h3>
                  <a href="https://learn10x.org/" target="_blank">
                    <img src="/stack.png" className="lg:h-[4rem] h-[4rem]  sm:h-[3rem]" />
                  </a>
                </div>
              </div>
            </div>
            {/* <h1 className="h-full pr-4 text-white text-xl text-center text-yellow-500 ">
              Vasai Virar Startup Fest
            </h1> */}
          </div>
        </div>
      </div>
    </main>
  );
}
