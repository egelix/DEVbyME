function Datenschutz({ showDatenschutz, setShowDatenschutz }) {
  function handleCloseClick() {
    setShowDatenschutz(false);
  }

  return (
    <div
      className={`${
        showDatenschutz ? "inline" : "hidden"
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
          <p className="font-bold mb-6 text-3xl">
            Erklärung zur Informationspflicht
          </p>
        </div>
        <div className="m-4">
          <div>
            <h6 className="w-full text-center">Datenschutzerklärung</h6>
            <p>
              In folgender Datenschutzerklärung informieren wir Sie über die
              wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
              Webseite. Wir erheben und verarbeiten personenbezogene Daten nur
              auf Grundlage der gesetzlichen Bestimmungen
              (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
            </p>
            <p className="mt-4">
              Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese
              besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der
              Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein
              berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
            </p>
          </div>
          <div>
            <h5>Kontakt mit uns</h5>
            <p>
              Wenn Sie uns, entweder über unser Kontaktformular auf unserer
              Webseite, oder per Email kontaktieren, dann werden die von Ihnen
              an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder
              für den Fall von weiteren Anschlussfragen für sechs Monate bei uns
              gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe
              Ihrer übermittelten Daten.
            </p>
          </div>
          <div>
            <h5>Google Fonts</h5>
            <p>
              Unsere Website verwendet Schriftarten von „Google Fonts“. Der
              Dienstanbieter dieser Funktion ist:
            </p>
            <ul className="list-disc my-5 ml-10">
              <li>
                Google Ireland Limited Gordon House, Barrow Street Dublin 4.
                Ireland
              </li>
            </ul>

            <p>Tel: +353 1 543 1000</p>
            <p className="mt-4">
              Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und
              speichert diese in den Cache. Da Sie, als Besucher der Webseite,
              Daten des Dienstanbieters empfangen kann Google unter Umständen
              Cookies auf Ihrem Rechner setzen oder analysieren.
            </p>
            <p className="mt-4">
              Die Nutzung von „Google-Fonts“ dient der Optimierung unserer
              Dienstleistung und der einheitlichen Darstellung von Inhalten.
              Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
              lit. f DSGVO dar.
            </p>
            <p className="mt-4">
              Weitere Informationen zu Google Fonts erhalten Sie unter folgendem
              Link:
            </p>
            <ul className="list-disc my-4 ml-10 text-blue-600 hover:text-blue-900 hover:underline">
              <li>
                <a href="https://developers.google.com/fonts/faq">
                  https://developers.google.com/fonts/faq
                </a>
              </li>
            </ul>
            <p>
              Weitere Informationen über den Umgang mit Nutzerdaten von Google
              können Sie der Datenschutzerklärung entnehmen:
            </p>
            <ul className="list-disc my-4 ml-10 text-blue-600 hover:text-blue-900 hover:underline">
              <li>
                <a href="https://policies.google.com/privacy?hl=de">
                  https://policies.google.com/privacy?hl=de
                </a>
              </li>
            </ul>
            <p>
              Google verarbeitet die Daten auch in den USA, hat sich jedoch dem
              EU-US Privacy-Shield unterworfen.
            </p>
            <p className="mt-4 text-blue-600 hover:text-blue-900 hover:underline">
              <a href="https://www.privacyshield.gov/EU-US-Framework">
                https://www.privacyshield.gov/EU-US-Framework
              </a>
            </p>
          </div>
          <div>
            <h5>Ihre Rechte als Betroffener</h5>
            <p>
              Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns
              gespeichert sind grundsätzlich ein Recht auf:
            </p>
            <ul className="list-disc my-4 ml-10">
              <li>Auskunft</li>
              <li>Löschung der Daten</li>
              <li>Berichtigung der Daten</li>
              <li>Übertragbarkeit der Daten</li>
              <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
              <li>Einschränkung</li>
            </ul>
            <p className="mt-4">
              Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten
              Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie
              die Möglichkeit sich bei uns (m.egert82@gmail.com) oder der
              Datenschutzbehörde zu beschweren.
            </p>
          </div>
          <div>
            <h5>Sie erreichen uns unter folgenden Kontaktdaten:</h5>
            <div className="flex">
              <p className="font-bold mr-2">Webseitenbetreiber:</p>
              <p>Martin Egert, Bakk.rer.nat. BA</p>
            </div>
            <div className="flex">
              <p className="font-bold mr-2">Telefonnummer:</p>
              <p>+4369918633707</p>
            </div>
            <div className="flex">
              <p className="font-bold mr-2">Email:</p>
              <p>m.egert82@gmail.com</p>
            </div>
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
    </div>
  );
}

export default Datenschutz;
