import { useState } from "react";
import { Badge } from "../Badge";

const Contact: React.FC<{ loading: boolean }> = (props) => {
  const [emailSent, setEmailSent] = useState(false);

  function handleSendEmail() {
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 3000);
  }

  return (
    <div className="modal">
      <div className="Contact">
        {!emailSent &&
          <>
          <h2>coffee chat? - <a href="mailto:kaseyvaldez98@gmail.com?subject=Hello Cool Person!">kaseyvaldez98@gmail.com</a></h2>
          <form>
            <input placeholder="name"/>
            <input placeholder="email"/>
            <textarea placeholder="hey kasey! what do you think of my new song idea- it goes: oooo wah ah ah ah yayayaya heyooo *bag pipes*"/>
          </form>
          <Badge text="send" handleSendEmail={handleSendEmail}/>
        </>}
        {emailSent && <div className="thanks">thanks for your message :)</div>}
      </div>
    </div>
  );
}

export default Contact;