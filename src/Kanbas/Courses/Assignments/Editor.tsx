export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">
            <strong>Assignment Name</strong>
            </label>
        <br />
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        {/* Description */}
     
        <textarea id="wd-description" rows={8} cols={50}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, a link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
  
        <table>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <br />
  
          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">Assignments</option>
                <br />

                {/* Add more options as needed */}
              </select>
            </td>
          </tr>
          <br />
  
          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                
                {/* Add more options as needed */}
              </select>
            </td>
          </tr>
          <br />
  
          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                {/* Add more options as needed */}
              </select>
            </td>
          </tr>
          <br />
            {/* Online Entry Options */}
            <tr>
                {/* Empty cell for alignment */}
                <td></td>
                {/* "Online Entry Options" label and checkboxes */}
                <td>
                    <label style={{ display: "block", marginBottom: "5px" }}>Online Entry Options</label>
                    <input type="checkbox" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                    <input type="checkbox" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label><br />
                    <input type="checkbox" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                    <input type="checkbox" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                    <input type="checkbox" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Upload</label>
                </td>
                </tr>

        <br />
        <br />

          
           {/* Assign To */}
        <tr>
          <td>
          </td>
          <td>
            
         
          <label htmlFor="wd-assign-to">Assign</label>
       
          <label htmlFor="wd-assign-to" style={{ display: "inline", marginLeft: "5px" }}>Assign to</label><br />
        
          <input id="wd-assign-to" type="text" value="Everyone" /><br /><br />
          </td>
        </tr>

        
  
         {/* Due Date */}
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date" style={{ display: "block", marginBottom: "5px" }}>Due</label>
            <input id="wd-due-date" type="date" value="2024-05-13" /><br /><br />
          </td>
        </tr>
  

          {/* Available From */}
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from" style={{ display: "inline-block", marginRight: "30px" }}>Available from</label>
            <label htmlFor="wd-available-until" style={{ display: "inline-block", marginRight: "100px" }}>Until</label><br />
            
            <input id="wd-available-from" type="date" value="2024-05-06" style={{ marginRight: "5px" }} />
            <input id="wd-available-until" type="date" value="2024-05-20" /><br /><br />
          </td>
        </tr>
  
                    
            {/* Cancel and Save Buttons */}
            <tr>
                    <td></td>
                    <td style={{ textAlign: "right" }}>
                        <button type="button" style={{ marginRight: "3px" }}>Cancel</button>
                        <button type="submit">Save</button>
                    </td>
                    </tr>
                </table>
                </div>
            );
            }
    