import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firedb from "../../firebase";

function ManagerLogout() {

  const navigate = useNavigate();

  useEffect(() => {
    // clear firebase data
    firedb.child("Data")
      .child("-Oibg9KUQyakg5dY-r6p")
      .update({ email: "" });

    // redirect to home/login
    navigate("/");
  }, []);

  return null;
}

export default ManagerLogout;