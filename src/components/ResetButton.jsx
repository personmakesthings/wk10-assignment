// DIRECTIVE
"use client"

// COMPONENT
export default function ResetButton() {
    function reset() {
        let deleteClicked = confirm("This will reset the position of all windows on the website. Are you sure you want to do this?")
            if (deleteClicked === true){
                console.log("OK on delete button clicked")
                localStorage.clear()
                location.reload()
            } 
        }

    return (
        <button className="reset-btn" onClick={reset}>Reset Windows</button>
    )
}