/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import firedb from '../../firebase';
import "./Adminvideo.css"

function Dashboard() {
  var [holder, setHolder] = useState();
  var [store, setStore] = useState();
  var [data, setData] = useState();
  var [filteredHolder, setFilteredHolder] = useState();

  function show() {
    firedb.child("Video").once("value", function (snapshot) {
      setHolder(snapshot.val());
      setFilteredHolder(snapshot.val());
    });
  }

  function info() {
    firedb.child("Manager").once("value", function (snapshot) {
      setStore(snapshot.val());
    });
  }

  function set(e) {
    setData(e.target.value);
    filterData(e.target.value);
  }

  function filterData(uploader) {
    if (uploader === 'All' || !uploader) {
      setFilteredHolder(holder);
    } else {
      const filteredData = {};
      Object.keys(holder).forEach(key => {
        if (holder[key].uploader === uploader) {
          filteredData[key] = holder[key];
        }
      });
      setFilteredHolder(filteredData);
    }
  }

  useEffect(function () {
    show();
    info();
  }, []);

 

  function Del(key) {
    firedb.child("Video").child(key).remove();
    show();
  }

  return (
    <div>
      <h1>Data uploaded</h1>
      <select onChange={set} value={data}>
        <option>All</option>
        {store ? Object.keys(store).map(function (key) {
          return (
            <option key={key}>{store[key].email}</option>
          );
        }) : ""}
      </select>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <th> Images </th>
            <th>uploaded by</th>
            <th>upload time</th>
            <th> Operation </th>
          </thead>
          <tbody>
            {filteredHolder ? Object.keys(filteredHolder).map(function (key) {
              return (
                <tr key={key}>
                  <td>
                     <iframe  src={filteredHolder[key].ID} title="Video Preview"></iframe>
                  </td>
                  <td>{filteredHolder[key].uploader}</td>
                  <td>{filteredHolder[key].uploadedAt}</td>
                  <td>
                    <button id='btng' onClick={() => Del(key)}>delete</button>
                  </td>
                </tr>
              );
            }) : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;