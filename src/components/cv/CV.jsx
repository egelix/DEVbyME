import { useState, useRef, useEffect } from "react";

function CV() {
  const [cvIsIntersecting, setCvIsIntersecting] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entry) => {
            console.log(entry[0].isIntersecting)
            setCvIsIntersecting(entry[0].isIntersecting)
        },
        { rootMargin: ""}
    );
    observer.observe(cvRef.current);
    return () => observer.disconnect();
  }, []);

  const endYear = 2023;
  const startYear = 2002;
  const yearDivs = [];
  for (let i = endYear; i >= startYear; i--) {
    yearDivs.push(<div className="h-7 w-full text-center">{i}</div>);
  }

  const [istest, settest] = useState(false);
  function test() {
    settest(true);
  }

  return (
    <section id="cv-section" className="h-screen bg-green-200">
      <div className="pt-16" onClick={test}>
        CV
      </div>
      <div className="flex justify-center w-full">
        <div className="mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200 md: w-[95%] lg:w-[90%]">
          <div className="h-10 grid grid-cols-2">
            <div className="text-right pr-12">Profession</div>
            <div className="text-left pl-12">Education</div>
          </div>
          <div className="relative">
            <div
              className={`absolute ${
                cvIsIntersecting ? "h-0" : "h-full"
              } transition-all duration-[3000ms] bg-zinc-800 w-full`}
            ></div>

            <div className="absolute left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-red-200 via-red-400 to-red-200">
              <div className="sticky top-1/2">
                <div className="relative h-4 w-4">
                  <div className="absolute h-4 w-4 animate-ping rounded-full bg-red-700 opacity-75"></div>
                  <div className="bg-red-700 rounded-full relative h-4 w-4"></div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[250px] bg-zinc-300">
                  ORF
                </div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[40px] bg-zinc-300">
                  HP
                </div>
                <div className="w-[90%] h-[8px]"></div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[84px] bg-zinc-300">
                  VBW
                </div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[168px] bg-zinc-300">
                  FH
                </div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[40px] bg-zinc-300">
                  BH
                </div>
                <div ref={cvRef}></div>
              </div>
              <div className="z-50 w-12 grid grid-cols-1 justify-center">
                {yearDivs}
              </div>
              <div className="flex-1">
                <div className="w-[90%] h-[6px]"></div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[24px] bg-zinc-300">
                  CC
                </div>
                <div className="w-[90%] h-[180px]"></div>
                <div className="z-5 rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[192px] bg-zinc-300">
                  Thewi
                </div>
                <div className="z-10 rounded-lg border-black border-2 shadow-md shadow-black mx-1 mb-1 -mt-[48px] w-[90%] h-[132px] bg-zinc-300">
                  Spowi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
