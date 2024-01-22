import { useState } from "react";

function EducationMobile({ data, setEducationInfoData, language, currentYear, currentMonth }) {
  // const [showMore, setShowMore] = useState(null);

  // function handleMoreClick(part) {
  //   showMore === part ? setShowMore(null) : setShowMore(part);
  // }

  return (
    <div
      //   className="flex flex-col-reverse items-end justify-center w-[220px]"
      className="grid justify-items-center h-full w-[200px]"
    >
      <div className={`${currentYear <= 2023 ? "h-[15px]" : 
      currentMonth <= 4 ? "h-[30px]" :
      currentMonth <= 5 ? "h-[35px]" :
      currentMonth <= 6 ? "h-[45px]" :
      currentMonth <= 7 ? "h-[50px]" :
      currentMonth <= 8 ? "h-[55px]" :
      currentMonth <= 9 ? "h-[60px]" :
      currentMonth <= 10 ? "h-[65px]" :
      currentMonth <= 11 ? "h-[70px]" :
      "h-[75px]"
    } `}></div>
      <div
        // className="flex items-center"
        className="grid justify-items-center"
      >
        <div
          className={`w-[200px] h-[60px] p-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all`}
        >
          {data.codecool.name}
          {/* <button
            className="text-green-500 bg-green-400"
            onClick={() => handleMoreClick("CC")}
          >
            {language === "english" ? "more" : "mehr"}
          </button>
          <div className={`${showMore === "CC" ? "flex" : "hidden"}`}>Test</div> */}
        </div>
        <div className="h-[445px]"></div>
        <div
          className="w-[200px] h-[490px] -mb-[125px] p-2 flex items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 hover:z-10 transition-all"
          onMouseEnter={() => setEducationInfoData(data.thewi)}
          onMouseLeave={() => setEducationInfoData(null)}
        >
          {data.thewi.name}
        </div>
        <div
          className="w-[200px] h-[330px] p-2 flex items-center ml-2 rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
          onMouseEnter={() => setEducationInfoData(data.spowiBakk)}
          onMouseLeave={() => setEducationInfoData(null)}
        >
          {data.spowiBakk.name}
        </div>
        <div className="h-[75px]"></div>
        <div
          className="w-[200px] h-[30px] p-2 flex items-center rounded-t-md border-[1px] border-b-0 border-black bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
          onMouseEnter={() => setEducationInfoData(data.hak)}
          onMouseLeave={() => setEducationInfoData(null)}
        >
          {data.hak.name}
        </div>
      </div>
    </div>
  );
}

export default EducationMobile;
