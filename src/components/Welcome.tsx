import { useEffect, useState } from "react";

function Welcome() {
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 200);
  }, [])

  return (
    <div className='Welcome'>
      <i className={`fa-solid fa-hand-peace ${welcome && "fa-shake"}`}></i>
      <h1>why hello</h1>
    </div>
  );
}

export default Welcome;