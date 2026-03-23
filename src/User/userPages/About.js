import React, { useEffect, useState } from 'react'
import firedb from "../../firebase"
import "./About.css"

function About() {

  const [data, setData] = useState(null);

  useEffect(() => {
    firedb.child("Manager").once("value", (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData({});
      }
    });
  }, []);

  return (
    <div id='about'>
      <h2>Our Team</h2>

      <ul id='a1'>

        {data && Object.keys(data).length > 0 ? (
          Object.keys(data).map((manager) => {
            const item = data[manager];

            return (
              <li className='m2' key={manager}>
                <img 
                  src={item.Image} 
                  alt={item.email} 
                />

                {/* Better display */}
                <h3>{item.name || item.email}</h3>

                <p className="role">
                  {item.role || "Manager"}
                </p>
              </li>
            )
          })
        ) : (
          <p className="no-data">No team members found</p>
        )}

      </ul>
    </div>
  )
}

export default About