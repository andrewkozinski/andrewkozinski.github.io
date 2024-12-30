import "../App.css";
import React from 'react';

const InfoTab = (text: string, content: React.ReactNode) => {
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