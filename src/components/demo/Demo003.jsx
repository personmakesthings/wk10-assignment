// DIRECTIVE
"use client"

// IMPORT
import React from "react"
import Draggable from "react-draggable"

import "./demo-styles.css"


export default function Demo003() {
    return (
        <Draggable handle=".drag-me" bounds=".bounds">
            <div className="small-box">
                <div className="drag-me"><h4>Take a look at the cursor as you hover over and click on me!</h4></div>
                <p>I change from a hand hovering over the element, to a hand that is grabbing the element.</p>
            </div>
        </Draggable>
        )
}