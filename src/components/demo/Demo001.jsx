// DIRECTIVE
"use client"

// IMPORT
import React from "react"
import Draggable from "react-draggable"

// IMPORT STYLES
import "./demo-styles.css"

// COMPONENT
export default function Demo001() {
    return (
        <Draggable handle=".drag-me" bounds=".bounds">
            <div className="small-box">
                <div className="drag-me"><h4>Click and hold this title to drag this box!</h4></div>
                <p>I am some text that appears below the draggable handle. This text area cannot be clicked to drag this element.</p>
            </div>
        </Draggable>
    )
}
