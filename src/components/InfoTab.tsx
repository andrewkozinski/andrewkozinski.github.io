import "../App.css";
import React from 'react';

interface InfoTab {
    text: string;
    content: React.ReactNode;
}

const InfoTab : React.FC<InfoTab> = ({content, text}) => {
    return (
        <>
            <div className="info-tab" style={{ paddingTop: "35px" }}>

                <div className="upper-tab" id="aboutMe">
                    <p>{text}</p>
                </div>

                <div className="lower-tab">
                    <div className="inner-tab background align-items-center">
                        {content}
                    </div>
                </div>
            </div> {/*End info tab*/}
        </>
    );
};
export default InfoTab;