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
    if (email.current?.value && subject.current?.value && body.current?.value) {
      Email.send({
        SecureToken: '9e2fbd57-5019-4d89-89dd-0590821ca8cd',
        To: 'kaseyvaldez98@gmail.com',
        From: `kaseyvaldez98@gmail.com`,
        Subject: `${subject.current && subject.current.value}`,
        Body: `Message received from ${email.current && email.current.value}: ${body.current && body.current.value}`
    }).then((data) => {
      console.log(data)
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
      }, 3000);
    });
    }
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