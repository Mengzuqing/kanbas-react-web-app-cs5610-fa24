import "./index.css";
import React from 'react';
import Positions from "./Positions";
import ForegroundColores from "./ForegroundColors";
import BackgroundColores from "./BackgroundColores";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";


  export default function Lab2() {
    return (
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        <p>
          Style attribute allows configuring look and feel
          right on the element. Although it's very convenient
          it is considered bad practice and you should avoid
          using the style attribute
        </p>
        <p>
            Lore ipsum dolor,sit amet,consectrtur adipiscing elit.Nullam
        </p>

        
             {/* Selecting content with ID selectors*/}
        <div id="wd-css-id-selectors">
            <h3>ID selectors</h3>
            <p id="wd-id-selector-1">
    Instead of changing the look and feel of all the 
    elements of the same name, e.g., P, we can refer to a specific element by its ID
            </p>
            <p id="wd-id-selector-2">
    Here's another paragraph using a different ID and a different look and
            feel
            </p>
        </div>
              {/* Selecting content with class selectors */}
       

        <div id="wd-css-class-selectors">
            <h3>Class selectors</h3>
            <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an element's CLASS attribute
            </p>
            <h4 className="wd-class-selector">
            This heading has same style as paragraph above
            </h4>
        </div>

             {/* Selecting content based on the document structure*/}

        <div id="wd-css-document-structure">
            <div className="wd-selector-1">
                <h3>Document structure selectors</h3>
                <div className="wd-selector-2">
                Selectors can be combined to refer elements in particular
                places in the document
                <p className="wd-selector-3">
                    This paragraph's red background is referenced as
                    <br />
                    .selector-2 .selector3<br />
                    meaning the descendant of some ancestor.<br />
                    <span className="wd-selector-4">
                    Whereas this span is a direct child of its parent
                    </span><br />
                    You can combine these relationships to create specific 
                    styles depending on the document structure
                </p>
                </div>
            </div>
        </div>

              {/* frontground  */}
                <div>
                <ForegroundColores />
                </div>
        

                {/* background */}

                <div>
                <BackgroundColores />
                </div>
            
           

                {/* Block */}

            <h1 style={{backgroundColor: "yellow"}}>Block vs inline elements</h1>
            <p style={{
                 backgroundColor: "blue",
                 color:"white"}}>
                 Headings ... width
            </p>
                 Normal text renders inline
            <br/>
            <br/>

            <span style={{
                backgroundColor: "red", 
                color:"white"
                }}>
                Span elements
            </span>
            <span style={{backgroundColor: "red", color:"white"}}>
                render inline
            </span>
            with the rest of the content
         


          {/* Styling borders  */}
                <div>
                <Borders/>
                </div>
            

         {/* Styling paddings */}

                <div>
                <Padding/>
                </div>
            


         {/* Styling margins  */}
                <div>
                <Margins/>
                </div>
            

        {/* Styling corners  */}

                <div>
                <Corners/>
                </div>
            

         {/* Styling dimensions*/}
                <div>
                <Dimensions/>
                </div>

        {/* Styling  relative position  */}
                <div>
                <Positions />
                </div>

        {/* Styling z-index */}
                <div>
                <Zindex />
                </div>
       
        {/*  Floating Images and Content */}
                <div>
                <Float/>
                </div>
                 
        {/*  Laying out content in a grid */}
                 <div>
                <GridLayout/>
                </div>

        {/*  Laying out content in a grid */}
                <div>
                <Flex/>
                </div>
        
       











       
     </div>


     
  );}
  
  