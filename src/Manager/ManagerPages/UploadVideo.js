/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import firedb from "../../firebase";
import "./Video.css";

function UploadVideo() {
  const [Manager, setManager] = useState({});
  const [holder, setHolder] = useState({});
  const [record, setRecord] = useState([]);
  const [user, setUser] = useState("");

  /* ===== FETCH VIDEOS ===== */
  function show() {
    firedb.child("Video").once("value", (snapshot) => {
      setHolder(snapshot.val() || {});
    });
  }

  /* ===== FETCH MANAGER ===== */
  function show1() {
    firedb
      .child("Data")
      .child("-Oibg9KUQyakg5dY-r6p")
      .once("value", (snapshot) => {
        setManager(snapshot.val() || {});
      });
  }

  useEffect(() => {
    show();
    show1();
  }, []);

  /* ===== INPUT ===== */
  function handleChange(e) {
    setUser(e.target.value);
  }

  /* ===== CHECK LIMIT ===== */
  useEffect(() => {
    if (holder && Manager?.email) {
      const managerRecords = Object.keys(holder).filter(
        (key) => holder[key].uploader === Manager.email
      );
      setRecord(managerRecords);
    }
  }, [holder, Manager]);

  /* ===== SAVE ===== */
  function save() {
    if (!user) {
      alert("Enter video link");
      return;
    }

    if (record.length >= 2) {
      alert("You have already uploaded 2 videos.");
      return;
    }

    firedb.child("Video").push({
      ID: user,
      uploader: Manager.email,
      uploadedAt: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    });

    alert("Video uploaded");
    setUser("");
    show();
  }

  /* ===== DELETE ===== */
  function Del(key) {
    firedb.child("Video").child(key).remove();
    show();
  }

  return (
    <div className="video-page">

      <h2>Upload Video</h2>

      {/* ===== FORM ===== */}
      <div className="video-form">
        <input
          type="text"
          placeholder="Enter video link"
          value={user}
          onChange={handleChange}
        />

        <button onClick={save}>Upload</button>
      </div>

      {/* ===== TABLE ===== */}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Videos</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(holder).map((key) => (
              <tr key={key}>
                <td>
                  <iframe src={holder[key].ID}></iframe>
                </td>
                <td>
                  <button id="btng" onClick={() => Del(key)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default UploadVideo;