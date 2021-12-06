import React from 'react'
import './Dashboard.css'
function Dashboard() {
    return (
        <>
           <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="dashboardHeading">

            <h1>Your Booking</h1>
              </div>

            </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="tableDashboard">
                  <table class="table table-bordered border-dark">
  <thead className="table-dark">
    <tr>
      <th scope="col">EVENT</th>
      <th scope="col">DATE</th>
      <th scope="col">TIME</th>
      <th scope="col">LOCATION</th>
      <th scope="col">BOOKING STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Decor</th>
      <td>11/10/2020</td>
      <td>4:00pm</td>
      <td>Lahore</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>Photography</th>
      <td>11/10/2020</td>
      <td>4:00pm</td>
      <td>Lahore</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>Catering</th>
      <td>11/10/2020</td>
      <td>3:00pm</td>
      <td>Lahore</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>

                  </div>

              </div>

          </div>
          </div>
        </>
    )
}

export default Dashboard
