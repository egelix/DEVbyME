

function TimelineMobile({currentYear, currentMonth}) {
 
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
              ? "h-[20px]"
              : currentMonth === 5
              ? "h-[25px]"
              : currentMonth === 6
              ? "h-[30px]"
              : currentMonth === 7
              ? "h-[35px]"
              : currentMonth === 8
              ? "h-[40px]"
              : currentMonth === 9
              ? "h-[45px]"
              : currentMonth === 10
              ? "h-[50px]"
              : currentMonth === 11
              ? "h-[55px]"
              : "h-[60px]"
          } w-[35px] text-center border-b-[1px] border-black flex items-center`}
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
            ? "h-[20px]"
            : currentMonth === 5
            ? "h-[25px]"
            : currentMonth === 6
            ? "h-[30px]"
            : currentMonth === 7
            ? "h-[35px]"
            : currentMonth === 8
            ? "h-[40px]"
            : currentMonth === 9
            ? "h-[45px]"
            : currentMonth === 10
            ? "h-[50px]"
            : currentMonth === 11
            ? "h-[55px]"
            : "h-[60px]"
          }`}
          key={currentYear + 1000}
        ></div>
      );
    }
  
    function addCurrentYearDiv() {
      if (currentYearEven) {
        evenYearDivs.push(
          <div key={currentYear}>
            {provideRightSizedYearDiv()}
            <div className="w-[35px] h-[60px]"></div>
          </div>
        );
        oddYearDivs.push(provideRightSizedEmptyDiv());
      } else {
        oddYearDivs.push(
          <div key={currentYear}>
            {provideRightSizedYearDiv()}
            <div className="w-[35px] h-[60px]"></div>
          </div>
        );
        evenYearDivs.push(provideRightSizedEmptyDiv());
      }
    }
    function addEvenYearDiv(year) {
      year === startYear
        ? evenYearDivs.push(
            <div className="w-[35px] h-[60px] border-t-[1px] border-black flex items-center" key={year}>
              <div className="text-center">
                {year}
              </div>
            </div>
          )
        : evenYearDivs.push(
            <div className="grid grid-rows-2 w-[35px] h-[120px]" key={year}>
              <div className="flex items-center text-center border-t-[1px] border-b-[1px] border-black">
                {year}
              </div>
              <div></div>
            </div>
          );
    }
  
    function addOddYearDiv(year) {
      oddYearDivs.push(
        <div className="grid grid-rows-2 w-[35px] h-[120px]" key={year}>
          <div className="flex items-center text-center border-t-[1px] border-b-[1px] border-black">
            {year}
          </div>
          <div></div>
        </div>
      );
    }
  
    return (
      <div className="border-box flex" >
        <div className="flex-row">{currentYearEven ? evenYearDivs : oddYearDivs}</div>
        <div className="w-2 h-[1320px] rounded-b-full bg-red-400">
          {/* <div className="sticky top-1/2">
                <div className="relative h-4 w-4">
                  <div className="absolute h-4 w-4 animate-ping rounded-full bg-red-700 opacity-75"></div>
                  <div className="bg-red-700 rounded-full relative h-4 w-4"></div>
                </div>
              </div> */}
        </div>
        <div className="flex-row">
          {!currentYearEven ? evenYearDivs : oddYearDivs}
        </div>
      </div>
    );
  }
  
  export default TimelineMobile;
  