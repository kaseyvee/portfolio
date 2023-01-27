const About: React.FC<{ loading: boolean }> = (props) => {
  return (
    <div className="modal">
      <div className="About">
        <img
          src="https://avatars.githubusercontent.com/u/111031789?v=4"     
          alt="me"
        />
        <div className="bio">
          <div>
            Hello! I'm based in Vancouver, BC, transitioning from a background in chemistry.
            <br />
            <br />
            My love for web development leans towards the front-end and executing clean and minimalist designs. My current creative outlet is styling CSS from scratch.
          </div>
          <p>
            - cool bean in dublin, summer 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;