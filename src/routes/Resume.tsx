import "../App.css";
import Navbar from "../components/Navbar";
import ResumePdf from "../resources/pdfs/Resume - Andrew Kozinski.pdf"

const Resume = () => {

    return (
        <>
            <Navbar />
            <div className="main-body" id="main-body">
                <iframe
                    src={ResumePdf}
                    width="100%"
                    height="100%"
                    title="Resume"
                />
            </div>
        </>
        
    );

}

export default Resume;