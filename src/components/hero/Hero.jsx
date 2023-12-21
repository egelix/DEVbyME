import CounterElement from "./CounterElement";
import bgLight from "../../assets/Hero/HeroLight.jpg";
import bgDark from "../../assets/Hero/HeroDark.jpg"
import coverTomatoe from "../../assets/Hero/Tomatoe.png"

function Hero({ language, darkMode }) {

  return (
    <section
      id="hero-section"
      style={{ backgroundImage: `url(${darkMode ? bgDark : bgLight})` }}
      className="relative lg:pl-24 bg-cover bg-right-bottom bg-fixed pt-16 flex items-center justify-center lg:justify-normal min-h-screen "
    >
      {/* <div 
      style={{ backgroundImage: `url(${coverTomatoe})` }}
      className="absolute top-0 left-0 w-screen md:min-h-screen bg-cover bg-right-bottom bg-fixed z-10"
      ></div> */}
      <div className="w-[90%] h-max-[90%] p-4 my-6 bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl md:min-w-[70vh] md:min-h-[70vh]  dark:bg-black/30 text-zinc-200">
        <div>
          <h1>Martin Egert</h1>
          <h2 className="pl-1 pt-1 md:pl-2">Full Stack Developer</h2>
          <hr className="border-b-2 border-zinc-200 shadow-sm shadow-black mt-6 ml-1 w-[70%]" />
        </div>
        <div className="w-full pl-2 ">
          <div className="inline md:grid md:grid-cols-2 mt-6">
            <div>
              <CounterElement
                label={language === "english" ? "years of navigating the www" : "Jahre im Internet unterwegs"}
                end={27}
                duration={3}
                delay={1}
              />
            </div>
            <div>
              <CounterElement
                label={language === "english" ? "accounts on servers all over the globe" : "Accounts auf Servern, verteilt über den ganzen Planeten"}
                end={743}
                duration={3}
                delay={1}
              />
            </div>
            <div>
              <CounterElement
                label={language === "english" ? "dev projects contributed to" : "Projekten beigesteuert"}
                end={153}
                duration={3}
                delay={1}
              />
            </div>
            <div>
              <CounterElement
                label={language === "english" ? "First Number" : "Erste Nummer"}
                end={100}
                duration={3}
                delay={1}
              />
            </div>
            <div className="mt-4 col-span-2 mb-6">
              <CounterElement
                label={language === "english" ? "random and very roughly estimated numbers to get your attention" : "willkürliche und sehr grob geschätzte Zahlen um Neugierde zu wecken"}
                end={4}
                duration={2}
                delay={4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
