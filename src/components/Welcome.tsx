import { useEffect, useState } from "react";

function Welcome() {
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 400);
  }, [])

  return (
    <div className='Welcome'>
      <i className={`fa-solid fa-hand-peace ${welcome && "fa-shake"}`}></i>
      <h1>hi there!</h1>
    </div>
  );
}

export default Welcome;