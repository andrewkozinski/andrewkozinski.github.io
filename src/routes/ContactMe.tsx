import Navbar from "../components/Navbar";
import InfoTab from "../components/InfoTab";

const ContactMe = () => {
    return (
        <>
            <Navbar/>
            <div className="main-body" id="main-body">
                <InfoTab text="Contact Me:" content={
                    <>
                        
                        <form action="https://formspree.io/f/mleovjzq" method="POST">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required/>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email" required/>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Write a message" required></textarea>
                            <input type="submit" value="Submit"/>
                        </form>
                    </>
                }/>
            </div>
        </>
    );
}
export default ContactMe;