// src/pages/Home.jsx
import React from 'react'; // Importerar React för att använda komponenter

const Home = () => (
  <main>
    <h1>Välkommen till mitt digitala CV</h1>
    <section className="card">
      <aside className='card2'>
        <section>
          <h1>Amanda Andersson</h1>
          <h2>Kort proffesionell sammanfattning</h2>
          <p>Studerande Frontend Developer (KYH, 2-årig utbildning) med praktiska kunskaper i HTML, CSS, UX,  JavaScript och TypeScript. Pågående kurs i Front End-projekt.
            <br /><b>★ Söker LIA/praktik 24 november – 10 april</b> för att omsätta kurs-kunskaper i verkliga projekt och utveckla arbetslivserfarenhet inom Frontend / UX.</p>
        </section>
        <section>
          <img src="src/images/cvbild.png" alt="CV bild" />
        </section>
      </aside>

      <section className="card3">
        <aside>
          <h2>Utbildning</h2>
          <h3>
            KYH Frontend Developer, Gävle</h3>
          <p>2024 - 2026 (pågående)</p>

          <h3>Gymnasieutbildning Estetik & Media, Examen</h3>
          <p>2019 - 2022</p>

          <h3>Grundskola</h3>
          <p>9 årig Grundskola, Gävle</p>

          <h3>Övrigt</h3>
          <p>Innehar B-körkort</p>

          <h2>Relevanta kurser</h2>
          <p>
            Arbetsmetodik för utvecklare 1 & 2<br />
            Jämställdhet i arbetslivet<br />
            HTML & CSS<br />
            JavaScript 1, 2 & 3<br />
            UX och grafiska verktyg<br />
            Back end-utveckling<br />
            TypeScript<br />
            Front end-projekt (pågående kurs, slutförs innan LIA)<br />
          </p>

          <h2>Tekniska färdigheter</h2>
          <p><b>Webb:</b> HTML, CSS, responsiv design <br />
            <b>Programmering:</b> JavaScript, TypeScript,
            React (grundläggande) <br />
            <b>Ramverk & metoder:</b> Komponentbaserad utveckling <br />
            <b>Verktyg & arbetsflöde:</b> Git, GitHub, Chrome DevTools, npm<br />
            <b>Design / UX:</b> Figma, grafiska verktyg<br />
            <b>Grundläggande backend:</b> REST-API, JSON, förståelse för server–klient-flöde<br />
            <b>Programvara:</b> Photoshop, Adobe Illustrator, After Effects, Blender, Premiere Pro, Lightroom, Microsoft Word<br />
          </p>

          <h2>Arbetserfarenhet</h2>
          <p>
            <b>McDonalds Hemlingby - Värdinna</b><br />
            <i>15 november 2022 - pågående anställning</i>  <br />
            Kundbemötande och snabb service i högt tempo. Håller ordning och bidrar till ett gott teamklimat, extra gästfokus.
          </p>
          <p>
            <b>New Yorker Valbo - Säljare</b><br />
            <i>7 december 2022 - 31 december 2022</i><br />
            Kundmöten, varuexponering och kassaarbete under intensiv period.
          </p>
          <p>
            <b>Furuviksparken AB - Medarbetare</b><br />
            <i>15 oktober 2022 - 5 november 2022</i><br />
            Servering, kassa,  kundservice och upprätthållande av hygien- och kvalitetskrav.
          </p>

        </aside>
        <aside>

          <h2>Kontakt</h2>
          <p>
            <b>Amanda Andersson</b> <br />
            Född: 2003-12-25<br />
            Lövlundsvägen 91B<br />
            Furuvik, 81491<br />
            <b>072-2301250</b><br />
            amanda.andersson034@gmail.com
          </p>

          <h2>Utmärkelser</h2>
          <p><b>McDonalds Månadens medarbetare</b> - November 2023</p>
          <p><b>Diplom</b> inom kursen Personlig Utveckling</p>
          <p><b>McDonalds Hospitality utbildning</b> - gästservice</p>
          
          <h2>Språk</h2>
          <p><b>Svenska </b>Modersmål</p>
          <p><b>Engelska </b>Mycket goda kunskaper</p>
          <p><b>Tyska </b>Grundläggande kunskaper</p>

        </aside>
      </section>
    </section>
  </main>
);

export default Home; // Exporterar Home-komponenten för användning i appen
