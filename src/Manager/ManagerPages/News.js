import React, { useEffect, useState } from "react";
import firedb from "../../firebase";
import "./News.css";

function News() {
  const [holder, setHolder] = useState({});
  const [path, setPath] = useState("");

  const [user, setUser] = useState({
    Image: "",
    title: "",
    date: ""
  });

  /* ===== INPUT ===== */
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  /* ===== IMAGE ===== */
  function handleImage(e) {
    if (!e.target.files[0]) return;

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      setPath(reader.result);
      setUser({ ...user, Image: reader.result });
    };
  }

  /* ===== SAVE ===== */
  function save() {
    if (!user.title || !user.Image) {
      alert("Please fill all fields");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const data = { ...user, date: currentDate };

    firedb.child("News").push(data);

    alert("News created successfully");

    setUser({ Image: "", title: "", date: "" });
    setPath("");

    show();
  }

  /* ===== FETCH ===== */
  function show() {
    firedb.child("News").once("value", (snapshot) => {
      setHolder(snapshot.val() || {});
    });
  }

  useEffect(() => {
    show();
  }, []);

  /* ===== DELETE ===== */
  function Del(key) {
    firedb.child("News").child(key).remove();
    show();
  }

  return (
    <div className="news-page">

      <h2>News</h2>

      {/* ===== FORM ===== */}
      <div className="news-form">
        <input type="file" onChange={handleImage} />

        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          value={user.title}
          onChange={handleChange}
        />

        <button onClick={save} id="bn">Add News</button>
      </div>

      {/* ===== PREVIEW ===== */}
      {path && (
        <div className="preview">
          <img src={path} alt="preview" />
        </div>
      )}

      {/* ===== TABLE ===== */}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(holder).map((key) => (
              <tr key={key}>
                <td>
                  <img src={holder[key].Image} alt="" />
                </td>
                <td>{holder[key].title}</td>
                <td>{holder[key].date}</td>
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

export default News;