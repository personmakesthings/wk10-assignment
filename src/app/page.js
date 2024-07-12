// IMPORT
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'


// IMPORT COMPONENTS
import ResetButton from '@/components/ResetButton'
import ReadOn from '@/components/ReadOn'
import DraggableWindow from "@/components/DraggableWindow"
import Demo001 from '@/components/demo/Demo001'
import Demo002 from '@/components/demo/Demo002'
import Demo003 from '@/components/demo/Demo003'
import Demo004 from '@/components/demo/Demo004'
import Demo005 from '@/components/demo/Demo005'
import PhotoBoard from '@/components/demo/PhotoBoard'
import StickyNotes from '@/components/demo/StickyNotes'



// PAGE
export default function Home() {

  // WINDOW 001
  const content001 = (
    <div>
      <ul className="list">
        <li>The bar at the top of this window is a <i>handle</i> that makes the window <b>draggable</b>! Have a go at dragging this window around the display!</li>
          <ul>
            <li>Since this is a demonstration of draggable elements, plenty more elements in this app will be draggable and interactive. Feel free to play around with them!</li>
          </ul>
        <li>Click the <b>tabs at the bottom</b> to open and close each window.</li>
        <li>Click the <b><span style={{color: 'green'}}>green circle</span></b> to collapse the window's content. Click it again to re-open the content view.</li>
        <li>Click the <b><span style={{color: 'red'}}>red circle</span></b> to close the window.</li>
        <li>The <b>position and visibility</b> of some windows are <b>saved in your browser</b> as you use this demo.</li>
        <ul>
          <li>Click the <b>"Reset Window" button</b> in the bottom-right corner to reset the display to default.</li>
        </ul>
      </ul>
      <p>Ready? Click any tab in the toolbar below and take a look around!</p>
    </div>
  )




  // WINDOW 002
  const title002 = (
    <div>
      Introduction: What is <code>React-Draggable</code> and where do I begin with it?
    </div>
  )

  const content002 = (
    <div className="bounds">
      <p>
        <code>React-Draggable</code> is a simple component package for handling <b>draggable elements</b> in React applications.
      </p>

      <p>The package provides us with a <code>{`<Draggable>`}</code> element which we can wrap around other elements. This gives the wrapped elements with event handlers to change their position using CSS transforms.</p>

      <p>This is the sole utility the package provides. How it is implemented is left entirely to the developer. It can be used to create anything, from a simple, single movable element, to sprawling boards of sticky notes.</p>
      
      <p>The drag movement function in this web app has also been achieved using <code>react-draggable</code>. It has primarily been used to make movable windows to present this demo.</p>

      <h3 className="h3-space">How To Install</h3>
      <p>The package is available on the npm Registry and can be installed into your project with <code>npm install</code>.</p>
      <SyntaxHighlighter style={solarizedlight}>
    {
      `
      npm install react-draggable
      `
    }
      </SyntaxHighlighter>



      <h3 className="h3-space">Importing into your project</h3>
      <p><code>react-draggable</code> imports:</p>
      <SyntaxHighlighter language="jsx" style={solarizedlight}>
    {
      `
      import React from "react";
      import Draggable from "react-draggable";
      `
    }
      </SyntaxHighlighter>

      <p>
        The <code>{`<Draggable>`}</code> component takes advantage of state and classes in React. If you wish to use the package in Next.js, you must also make any component that uses <code>React-Draggable</code> client-side rendered with the <code>"use client"</code> directive.
      </p>

      <p>Basic element set-up:</p>

      <SyntaxHighlighter language="jsx" style={solarizedlight}>
    {
      `
      export default function DraggableDemo() {
        return (
        <Draggable handle=".drag-me" bounds=".bounds">
            <div className="small-box">
                <div className="drag-me"><h4>Click and hold this title to drag this box!</h4></div>
                <p>
                  I am some text that appears below the draggable handle.
                  This text area cannot be clicked to drag this element.
                </p>
            </div>
        </Draggable>
        )
      }
      `
    }
      </SyntaxHighlighter>
      
      <p>The component takes a single child element (e.g. a <code>{`<div>`}</code>) with no siblings, just like any other JSX code. More child elements can be nested under it.</p>
      
      <p>All descendants within <code>{`<Draggable>`}</code> are dragged together.</p>

      <h3 className="h3-space">Demo (have a try!)</h3>
      <Demo001 />

      <h3 className="h3-space">Key Point 1: How do we determine which child element lets us drag our <code>{`<Draggable>`}</code> component?</h3>

      <p>The component <code>{`<Draggable>`}</code> has a prop called <code>handle</code>, which is used to determine <b>which part of a draggable element has a clickable drag function</b>. We give the element we want to be able to click on to add drag functionality a class, and then specify that class in the <code>handle</code> prop.</p>
      
      <p>In the above example, we have a <code>{`<div>`}</code>, which has the text "Click on me to drag the element!". We have given this <code>{`<div>`}</code> the class <code>drag-me</code>, and specified this class in our <code>handle</code> prop. Due to this, it can be clicked on to drag our draggable element.</p>
      
      <p>The code below the <code>{`<div>`}</code> is not draggable, as it has no associated class specified in the <code>handle</code> prop.</p>

      <h3 className="h3-space">Key Point 2: How do we limit the range of range of movement for the draggable element?</h3>
      <p>There are numerous ways of achieving this.</p>
      <p>For this demo, we're specifically going to limit the movement by choosing the selector of an element to restrict movement within.</p>

      <SyntaxHighlighter language="jsx" style={solarizedlight}>
    {
      `
      export default function DraggableDemo() {
        return (
        <Draggable handle=".drag-me" bounds=".bounds">
            <div className="small-box">
                <div className="drag-me"><h4>Click on me and help me escape this window!</h4></div>
                <p>I have an element selected as my bounds, so I can't escape this window!</p>
                <p>Noooooooooooooooooooooooo!!!!!</p>
            </div>
        </Draggable>
        )
      }
      `
    }
      </SyntaxHighlighter>

      <p>You can see here that <code>{`<Draggable>`}</code> has a prop called <code>bounds</code>. This prop takes a selector, and restricts the range of movement of the draggable element within the area of that chosen selector.</p>

      <p>This selector can be any selector - the element name, ID or class. All can be used.</p>

      <p>Ideally, the chosen element should be a direct ancestor to the draggable child element.</p>

      <h3 className="h3-space">Try moving this element off this window:</h3>

      <Demo002 />



      <ReadOn />
      

    </div>
  )



  // WINDOW 003
    const content003 = (
      <div>
        <p>There are countless reasons why a developer may choose to implement draggable elements into their application.</p>
        <p>To give some very broad reasons why:</p>
        <ul>
          <li><b>Customisability: </b> The user has the ability to change the position and rearrange elements within a display area to their needs and liking. For example:</li>
                <ul>
                  <li>The user may wish to move the position of an element on the screen to make space for another element.</li>
                  <li>The user wish to rearrange items to view them in a different order, such as items on a list.</li>
                  <li>The user wish to adjust part of something that is selected, such as how my display picture is cropped on a social media website.</li>
                </ul>
            <li><b>Interactivity:</b> Draggable elements mimic the real-world experience of interacting with an object. This may make the user experience feel more natural and intuitive. Additionally, dynamic elements may simply feel more engaging and fun for the end user.</li>
              <ul>
                  <li>For example, a jigsaw puzzle mobile game may feel more natural and intuitive to play with the ability to drag a puzzle piece to wherever the user wishes.</li>
                </ul>
            <li><b>Touchscreen-friendly:</b></li>
              <ul>
                <li>The majority of devices connected to the web are touchscreen devices, such as your phone or tablet. These interfaces always require direct manipulation, therefore draggable elements within applications lend themselves naturally to touchscreen displays.</li>
              </ul>
        </ul>
        
        <h3 className="h3-space">What are some applications that take advantage of draggable elements?</h3>
        <p>Draggable elements are everywhere in modern web apps! Here are just a few examples of note:</p>
        <div className="horizontal-list">
          <ul>
            <li><b>Sticky Notes</b></li>
            <li><b>Image Boards</b></li>
            <li><b>Windows</b></li>
            <li><b>Widgets</b></li>
          </ul>
          <ul>
            <li><b>Kanban Boards</b></li>
            <li><b>File Managers</b></li>
            <li><b>Image Editors</b></li>
            <li><b>Diagram Makers</b></li>
          </ul>
          <ul>
            <li><b>To-Do-Lists</b></li>
            <li><b>Interactive Whiteboards</b></li>
            <li><b>List Creators</b></li>
            <li><b>Mind Map Creators</b></li>
          </ul>
        </div>

        <p>...and many, many more!</p>

        <ReadOn />

      </div>
    )


    // WINDOW 004
    const content004 = (
      <div>
        <h3>Further Reading & Documentation</h3>
        <ul>
          <li>
            <p><code>react-draggable</code> | Docs on NPM: <a href="https://www.npmjs.com/package/react-draggable" target="_blank">https://www.npmjs.com/package/react-draggable</a></p>
          </li>
          <li>
            <p><code>react-draggable</code> | Docs on GitHub: <a href="https://github.com/react-grid-layout/react-draggable" target="_blank">https://github.com/react-grid-layout/react-draggable</a></p>          
          </li>
          <li>
            <p><code>react-draggable</code> | Demo: <a href="http://react-grid-layout.github.io/react-draggable/example/" target="_blank">http://react-grid-layout.github.io/react-draggable/example/</a></p>          
          </li>
          <li>
            <p><code>react-draggable</code> | A simple tutorial for creating your first draggable element: <a href="https://www.geeksforgeeks.org/how-to-add-draggable-components-in-next-js/" target="_blank">https://www.geeksforgeeks.org/how-to-add-draggable-components-in-next-js/</a></p>
          </li>
          <li>
            <p>MDN web docs | cursor CSS property : <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/cursor</a></p>
          </li>
          </ul>

          <h3 className="h3-space">Attributions</h3>
        <ul>
          <li>
            <p>Photos - Eberhard Grossgasteiger (via Pexels): <a href="https://www.pexels.com/@eberhardgross/" target="_blank">https://www.pexels.com/@eberhardgross/</a></p>
          </li>
          <li>
            <p>Grid Graphic - Art 192 (via Vecteezy): <a href="https://www.vecteezy.com/vector-art/4719323-grid-over-horizontal-rectangle-paper-size-6x4-inch-or-postcard-size" target="_blank">https://www.vecteezy.com/vector-art/4719323-grid-over-horizontal-rectangle-paper-size-6x4-inch-or-postcard-size</a></p>
          </li>
          </ul>
        </div>
    )

    const content007 = (
      <div className="bounds">
        <h3>Indicating draggability to the user</h3>

        <p>It is helpful to visually indicate to the user whether an element can be dragged and moved by them.</p>

        <p>For desktop users, a simple way of indicating that an element is draggable is to change the cursor icon style while the user hovers over or clicks the draggable element.</p>

        <p>This can be achieved very easily with CSS.</p>

        <SyntaxHighlighter language="css" style={solarizedlight}>
    {
      `
      /* While the user hovers over the element */
      .draggable-element-01 {cursor: grab;}

      /* While the user is actively clicking on and dragging the element */
      .draggable-element-01:active {cursor: grabbing;}
      `
    }
      </SyntaxHighlighter>

      <p>This results in the following effect:</p>
      <Demo003 />

      <h3 className="h3-space">Another style: <code>cursor: move;</code></h3>

      <p>We can also use the move cursor, which indicates that an element can be moved and dragged with a cursor showing four arrows in four directions.</p>

      <SyntaxHighlighter language="css" style={solarizedlight}>
      {
      `
      /* While the user hovers over and clicks on the element */
      .draggable-element-03 {cursor: move;}
      `
      }
      </SyntaxHighlighter>

      <p>This appears as follows:</p>

      <Demo004 />

      <h3 className="h3-space">If the element can only be moved across one axis</h3>
      
      <p>There are also cursor styles we can use to indicate bidirectional movement:</p>

      <SyntaxHighlighter language="css" style={solarizedlight}>
      {
      `
      /* Left-right movement (x-axis) */
      .left-right {cursor: ew-resize;}

      /* Up-down movement (y-axis) */
      .up-down {cursor: ns-resize;}
      `
      }
      </SyntaxHighlighter>

      <p>This CSS code sets the cursor styles to <code>ew-resize</code> for left-right movement (x-axis), and <code>ns-resize</code> for up-down movement (y-axis), indicating that the element's movement is restricted to those axes, respectively.</p>

      <p>Keep in mind, however, that these CSS styles do not restrict the movement of the draggable element itself. That must be specified separately - here, we have used the <code>{`<Draggable>`}</code> element prop and value <code>axis="x"</code> and <code>axis="y"</code>.</p>

      <p>Take a look:</p>

      <Demo005 />

      
      <ReadOn />


      </div>
    )


  return (
      <main className="boundary">
          <div className="menu-bar"></div>
          <ResetButton />

          <StickyNotes 
              winId="006"
              winVisibility={false}
              bounds="main"
              buttonTxt="Sticky Notes"
              />

          <PhotoBoard
              winId="005"
              winVisibility={false}
              bounds="main"
              buttonTxt="Photo Board"
              />


          <DraggableWindow
            winId="001"
            winTitle="Draggable Elements in React: How to use this demonstration"
            winContent={content001}
            winWidth={1000}
            winVisibility={true}
            winPosition={{x: 150, y: 10}}
            winBounds="main"
            buttonTxt="Help"
            />

          <DraggableWindow
            winId="004"
            winTitle="Links"
            winContent={content004}
            winWidth={800}
            winHeight={300}
            winVisibility={false}
            winPosition={{x: 250, y: 100}}
            winBounds="main"
            buttonTxt="Links"
            />

        <DraggableWindow
            winId="003"
            winTitle="Why would I want to make an element within my application draggable?"
            winContent={content003}
            winWidth={1000}
            winHeight={550}
            winVisibility={false}
            winPosition={{x: 150, y: 0}}
            winBounds="main"
            buttonTxt="Why Draggable Elements?"
            />

        <DraggableWindow
            winId="002"
            winTitle={title002}
            winContent={content002}
            winWidth={1000}
            winHeight={500}
            winVisibility={false}
            winPosition={{x: 150, y: 0}}
            winBounds="main"
            buttonTxt="React-Draggable"
            />

        <DraggableWindow
            winId="007"
            winTitle="User Experience Considerations With Draggable Elements"
            winContent={content007}
            winWidth={1000}
            winHeight={500}
            winVisibility={false}
            winPosition={{x: 150, y: 0}}
            winBounds="main"
            buttonTxt="UX Considerations"
            />

      </main>
  )
}
