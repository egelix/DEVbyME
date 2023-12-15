function WorkExperience({ currentYear, currentMonth, data, setWorkInfoData }) {
  let teamWorkDiv;
  // if (currentYear <= 2023) {
    teamWorkDiv = (
      <div 
      className={`
      ${currentYear <= 2023 ? "md:w-[630px] lg:w-[1050px]" : 
    currentMonth <= 4 ? "lg:w-[1090px]" :
    currentMonth <= 5 ? "w-[1100px]" :
    currentMonth <= 6 ? "w-[1110px]" :
    currentMonth <= 7 ? "w-[1120px]" :
    currentMonth <= 8 ? "w-[1130px]" :
    currentMonth <= 9 ? "w-[1140px]" :
    currentMonth <= 10 ? "w-[1150px]" :
    currentMonth <= 11 ? "w-[1160px]" :
    "w-[1170]"
  } 
      flex pl-2 items-center rounded-r-md border-[1px] border-black border-l-0 bg-zinc-200 dark:bg-zinc-700 h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all`}
      onMouseEnter={() => setWorkInfoData(data.tw)}
      onMouseLeave={() => setWorkInfoData(null)}>
        Teamwork Service GmbH
      </div>
    );

  return (
    <div className="flex items-center w-full md:text-md lg:text-xl">
      {teamWorkDiv}
      <div className="flex items-center">
        <div className="md:w-[46px] lg:w-[70px] flex md:text-xs lg:text-sm md:pl-[2px] lg:pl-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setWorkInfoData(data.hp)}
        onMouseLeave={() => setWorkInfoData(null)}>
          Holmes Place
        </div>
        <div className="md:w-[20px] lg:w-[40px]"></div>
        <div className="flex pl-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 md:w-[252px] lg:w-[420px] md:-mr-[12px] lg:-mr-[20px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 hover:z-10 transition-all"
        onMouseEnter={() => setWorkInfoData(data.vbw)}
        onMouseLeave={() => setWorkInfoData(null)}>
          Burgenländisches Volksbildungswerk
        </div>
        <div className="flex pl-2 items-center mb-2 rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 md:w-[552px] lg:w-[920px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setWorkInfoData(data.vie)}
        onMouseLeave={() => setWorkInfoData(null)}>
          Vienna International Airport
        </div>
        <div className="md:[6px] lg:w-[10px]"></div>
        <div className="flex md:text-xs lg:text-sm md:pl-[2px] lg:pl-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 md:w-[54px] lg:w-[90px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setWorkInfoData(data.bh)}
        onMouseLeave={() => setWorkInfoData(null)}>
          Präsenz- dienst
        </div>
        <div className="w-[60px]"></div>
      </div>
    </div>
  );
}

export default WorkExperience;
