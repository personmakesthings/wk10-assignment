// DIRECTIVE
"use client"

// IMPORT
import React from "react"
import Draggable from "react-draggable"

// IMPORT STYLES
import "./demo-styles.css"

// COMPONENT
export default function Demo002() {
    return (
        <Draggable handle=".drag-me" bounds=".bounds">
            <div className="small-box">
                <div className="drag-me"><h4>Click on me and help me escape this window!</h4></div>
                <p>The class for this window I am within has been selected as my bounds, so I can't escape it!</p>
                <p>Noooooooooooooooooooooooo!!!!!</p>
            </div>
        </Draggable>
        )
}