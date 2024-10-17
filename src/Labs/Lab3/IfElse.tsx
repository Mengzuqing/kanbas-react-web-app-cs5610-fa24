export default function IfElse() {
    let true1 = true, false1 = false;
  
    return (
      <div id="wd-if-else">
        <h4>If Else</h4>
        {/* If true1 is true, render 'true1' */}
        {true1 && <p>true1</p>}
  
        {/* Use ternary operator to display '!false1' or 'false1' */}
        {!false1 ? <p>!false1</p> : <p>false1</p>}
  
        <hr />
      </div>
    );
  }
  