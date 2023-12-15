import CounterElement from "./CounterElement";
import bgLight from "../../assets/Hero/HeroLight.jpg";
import bgDark from "../../assets/Hero/HeroDark.jpg"
import coverTomatoe from "../../assets/Hero/Tomatoe.png"

function Hero({ darkMode }) {
  //const [counterFinished, setCounterFinished] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCounterFinished(true);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section
      id="hero-section"
      style={{ backgroundImage: `url(${darkMode ? bgDark : bgLight})` }}
      className="relative lg:pl-24 bg-cover bg-right-bottom bg-fixed pt-16 flex items-center justify-center lg:justify-normal md:min-h-screen "
    >
      <div 
      style={{ backgroundImage: `url(${coverTomatoe})` }}
      className="absolute top-0 left-0 w-screen md:min-h-screen bg-cover bg-right-bottom bg-fixed z-10"
      ></div>
      <div className="w-[90%] h-max-[90%] p-4 my-6 bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl md:min-w-[70vh] md:min-h-[70vh]  dark:bg-black/30 text-zinc-200">
        <div>
          <h1>Martin Egert</h1>
          <h2 className="pl-1 pt-1 md:pl-2">Full Stack Developer</h2>
          <hr className="border-b-1 border-black mt-4 w-[70%]" />
        </div>
        <div className="w-full pl-2 ">
          <div className="inline md:grid md:grid-cols-2 mt-6">
            <div>
              <CounterElement
                label={"First Number"}
                end={100}
                duration={3}
                delay={1}
              />
            </div>
            <div>
              <CounterElement
                label={"Second Number"}
                end={100}
                duration={3}
                delay={1}
              />
            </div>
            <div>
              <CounterElement
                label={"THird Number"}
                end={100}
                duration={3}
                delay={1}
              />
            </div>
            <div>
              <CounterElement
                label={"Fourth Number"}
                end={100}
                duration={3}
                delay={1}
              />
            </div>
            <div className="mt-4">
              <CounterElement
                label={"completely made-up numbers to get your attention"}
                end={4}
                duration={2}
                delay={4}
              />
            </div>
          </div>

          {/* <table className="mt-4 text-3xl w-full">
            <tr>
              <td>
                <CounterElement
                  label={"First Number"}
                  end={100}
                  duration={3}
                  delay={1}
                />
              </td>
              <td>
              <CounterElement
                  label={"Second Number"}
                  end={2000}
                  duration={3}
                  delay={1}
                />
              </td>
            </tr>
            <tr>
              <td>
              <CounterElement
                  label={"Third Number"}
                  end={30}
                  duration={3}
                  delay={1}
                />
              </td>
              <td>
              <CounterElement
                  label={"Fourth Number"}
                  end={10}
                  duration={3}
                  delay={1}
                />
              </td>
            </tr>
            <tr>
              <td className={`${counterFinished ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-500`}>
              <CounterElement
                  label={"First Number"}
                  end={100}
                  duration={5}
                  delay={4}
                />
              </td>
            </tr>
          </table> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
