// DIRECTIVE
"use client"

// IMPORT
import React, { useState, useEffect } from "react"
import Draggable from "react-draggable"

// IMPORT STYLES
import "./StickyNotes-styles.css"

// STICKY NOTES
export default function StickyNotes({
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

        {visWindow && ( <div>
            
            <Draggable
                handle=".sticky-note-handle"
                bounds={bounds}
                defaultPosition={{x: 70, y: 10}}
                >
                    
                <div className="sticky-note">
                    <div className="sticky-note-handle" />
                    <h3><textarea className="sticky-note-title" defaultValue="Sticky Note Title" maxLength="30" /></h3>
                    <textarea
                        className="sticky-note-text sticky-note-s"
                        defaultValue="I can be typed in! Click on me to modify my text! I can also be resized! Click the icon in my bottom-left corner to make me shorter or taller!"
                        spellcheck="false"
                        maxLength="500"
                        />
                </div>

            </Draggable>


            <Draggable
                handle=".sticky-note-handle"
                bounds={bounds}
                defaultPosition={{x: 500, y: 50}}
                >
                    
                <div className="sticky-note">
                    <div className="sticky-note-handle" />
                    <h3><textarea className="sticky-note-title" defaultValue="Meeting with Sarah & Trish" maxLength="30" /></h3>
                    <textarea
                        className="sticky-note-text sticky-note-xs"
                        defaultValue="Meeting up for chat, coffee & cake! The Old York Tea Room. 12:30pm. Friday."
                        spellcheck="false"
                        maxLength="500"
                        />
                </div>

            </Draggable>

            <Draggable
                handle=".sticky-note-handle"
                bounds={bounds}
                defaultPosition={{x: 100, y: 360}}
                >
                    
                <div className="sticky-note">
                    <div className="sticky-note-handle" />
                    <h3><textarea className="sticky-note-title" defaultValue="Water the plants" maxLength="30" /></h3>
                    <textarea
                        className="sticky-note-text sticky-note-xs"
                        defaultValue="Spider plant, silver vine, devil's ivy, string of hearts. Check up 4:30pm on Thursday & Sunday."
                        spellcheck="false"
                        maxLength="500"
                        />
                </div>

            </Draggable>


            <Draggable
                handle=".sticky-note-handle"
                bounds={bounds}
                defaultPosition={{x: 910, y: 0}}
                >
                    
                <div className="sticky-note">
                    <div className="sticky-note-handle" />
                    <h3><textarea className="sticky-note-title" defaultValue="Some lorem ipsum text" maxLength="30" /></h3>
                    <textarea
                        className="sticky-note-text sticky-note-l"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros nisi, pretium nec purus sit amet, consectetur ultricies turpis. Aenean sed tortor ipsum. Vivamus sit amet ante faucibus, gravida ipsum eu, laoreet turpis. Fusce sit amet libero nunc. Donec luctus, tortor convallis facilisis posuere, lacus nisl elementum dui, et fermentum lacus nibh ut elit. Ut quis gravida quam. Pellentesque nec nibh nec metus dictum posuere. Morbi elementum viverra tempus. Nunc malesuada varius sapien in dignissim. Vivamus ut scelerisque diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam pellentesque dui a aliquet convallis."
                        spellcheck="false"
                        maxLength="500"
                        />
                </div>

            </Draggable>

            <Draggable
                handle=".sticky-note-handle"
                bounds={bounds}
                defaultPosition={{x: 500, y: 320}}
                >
                    
                <div className="sticky-note">
                    <div className="sticky-note-handle" />
                    <h3><textarea className="sticky-note-title" defaultValue="Dust furniture" maxLength="30" /></h3>
                    <textarea
                        className="sticky-note-text sticky-note-s"
                        defaultValue="Every two weeks on a Sunday @ 5pm. Buy some new microfibre cloths soon. Don't forget to check behind the furniture!"
                        spellcheck="false"
                        maxLength="500"
                        />
                </div>

            </Draggable>

            </div>)}


        </div>
    )
}