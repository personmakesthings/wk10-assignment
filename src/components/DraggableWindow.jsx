// DIRECTIVE
"use client"

// IMPORT
import React, { useState, useEffect } from "react"
import Draggable from "react-draggable"

// IMPORT STYLES
import "./DraggableWindowStyles.css"


// STICKY NOTE COMPONENT
export default function DraggableWindow({
    // WINDOW PROPS
        // CUSTOM PROPS
        winId,              // define id of component for local storage 
        winTitle,           // title, shown in handle bar
        winContent,         // content of window, can take JSX in the form of a variable
        winWidth,           // width of window
        winHeight,          // height of content section, scroll bar turns on upon overflow
        winVisibility,      // sets initial visibility of window, takes a boolean (true or false)

        // REACT-DRAGGABLE PROPS
        winPosition,        // default position upon initial load (if local storage empty)
        winBounds,          // define element window is bound to (cannot move out of)

    // BUTTON PROPS
        buttonImg,          // image for button
        buttonTxt           // text for button (should use either or buttonImg or buttonTxt)
    }) {


    // HANDLE POSITION OF COMPONENT
    // hooks for handling the position of the component and saving it in local storage

    // NOTES FOR USING LOCALSTORAGE WITH NEXT.JS
    // localStorage only exists client side inside the window object
    // We need to check if this object exists and only have our localStorage code executed if it does
    // Otherwise we will receive an error in our server-side code, as localStorage cannot be found server-side. App will fail to build with this error.
    // More details: https://dev.to/collegewap/how-to-use-local-storage-in-nextjs-2l2j

    let initialPosition = ""
    if (typeof window !== "undefined") {
        initialPosition = JSON.parse(localStorage.getItem(`win-${winId}`)) || winPosition
    }

    const [position, setPosition] = useState(initialPosition)

    useEffect(() => {
        localStorage.setItem(`win-${winId}`, JSON.stringify(position))
    }, [position])
        
    function savePosition(e, data) {
        setPosition({ x: data.x, y: data.y })
    }

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
    


    // HANDLE VISIBILITY OF CONTENT
    // Visibility of the content area
    // ``{visContent && "JSX GOES HERE"}`` wrapped around the whole element
    let initialVisContent = ""
    if (typeof window !== "undefined") {
        const storedVisContent = JSON.parse(localStorage.getItem(`win-${winId}-visContent`))
        initialVisContent = storedVisContent === null ? true : storedVisContent
    }

    const [visContent, setVisContent] = useState(initialVisContent)
    useEffect(() => {
        localStorage.setItem(`win-${winId}-visContent`, JSON.stringify(visContent))
    }, [visContent])

    function toggleVisContent() {
        setVisContent(!visContent)
    }


    return (
        <div>
        {/* WINDOW ELEMENT */}
        {visWindow && (
            <Draggable
            handle=".handle"
            onStop={savePosition}
            defaultPosition={position}
            bounds={winBounds}
            >
            
            {/* CONTAINER DIV - WINDOW*/}
            <div className="window-box" style={{
                width: `${winWidth}px`
                }}>

                {/* STICKY NOTE TITLE */}
                <div className="handle window-handle">
                    <h2 className="window-title-text">{winTitle}</h2>

                    {/* CONTAINER DIV - BUTTONS*/}
                    <div className="btn-container">

                        {/* BUTTON TO TOGGLE CONTENT */}
                        <button className="btn min-btn" onClick={toggleVisContent} />

                        {/* BUTTON TO TOGGLE VISIBILITY */}
                        <button className="btn x-btn" onClick={toggleVisWindow} />

                    </div>
                </div>

                {/* STICKY NOTE CONTENT */}
                {visContent && (
                    <div className="window-content"style={{
                    height: `${winHeight}px`
                    }}>

                    {winContent}
                    </div>
                    )}
            </div>
                    
            </Draggable>
        )}


        {/* BUTTON ELEMENT */}
            <button className={`winBtn btn-${winId}`} onClick={toggleVisWindow}>
                {buttonTxt}
            </button>

        </div>
    )
}

