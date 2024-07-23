import "../assets/fonts.css";
import "../css/C003.css";
// import Footer from '../components/Footer.jsx';

/*
07/15/2024 2:33 PM

sort of a digital embroidery
just mmm type
*/

function Wap() {
  return (
    <>
    <div id="meat-container">
      <div id="meat">
        <div className="heading">
          <h1 className="center">
          <em>&quot;Time Saver&quot;</em>&nbsp;Correspondence Card
          </h1>
          <h3 className="center">
            (For when you want to fill the void)
          </h3>
        </div>

        <div className="bracket">
          <div className="round">
            <div className="match">
              <div className="line">
                <p>I am very</p>
              </div>
            </div>
          </div>
          <div className="round bracketLine bracketLineSpace">
            <div className="match">
              <div className="line">
                <p>sorry</p>
              </div>
            </div>
            <div className="match">
              <div className="line">
                <p>glad</p>
              </div>
            </div>
          </div>
          <div className="round bracketLine">
            <div className="match">
              <div className="line">
                <p>I am here</p>
              </div>
            </div>
            <div className="match">
              <div className="line">
                <p>you are here</p>
              </div>
            </div>
            <div className="match">
              <div className="line">
                <p>you are not here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div id="yours-container">
          <p id="yours">Yours.</p>
        </div>
        <div className="signature-container">
          <p id="signed">Signed</p>
          <div id="dotted-line"></div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Wap;
