import { useRef, useState } from "react";
import { Badge } from "../Badge";

declare namespace Email {
  type Attachment =
    | {
        name: string;
        path: string;
      }
    | {
        name: string;
        data: string;
      };

  interface EmailData {
    SecureToken: string;
    To: string | string[];
    From: string;
    Subject: string;
    Body: string;
  }

  function send(email: EmailData): Promise<string>;
}

const Contact: React.FC<{ loading: boolean }> = (props) => {
  const [emailSent, setEmailSent] = useState(false);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLTextAreaElement>(null);

  function handleSendEmail() {
    Email.send({
      SecureToken: "03ec791a-aedb-42ce-a112-63a6e149a1f2",
      To: 'kaseyvaldez98@gmail.com',
      From: `${email}`,
      Subject: `${subject}`,
      Body: `${body}`
  }).then(() => {
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 3000);
  });
  }

  return (
    <div className="modal">
      <div className="Contact">
        {!emailSent &&
          <>
          <h2>coffee chat? - <a href="mailto:kaseyvaldez98@gmail.com?subject=Hello Cool Person!">kaseyvaldez98@gmail.com</a></h2>
          <form>
            <input ref={email} placeholder="email"/>
            <input ref={subject} placeholder="subject"/>
            <textarea ref={body} placeholder="hey kasey! what do you think of my new song idea- it goes: oooo wah ah ah ah yayayaya heyooo *bag pipes*"/>
          </form>
          <Badge text="send" handleSendEmail={handleSendEmail}/>
        </>}
        {emailSent && <div className="thanks">thanks for your message :)</div>}
      </div>
    </div>
  );
}

export default Contact;