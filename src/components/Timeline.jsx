import Wrapper from '../assets/Timeline';

const Timeline = () => {
  return (
    <Wrapper>
      <section className="section timeline">
        {/* section title  */}
        <div className="section-title">
          <h2>Faqs</h2>
          <div className="underline"></div>
        </div>
        {/* end of section title  */}
        <div className="section-center timeline-center">
          {/* single timeline item  */}
          <article className="timeline-item">
            <h4>How Do I Open A New Account?</h4>
            <p>
              You can open a new account online through our website, visit any
              of our branches, or contact customer service for assistance.
            </p>
            <span className="number">1</span>
          </article>
          {/* end of  single timeline item  */}
          {/* single timeline item  */}
          <article className="timeline-item">
            <h4>What Do I Need To Open An Account?</h4>
            <p>
              To open an account, you will need a valid government-issued ID,
              proof of address, and your Social Security number or Tax
              Identification Number. Additional documentation may be required
              for specific account types.
            </p>
            <span className="number">2</span>
          </article>
          {/* end of  single timeline item  */}
          {/* single timeline item  */}
          <article className="timeline-item">
            <h4>How Can I Check My Account Balance?</h4>
            <p>
              You can check your account balance through our online banking
              platform.
            </p>
            <span className="number">3</span>
          </article>
          {/* end of  single timeline item  */}
          {/* single timeline item  */}
          <article className="timeline-item">
            <h4>How Do I Apply For A Loan?</h4>
            <p>
              You can apply for a loan online, in person at a branch, or by
              contacting our loan officers. Visit our website for more details
              on the loan application process.
            </p>
            <span className="number">4</span>
          </article>
          {/* end of  single timeline item  */}
          {/* single timeline item  */}
          <article className="timeline-item">
            <h4>How Do I Set Up A Wire Transfer?</h4>
            <p>
              You can set up a wire transfer by visiting a branch or through our
              online banking platform. You will need the recipient banking
              information and the amount to be transferred.
            </p>
            <span className="number">5</span>
          </article>
          {/* end of  single timeline item  */}
          {/* single timeline item  */}
          <article className="timeline-item">
            <h4>Is Online Banking Secure?</h4>
            <p>
              Yes, we use advanced encryption and security measures to protect
              your information. Ensure you use strong passwords and monitor your
              account regularly for any suspicious activity.
            </p>
            <span className="number">6</span>
          </article>
          {/* end of  single timeline item  */}
        </div>
      </section>
    </Wrapper>
  );
};
export default Timeline;
