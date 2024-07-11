// DIRECTIVE
"use client"

// IMPORT
import React from "react"
import Draggable from "react-draggable"

import "./demo-styles.css"


export default function Demo005() {
    return (
        <div className="bidirectional">
            <Draggable handle=".left-right" bounds=".bounds" axis="x">
                <div className="left-right">
                    <div><h4>Left-right movement</h4></div>
                </div>
            </Draggable>

            <Draggable handle=".up-down" bounds=".bounds" axis="y">
                <div className="up-down">
                    <div><h4>Up-down movement</h4></div>
                </div>
            </Draggable>
        </div>
        )
}