function LegalNotice({ showLegal, setShowLegal }) {
  function handleCloseClick() {
    setShowLegal(false);
  }

  return (
    <div
      className={`${
        showLegal ? "inline" : "hidden"
      } fixed top-0 left-0 z-50 h-screen w-screen flex items-center justify-center backdrop-blur-md`}
    >
      <div className="relative opacity-100 bg-zinc-200 shadow-md shadow-black overflow-y-scroll h-[90%] w-[90%]">
        <div className="m-4 flex justify-end">
          <button onClick={handleCloseClick} className="font-bold text-lg hover:text-red-700">X</button>
        </div>
        <div className="m-4">
          <p className="font-bold text-2xl">IMPRESSUM</p>
        </div>
        <hr className="mx-4 border-1 border-black"/>
        <div className="m-4">
          <p className="font-bold text-lg">Medieninhaber:</p>
          <p>Martin Egert Bakk.rer.nat BA</p>
          <p>Bessemerstraße 1/18</p>
          <p>A-1210 Wien</p>
          <p>Österreich</p>
        </div>
        <div className="m-4">
          <p className="font-bold text-lg">Kontakt:</p>
          <p>+43 699 18633707</p>
          <p>m.egert82@gmail.com</p>
        </div>
        <div className="m-4">
          <p className="font-bold text-lg">Haftung für Inhalte</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="m-4">
          <p className="font-bold text-lg">Haftung für Links</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="m-4">
          <p className="font-bold text-lg">Urheberrecht</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default LegalNotice;
