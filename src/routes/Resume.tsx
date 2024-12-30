import "../App.css";
import Navbar from "../components/Navbar";
import ResumePdf from "../resources/pdfs/Resume - Andrew Kozinski.pdf"
import { setTitle, setFavicon } from "../funcs";
import ResumePng from "../resources/images/deskicon.png";
import InfoTab from "../components/InfoTab";

const Resume = () => {

    setTitle("Resume - Andrew Kozinski");
    setFavicon(ResumePng);

    return (
        <>
            <Navbar />

            <div className="main-body" id="main-body">
                <InfoTab text="Resume:" content={
                    <iframe
                    src={ResumePdf}
                    width="100%"
                    height="100%"
                    title="Resume"
                    style={{ border: "none", height: "calc(100vh - 20px)" }}
                    />
                }/>
            </div>
        </>
        
    );

}

export default Resume;