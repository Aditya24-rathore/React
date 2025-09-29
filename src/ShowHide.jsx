import React, { useState } from "react";

 function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
        {show && <p>Aditya.</p>}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>

      
    </div>
  );
}
export default ShowHide