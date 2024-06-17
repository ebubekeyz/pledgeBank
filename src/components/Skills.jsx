import Wrapper from '../assets/Skills';

const Skills = () => {
  return (
    <Wrapper>
      <section className="section skills">
        {/* section title  */}
        <div className="section-title">
          <h2>Our Values</h2>
          <div className="underline"></div>
        </div>
        {/* end of section title  */}
        <div className="section-center skills-center">
          <article>
            {/* <h3>front end</h3> */}
            {/* single skill  */}
            <div className="skill">
              <p>Integrity</p>
              <div className="skill-container">
                <div className="skill-value"></div>
                <p className="skill-text">100%</p>
              </div>
            </div>
            {/* end of  single skill  */}
            {/* single skill  */}
            <div className="skill">
              <p>Customer Focus</p>
              <div className="skill-container">
                <div className="skill-value"></div>
                <p className="skill-text skill-text-70">100%</p>
              </div>
            </div>
            {/* end of  single skill  */}
            {/* single skill  */}
            {/* <div className="skill">
              <p>React</p>
              <div className="skill-container">
                <div className="skill-value value-80"></div>
                <p className="skill-text skill-text-80">80%</p>
              </div>
            </div> */}
            {/* end of  single skill  */}
          </article>
          <article>
            {/* <h3>back end</h3> */}
            {/* single skill  */}
            <div className="skill">
              <p>Innovation</p>
              <div className="skill-container">
                <div className="skill-value"></div>
                <p className="skill-text">100%</p>
              </div>
            </div>
            {/* end of  single skill  */}
            {/* single skill  */}
            <div className="skill">
              <p>Community Commitment</p>
              <div className="skill-container">
                <div className="skill-value"></div>
                <p className="skill-text skill-text-70">100%</p>
              </div>
            </div>
            {/* end of  single skill  */}
            {/* single skill  */}
            {/* <div className="skill">
              <p>Python</p>
              <div className="skill-container">
                <div className="skill-value value-80"></div>
                <p className="skill-text skill-text-80">80%</p>
              </div>
            </div> */}
            {/* end of  single skill  */}
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
export default Skills;
