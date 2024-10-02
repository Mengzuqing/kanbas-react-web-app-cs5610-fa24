import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      {/* Dashboard Title */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      {/* Dashboard Courses */}
      <div id="wd-dashboard-courses" className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Card 1 */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home"
              >
                <img
                  src="/images/bule.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4450 12631 Web Development...
                  </h5>
                
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                     CS4550.12631.202410
                  </h6>
                 

                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>

                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home"
              >
                <img
                  src="/images/deepbule.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4450 19753 Web Development...
                  </h5>
                
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                     CS4550.19753.202410
                  </h6>
                 

                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>

                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 3  */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/91011/Home"
              >
                <img
                  src="/images/green2.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5610 11550 Web Development...
                  </h5>

                  <h6 className="card-subtitle mb-2 text-body-secondary">
                  CS5610.11550.202410
                  </h6>

                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>

                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 4  */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1112/Home"
              >
                <img
                  src="/images/green.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5610 17387 WebDevelopment...
                  </h5>
                
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                  CS5610.17387.202410
                  </h6>

                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>


                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

         {/* Card 5 */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1112/Home"
              >
                <img
                  src="/images/pink.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5610 17387 WebDevelopment ...
                  </h5>
                 
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                  CS5610.17387.202410
                  </h6>
                    
                 
                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>

                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 6  */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1112/Home"
              >
                <img
                  src="/images/purple.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5610 17387 WebDevelopment...
                  </h5>
              
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                  CS5610.17387.202410
                  </h6>
     
                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>

                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>


          {/* Card 7  */}
          <div className="wd-dashboard-course col" style={{ minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1112/Home"
              >
                <img
                  src="/images/red.jpg"
                  alt="Course Thumbnail"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5610 17387 WebDevelopment...
                  </h5>
    
            
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                  CS5610.17387.202410
                  </h6>

                  <p className="card-text"><small className="text-body-secondary" 
                    style={{ fontSize: '11px' }}>
                    202410_1 Fall 2024 Semester Full Team
                  </small></p>

                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}
