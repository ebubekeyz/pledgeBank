import { useState } from 'react';
import Wrapper from '../assets/Faqs';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const Faqs = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);

  const handleShow2 = () => {
    setShow2(!show2);
  };
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);

  const handleShow3 = () => {
    setShow3(!show3);
  };

  const data = [
    {
      id: 1,
      text: ' What are your business hours?',
      handleShow: () => {
        setShow(!show);
      },
      text2:
        'Our branches are typically open from 9:00 AM to 5:00 PM, Monday through Friday. ',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show,
    },
    {
      id: 2,
      text: 'How can I contact customer service?',
      handleShow: () => {
        setShow2(!show2);
      },
      text2:
        'You can reach our customer service team by calling [Customer Service Number], emailing us at support.pledgebank@gmail.com, or using the live chat feature on our website.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show2,
    },
    {
      id: 3,
      text: 'How do I open a new account?',
      handleShow: () => {
        setShow3(!show3);
      },
      text2:
        'You can open a new account online through our website, visit any of our branches, or contact customer service for assistance.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show3,
    },
    {
      id: 4,
      text: 'What do I need to open an account?',
      handleShow: () => {
        setShow4(!show4);
      },
      text2:
        'To open an account, you will need a valid government-issued ID, proof of address, and your Social Security number or Tax Identification Number. Additional documentation may be required for specific account types.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show4,
    },
    {
      id: 5,
      text: 'How can I check my account balance?',
      handleShow: () => {
        setShow5(!show5);
      },
      text2:
        'You can check your account balance through our online banking platform, mobile app, by visiting a branch, or using one of our ATMs.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show5,
    },
    {
      id: 6,
      text: 'How do I reset my online banking password?',
      handleShow: () => {
        setShow6(!show6);
      },
      text2: 'You can also contact customer service for assistance.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show6,
    },
    {
      id: 7,
      text: 'What are the options for making a deposit?',
      handleShow: () => {
        setShow7(!show7);
      },
      text2:
        'You can make deposits via our ATMs, mobile check deposit through our app, in-branch, or through direct deposit from your employer',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show8,
    },
    {
      id: 8,
      text: 'How do I set up direct deposit?',
      handleShow: () => {
        setShow3(!show8);
      },
      text2:
        'Provide your employer with our bank routing number and your account number. You can find these details on your checks or by logging into your online banking account.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show8,
    },
    {
      id: 9,
      text: 'What are the options for making a deposit?',
      handleShow: () => {
        setShow9(!show9);
      },
      text2:
        'You can make deposits via our ATMs, mobile check deposit through our app, in-branch, or through direct deposit from your employer',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show9,
    },
    {
      id: 10,
      text: 'How do I apply for a loan?',
      handleShow: () => {
        setShow3(!show10);
      },
      text2:
        'You can apply for a loan online, in person at a branch, or by contacting our loan officers. Visit our website for more details on the loan application process.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show10,
    },
    {
      id: 11,
      text: 'What documents are required for a loan application?',
      handleShow: () => {
        setShow10(!show10);
      },
      text2:
        'Required documents typically include proof of income, employment verification, credit history, and personal identification. Specific requirements may vary by loan type.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show10,
    },
    {
      id: 12,
      text: 'How can I check the status of my loan application?',
      handleShow: () => {
        setShow11(!show11);
      },
      text2:
        'Log into your online account to check the status of your application, or contact your loan officer directly.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show11,
    },
    {
      id: 13,
      text: 'Is online banking secure?',
      handleShow: () => {
        setShow12(!show12);
      },
      text2:
        'Yes, we use advanced encryption and security measures to protect your information. Ensure you use strong passwords and monitor your account regularly for any suspicious activity.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show12,
    },
    {
      id: 14,
      text: 'What should I do if I suspect fraudulent activity on my account?',
      handleShow: () => {
        setShow13(!show13);
      },
      text2:
        'Contact our customer service immediately if you suspect any unauthorized transactions. We will assist you in securing your account and investigating the issue.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show13,
    },
    {
      id: 15,
      text: 'How can I protect myself from fraud?',
      handleShow: () => {
        setShow14(!show14);
      },
      text2:
        'Use strong, unique passwords for your accounts, monitor your account activity regularly, enable account alerts, and avoid sharing your personal information.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show14,
    },
    {
      id: 16,
      text: 'How do I set up a wire transfer?',
      handleShow: () => {
        setShow15(!show15);
      },
      text2:
        'You can set up a wire transfer by visiting a branch or through our online banking platform. You will need the recipient banking information and the amount to be transferred.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show15,
    },
  ];

  return (
    <Wrapper>
      <section className="questions">
        {/* title  */}
        <div className="title" style={{ marginTop: '2rem' }}>
          <h2>general questions</h2>
        </div>
        {/* questions  */}
        <div className="section-center">
          {/* single question  */}
          {data.map((item) => {
            const { id, text, text2, icon1, icon2, handleShow, show } = item;
            return (
              <article className="question" key={id}>
                {/* question title  */}
                <div className="question-title">
                  <p>{text}</p>
                  <button
                    onClick={handleShow}
                    type="button"
                    className="question-btn"
                  >
                    {!show ? (
                      <span className="plus-icon">{icon1}</span>
                    ) : (
                      <span className="minus-icon">{icon2}</span>
                    )}
                  </button>
                </div>
                {/* question text  */}
                {show && (
                  <div className="question-text">
                    <p>{text2}</p>
                  </div>
                )}
              </article>
            );
          })}
          {/* end of single question  */}
          {/* single question  */}
        </div>
        {/* end of single question  */}
      </section>
    </Wrapper>
  );
};
export default Faqs;
