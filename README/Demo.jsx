// DIRECTIVE - required if using Next.js
"use client"

// IMPORT
import React from "react"
import Draggable from "react-draggable"

// COMPONENT
export default function ReactDraggableDemo() {
    return (
        <Draggable handle=".handle">
            <div className="small-box">
                <div className="handle"><h4>Click and hold this title to drag this box!</h4></div>
                <p>I am some text that appears below the draggable handle. This text area cannot be clicked to drag this element.</p>
            </div>
        </Draggable>
    )
}

