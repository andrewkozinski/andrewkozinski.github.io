import Navbar from "../components/Navbar";
import InfoTab from "../components/InfoTab";

const ContactMe = () => {
    return (
        <>
            <Navbar/>
            <div className="main-body" id="main-body">
                <InfoTab text="Contact Me:" content={
                    <>
                        <h2>Feel free to contact me through of any of the means below:</h2>
                    </>
                }/>
            </div>
        </>
    );
}
export default ContactMe;