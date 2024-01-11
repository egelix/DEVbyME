function WorkExperienceMobile({ currentYear, currentMonth, data, setWorkInfoData }) {
    let teamWorkDiv;
    // if (currentYear <= 2023) {
      teamWorkDiv = (
        <div 
        className={`
        ${currentYear <= 2023 ? "h-[525px]" : 
      currentMonth <= 4 ? "h-[545px]" :
      currentMonth <= 5 ? "h-[550px]" :
      currentMonth <= 6 ? "h-[555px]" :
      currentMonth <= 7 ? "h-[560px]" :
      currentMonth <= 8 ? "h-[565px]" :
      currentMonth <= 9 ? "h-[570px]" :
      currentMonth <= 10 ? "h-[575px]" :
      currentMonth <= 11 ? "h-[580px]" :
      "h-[585px]"
    } 
        w-[200px] flex p-2 items-center rounded-b-md border-[1px] border-black border-t-0 bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all`}
        onMouseEnter={() => setWorkInfoData(data.tw)}
        onMouseLeave={() => setWorkInfoData(null)}>
          Teamwork Service GmbH
        </div>
      );
  
    return (
      <div className="grid justify-items-center h-full w-[200px]">
        {teamWorkDiv}
        <div className="grid justify-items-center">
          <div className="w-[200px] h-[35px] p-2 flex items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
          onMouseEnter={() => setWorkInfoData(data.hp)}
          onMouseLeave={() => setWorkInfoData(null)}>
            Holmes Place
          </div>
          <div className="h-[20px]"></div>
          <div className="w-[200px] h-[210px] -mb-[10px] flex p-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 hover:z-10 transition-all"
          onMouseEnter={() => setWorkInfoData(data.vbw)}
          onMouseLeave={() => setWorkInfoData(null)}>
            Burgenländisches Volksbildungswerk
          </div>
          <div className="w-[200px] h-[460px] flex p-2 items-center mr-2 rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
          onMouseEnter={() => setWorkInfoData(data.vie)}
          onMouseLeave={() => setWorkInfoData(null)}>
            Vienna International Airport
          </div>
          <div className="h-[5px]"></div>
          <div className="w-[200px] h-[45px] p-2 flex items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
          onMouseEnter={() => setWorkInfoData(data.bh)}
          onMouseLeave={() => setWorkInfoData(null)}>
            Präsenzdienst
          </div>
          <div className="h-[30px]"></div>
        </div>
      </div>
    );
  }
  
  export default WorkExperienceMobile;
  