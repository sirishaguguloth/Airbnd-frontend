import React from 'react'
import '../styles/homes.css';
import img from '../assests/home-img.webp';
export default function Homes() {
  return (
    <div className='Homes'>

  <div className="page1">
      <div className="part1">
        <div className="part1head">
        <h2>Airbnb it.</h2>
        <h3>You could earn</h3>
        </div>
      </div>
      <div className="part2">Home</div>
  </div>
  
 <div className="page2">
    <h2 style={{fontWeight:"600"}}>Airbnb it easily with Airbnb Setup</h2>
    <div className="img" >
        <img src={img} alt="IMG" height={500} width={1000} />
    </div>
    <div className="imgcontent">
        <div className="cont1">
            <h5>One-to-one guidance from a Superhost</h5>
            <p>
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p>
        </div>
        <div className="cont1">
            <h5>An experienced guest for your first booking</h5>
            <p>
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p></div>
        <div className="cont1">
            <h5>Specialised support from Airbnb</h5>
            <p>
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p></div>
        </div>  
    </div>

    <div className="page3">
    <div className="page3ban">
        <h1 style={{fontWeight:"bolder",fontSize:"3rem"}}>
       <span className="banhead">air</span><span>cover</span></h1>
       <small style={{marginLeft:"4rem"}}>for Hosts</small>
       <div className="banheading"><h2>Airbnb it with top‑to‑bottom protection</h2></div>
    </div>
    </div>
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th className='airbnb-head'></th>
            <th>Airbnb</th>
            <th>Competitors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="1" className="divider-row">
            <p className='tdhead'>Guest identity verification</p>
              Our comprehensive verification system
              checks details such as name, address,
              government ID and more to confirm the identity
              of guests who book on Airbnb.
            </td>
            
            <td className="divider-row1">1</td>
            <td>2</td>
          </tr>
          <tr>
            <td colSpan="1" className="divider-row">
            <p className='tdhead'>Guest identity verification</p>
              Our comprehensive verification system
              checks details such as name, address,
              government ID and more to confirm the identity
              of guests who book on Airbnb.
            </td>
            
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td colSpan="1" className="divider-row">
              <p className='tdhead'>Guest identity verification</p>
              Our comprehensive verification system
              checks details such as name, address,
              government ID and more to confirm the identity
              of guests who book on Airbnb.
            </td>
            
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>


    </div>
  )
}
