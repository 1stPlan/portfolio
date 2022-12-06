// import ReactYouTube from 'react-youtube';
import React, { useState, useRef, useEffect } from "react";

const YouTube = () => {

    return (
        <div className="youtube">
            <div className="youtube__inner">
                <div className="youtube__movie">
                    <video
                        muted
                        playsInline
                        src={`/img/start.mp4`}
                        class="youtube__ifreme"
                        id="movie"
                    />
                </div>
            </div>
        </div>
    );
};

export default YouTube;
