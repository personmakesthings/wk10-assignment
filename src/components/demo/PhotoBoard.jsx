// DIRECTIVE
"use client"

// IMPORT
import React, { useState, useEffect } from "react"
import Draggable from "react-draggable"

// IMPORT STYLES
import "./PhotoBoard-styles.css"


export default function PhotoBoard({
    // WINDOW PROPS
        // CUSTOM PROPS
        winId,              // define id of component for local storage 
        winVisibility,      // sets initial visibility of window, takes a boolean (true or false)

        // REACT-DRAGGABLE PROPS
        bounds,             // define element window is bound to (cannot move out of)

    // BUTTON PROPS
        buttonTxt           // text for button (should use either or buttonImg or buttonTxt)
    }) {


    // HANDLE WINDOW VISIBILITY
    // Visibility of the whole window
    // ``{visWindow && "JSX GOES HERE"}`` wrapped around the whole element
    let initialVisWindow = ""
    if (typeof window !== "undefined") {
        const storedVisWindow = JSON.parse(localStorage.getItem(`win-${winId}-visWindow`))
        initialVisWindow = storedVisWindow === null ? winVisibility : storedVisWindow
    }   

    const [visWindow, setVisWindow] = useState(initialVisWindow)
    
    useEffect(() => {
        localStorage.setItem(`win-${winId}-visWindow`, JSON.stringify(visWindow))
    }, [visWindow])
    
    function toggleVisWindow() {
        setVisWindow(!visWindow)
    }
    



    return (
        <div>

        {/* BUTTON ELEMENT */}
        <button className={`winBtn btn-${winId}`} onClick={toggleVisWindow}>
                {buttonTxt}
            </button>

        {/* WINDOW ELEMENT */}
        {visWindow && (
            <div>
                <Draggable
                handle=".photo-handle"
                bounds={bounds}
                defaultPosition={{x: 70, y: 400}}
                >
                    <div className="photo-handle">
                        <img src="./demo-images/photo-01.jpg" className="photo-l"/>
                        <div></div>
                    </div>
                </Draggable>

                <Draggable
                handle=".photo-handle"
                bounds={bounds}
                defaultPosition={{x: 115, y: -25}}
                >
                    <div className="photo-handle">
                        <img src="./demo-images/photo-02.jpeg" className="photo-p"/>
                        <div></div>
                    </div>
                </Draggable>

                <Draggable
                handle=".photo-handle"
                bounds={bounds}
                defaultPosition={{x: 460, y: 290}}
                >
                    <div className="photo-handle">
                        <img src="./demo-images/photo-03.jpeg" className="photo-l"/>
                        <div></div>
                    </div>
                </Draggable>


                <Draggable
                handle=".photo-handle"
                bounds={bounds}
                defaultPosition={{x: 460, y: -30}}
                >
                    <div className="photo-handle">
                        <img src="./demo-images/photo-05.jpeg" className="photo-l"/>
                        <div></div>
                    </div>
                </Draggable>


                <Draggable
                handle=".photo-handle"
                bounds={bounds}
                defaultPosition={{x: 840, y: 400}}
                >
                    <div className="photo-handle">
                        <img src="./demo-images/photo-06.jpeg" className="photo-l"/>
                        <div></div>
                    </div>
                </Draggable>


                <Draggable
                handle=".photo-handle"
                bounds={bounds}
                defaultPosition={{x: 920, y: -20}}
                >
                    <div className="photo-handle">
                        <img src="./demo-images/photo-07.jpg" className="photo-p"/>
                        <div></div>
                    </div>
                </Draggable>

            </div>
        )}


        </div>
    )
}
