import useIsMobile from "@/app/component/useIsMobile";  

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="footer ">
      <div className="footer-content flex justify-between items-center w-full border bg-black py-5 px-5">

        {isMobile ? (
          <>                   {/* Mobile Vew */}
            <a href="/" className="footer-logo text-white py-2 px-4" aria-label="Go to homepage">
               <h2>Chico Solar Cleaners</h2>
            </a>

            <div className="footer-contact text-white">
              <h3>Contact Us</h3>
              <p>
                <a href="mailto:lgalvez1998@yahoo.com">
                  lgalvez1998@yahoo.com
                </a>
              </p>
              <p>
                <a href="tel:+17078907349">(707) 890-7349</a>
              </p>
            </div>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/solanosolarcleaning/"
                aria-label="Facebook"
                className="social-icon"
              ></a>
              <a href="#" aria-label="Instagram" className="social-icon"></a>
            </div>
          </>
        ) : (
          <>               {/* Desktop Vew */}
            <a href="/" className="footer-logo text-white py-2 px-4" aria-label="Go to homepage">
               <h2>Chico Solar Cleaners</h2>
            </a>

            <div className="footer-contact text-white">
              <h3>Contact Us</h3>
              <p>
                <a href="mailto:lgalvez1998@yahoo.com">
                  lgalvez1998@yahoo.com
                </a>
              </p>
              <p>
                <a href="tel:+17078907349">(707) 890-7349</a>
              </p>
            </div>

            <div className="navbar-right m-5 text-white rounded py-2 px-4 bg-blue-500">
              <a href="tel:+17078907349" className="call-button">
                Call Now!
              </a>
            </div>

          </>
        )}

      </div>
    </footer>
  );
}
