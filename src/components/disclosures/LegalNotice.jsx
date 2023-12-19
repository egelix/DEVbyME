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
      <div
        className="absolute flex items-center justify-center rounded-full w-10 h-10 bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-500 dark:hover:text-black cursor-pointer shadow-md shadow-black top-[5%] right-[5%] z-10"
        onClick={handleCloseClick}
      >
        <button className="font-bold text-lg">X</button>
      </div>

      <div className="p-2 relative opacity-100 bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 shadow-md shadow-black overflow-y-scroll no-scrollbar my-[5%] h-[90%] w-[90%] max-w-[700px]">
        <div className="m-4">
          <p className="font-bold mb-6 text-3xl">Impressum</p>
          <p className="mt-4 font-bold">
            Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63
            GewO und § 14 UGB
          </p>
          <div className="mt-4 flex">
            <p className="font-bold mr-2">Webseitenbetreiber:</p>
            <p>Martin Egert, Bakk.rer.nat</p>
          </div>
          <div className="mt-4 flex">
            <p className="font-bold mr-2">Anschrift:</p>
            <p>Bessemerstraße 1/18, 1210 Wien</p>
          </div>
          <div className="mt-4">
            <p className="font-bold">Kontaktdaten:</p>
            <p>Telefon: +4369918633707</p>
            <p>Email: m.egert82@gmail.com</p>
          </div>
          <div className="mt-4 flex">
            <p className="font-bold mr-2">Anwendbare Rechtsvorschrift:</p>
            <p>www.ris.bka.gv.at</p>
          </div>
          <p className="mt-4">
            <strong>Urheberrecht:</strong> Die Inhalte dieser Webseite
            unterliegen, soweit dies rechtlich möglich ist, diversen
            Schutzrechten (z.B dem Urheberrecht). Jegliche
            Verwendung/Verbreitung von bereitgestelltem Material, welche
            urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des
            Webseitenbetreibers.
          </p>
          <p className="mt-4">
            <strong>Haftungsausschluss:</strong>Trotz sorgfältiger inhaltlicher
            Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam
            werden, welche auf eine Webseite mit rechtswidriger
            Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden
            Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.
          </p>
          <p>
            Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit
            größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden derartiger
            Rechtsverletzungen werden wir den betroffenen Inhalt umgehend
            entfernen.
          </p>

          <div className="flex mt-4">
            <p className="mr-2">Quelle:</p>
            <p className="font-bold text-blue-600 hover:text-blue-900 hover:underline">
              <a href="https://www.rechtstexte-generator.at/dsgvo-generator-oesterreich/">
                Datenschutz DSGVO Generator
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalNotice;
