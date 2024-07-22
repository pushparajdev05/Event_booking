import React from 'react'

function Home() {
  return (
      <div id="home">
          <div className="img">
              <div className="event-desc">
                    <h4 className='h1'>Event Management</h4>
                    <div className="desc">
                        welcome to event management site and here's we streamline the job as in to book the ticket for particular event and it simplifies to manage the data of registered
                  </div>
                  <div className="get-started">
                      <li className="nav-item" style={{listStyle:"none",padding:"10px"}}>
                        <a className='nav-link' href="/Registeration">Get Started</a>
                    </li>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Home