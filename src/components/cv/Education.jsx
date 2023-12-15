function Education({ data, setEducationInfoData }) {
  return (
    <div className="flex flex-row-reverse items-center justify-end md:text-md lg:text-xl">
      <div className="flex items-center">
        <div className="flex md:pl-[2px] lg:pl-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 md:w-[72px] lg:w-[120px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setEducationInfoData(data.codecool)}
        onMouseLeave={() => setEducationInfoData(null)}>
          Codecool
        </div>
        <div className="md:w-[534px] lg:w-[890px]"></div>
        <div className="flex pl-2 items-center rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 md:w-[588px] lg:w-[980px] md:-mr-[150px] lg:-mr-[250px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setEducationInfoData(data.thewi)}
        onMouseLeave={() => setEducationInfoData(null)}>
          {data.thewi.name}
        </div>
        <div className="flex pl-2 items-center mt-2 rounded-md border-[1px] border-black bg-zinc-200 dark:bg-zinc-700 md:w-[396px] lg:w-[660px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setEducationInfoData(data.spowiBakk)}
        onMouseLeave={() => setEducationInfoData(null)}>
          {data.spowiBakk.name}
        </div>
        <div className="md:w-[90px] lg:w-[150px]"></div>
        <div className="flex md:pl-[2px] lg:pl-2 items-center rounded-l-md border-[1px] border-r-0 border-black bg-zinc-200 dark:bg-zinc-700 md:w-[36px] lg:w-[60px] h-10 cursor-pointer hover:font-bold hover:shadow-black hover:bg-zinc-300 transition-all"
        onMouseEnter={() => setEducationInfoData(data.hak)}
        onMouseLeave={() => setEducationInfoData(null)}>
          HAK
        </div>
      </div>
      <div className="grow h-10"></div>
    </div>
  );
}

export default Education;
