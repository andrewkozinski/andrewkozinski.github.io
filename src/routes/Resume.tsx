import "../App.css";
import Navbar from "../components/Navbar";
import ResumePdf from "../resources/pdfs/Resume - Andrew Kozinski.pdf"
import { setTitle, setFavicon } from "../funcs";
import ResumePng from "../resources/images/deskicon.png";

const Resume = () => {

    setTitle("Resume - Andrew Kozinski");
    setFavicon(ResumePng);

    return (
        <>
            <Navbar />

            <div className="main-body" id="main-body">

                <div className="info-tab" style={{paddingTop: "35px"}}>

                    <div className="upper-tab" id="aboutMe">
                        <p>Resume:</p>
                    </div>

                    <div className="lower-tab">
                        <div className="inner-tab background align-items-center">
                            <iframe
                                src={ResumePdf}
                                width="100%"
                                height="100%"
                                title="Resume"
                                style={{ border: "none", height: "calc(100vh - 20px)" }}
                            />
                        </div>
                    </div>
                </div> {/*End info tab*/}

                
            </div>
        </>
        
    );

}

export default Resume;