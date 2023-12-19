

function Timeline({currentYear, currentMonth}) {
 
  const currentYearEven = currentYear % 2 === 0;

  const startYear = 2002;
  const evenYearDivs = [];
  const oddYearDivs = [];
  addCurrentYearDiv();
  for (let i = currentYear - 1; i >= startYear; i--) {
    i % 2 === 0 ? addEvenYearDiv(i) : addOddYearDiv(i);
  }

  function provideRightSizedYearDiv() {
    return (
      <div
        className={`${
          currentMonth <= 4
            ? "md:w-[24px] lg:w-[40px]"
            : currentMonth === 5
            ? "md:w-[30px] lg:w-[50px]"
            : currentMonth === 6
            ? "md:w-[36px] lg:w-[60px]"
            : currentMonth === 7
            ? "md:w-[42px] lg:w-[70px]"
            : currentMonth === 8
            ? "md:w-[48px] lg:w-[80px]"
            : currentMonth === 9
            ? "md:w-[54px] lg:w-[90px]"
            : currentMonth === 10
            ? "md:w-[60px] lg:w-[100px]"
            : currentMonth === 11
            ? "md:w-[66px] lg:w-[110px]"
            : "md:w-[72px] lg:w-[120px]"
        } text-center border-r-[1px] border-black`}
      >
        {currentYear}
      </div>
    );
  }

  function provideRightSizedEmptyDiv() {
    return (
      <div
        className={`${
          currentMonth <= 4
            ? "md:w-[24px] lg:w-[40px]"
            : currentMonth === 5
            ? "md:w-[30px] lg:w-[50px]"
            : currentMonth === 6
            ? "md:w-[36px] lg:w-[60px]"
            : currentMonth === 7
            ? "md:w-[42px] lg:w-[70px]"
            : currentMonth === 8
            ? "md:w-[48px] lg:w-[80px]"
            : currentMonth === 9
            ? "md:w-[54px] lg:w-[90px]"
            : currentMonth === 10
            ? "md:w-[60px] lg:w-[100px]"
            : currentMonth === 11
            ? "md:w-[66px] lg:w-[110px]"
            : "md:w-[72px] lg:w-[120px]"
        }`}
        key={currentYear + 1000}
      ></div>
    );
  }

  function addCurrentYearDiv() {
    if (currentYearEven) {
      evenYearDivs.push(
        <div className="flex" key={currentYear}>
          {provideRightSizedYearDiv()}
          <div className="md:w-[72px] lg:w-[120px]"></div>
        </div>
      );
      oddYearDivs.push(provideRightSizedEmptyDiv());
    } else {
      oddYearDivs.push(
        <div className="flex" key={currentYear}>
          {provideRightSizedYearDiv()}
          <div className="md:w-[72px] lg:w-[120px]"></div>
        </div>
      );
      evenYearDivs.push(provideRightSizedEmptyDiv());
    }
  }
  function addEvenYearDiv(year) {
    year === startYear
      ? evenYearDivs.push(
          <div className="md:w-[72px] lg:w-[120px]" key={year}>
            <div className="text-center border-l-[1px] border-black">
              {year}
            </div>
          </div>
        )
      : evenYearDivs.push(
          <div className="grid grid-cols-2 md:w-[144px] lg:w-[240px]" key={year}>
            <div className="text-center border-l-[1px] border-r-[1px] border-black">
              {year}
            </div>
            <div></div>
          </div>
        );
  }

  function addOddYearDiv(year) {
    oddYearDivs.push(
      <div className="grid grid-cols-2 md:w-[144px] lg:w-[240px]" key={year}>
        <div className="text-center border-l-[1px] border-r-[1px] border-black">
          {year}
        </div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="border-box grid" >
      <div className="flex">{currentYearEven ? evenYearDivs : oddYearDivs}</div>
      <div className="w-full h-2 rounded-r-full bg-red-600">
        {/* <div className="sticky top-1/2">
              <div className="relative h-4 w-4">
                <div className="absolute h-4 w-4 animate-ping rounded-full bg-red-700 opacity-75"></div>
                <div className="bg-red-700 rounded-full relative h-4 w-4"></div>
              </div>
            </div> */}
      </div>
      <div className="flex">
        {!currentYearEven ? evenYearDivs : oddYearDivs}
      </div>
    </div>
  );
}

export default Timeline;
