/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import AdminHeader from '../adminComponent/AdminHeader';
import firedb from '../../firebase';

function Dashboard() {
  var [holder, setHolder] = useState();
  var [store, setStore] = useState();
  var [data, setData] = useState();
  var [filteredHolder, setFilteredHolder] = useState();

  function show() {
    firedb.child("Gallery").once("value", function (snapshot) {
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

  var s = {
    height: "100px",
    width: "100px"
  };

  function Del(key) {
    firedb.child("Gallery").child(key).remove();
    show();
  }

  return (
    <div id='paneladmin'>
      <AdminHeader />
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
                    <img style={s} src={filteredHolder[key].image} />
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