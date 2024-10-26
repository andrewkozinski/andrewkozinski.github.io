import "../App.css";

const Resume = () => {

    return (
        <div className="main-body" id="main-body">
            <iframe
                src={`./resources/Andrew_Kozinski_Resume.pdf`}
                width="100%"
                height="600px"
                title="Resume"
            />
        </div>
    );

}

export default Resume;