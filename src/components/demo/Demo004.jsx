// DIRECTIVE
"use client"

// IMPORT
import React from "react"
import Draggable from "react-draggable"

import "./demo-styles.css"


export default function Demo004() {
    return (
        <Draggable handle=".move-me" bounds=".bounds">
            <div className="small-box">
                <div className="move-me"><h4>Take a look at the cursor as you move me around!</h4></div>
                <p>I appear as four arrows, pointing up, down, left, and right!</p>
            </div>
        </Draggable>
        )
}