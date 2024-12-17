import React from 'react'
import {Tab, Tabs } from 'react-bootstrap'



function MyStrategies() {
  return (
    <div>
        <section className="table-header">
        <h1>My strategies</h1>
      </section>

    <Tabs
   
  >
    <Tab className="strategy-wall" eventKey="home" title="EURUSD">
      <h2>EURUSD</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7D30CWdUNxyRyqBH5YSTMz5gOdkUYS8Ybw&s" alt="EURUSD" />
    </Tab>
    <Tab className="strategy-wall" eventKey="profile" title="GBPUSD">
    <h2>GBPUSD</h2>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5NANrxbFH5h-lW-lBaoPaa3AWfjH16am1g&s" alt="GBPUSD" />      
    </Tab>
    <Tab className="strategy-wall"eventKey="contact" title="XAUUSD">
    <h2>XAUUSD</h2>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UxoUKZnsOSgwhabYBAt_saT7d3Yl12akYg&s" alt="XAUUSD" />
    </Tab>
  </Tabs>
  </div>
  )
}

export default MyStrategies