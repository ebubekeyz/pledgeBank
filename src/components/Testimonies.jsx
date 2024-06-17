import { useEffect, useState } from 'react';
import Wrapper from '../assets/Testimonies';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const list = [
  {
    id: 1,
    image: '/person3.jpg',
    name: 'Emily R. - Personal Banking',
    title: 'office manager',
    quote:
      'I have been a customer of Pledge Bank for over 10 years, and I could not be happier with the service. The staff is always friendly and ready to help. I especially appreciate the convenience of their mobile banking app, which makes managing my finances on the go so easy. Plus, the interest rates on their savings accounts are among the best I have found. Highly recommend!',
  },
  {
    id: 2,
    image: '/person1.jpg',
    name: 'James T. - Business Banking',
    title: 'regular guy',
    quote:
      'Pledge Bank has been an invaluable partner for my small business. Their business checking account is straightforward and hassle-free, and the cash management services have streamlined our operations significantly. Whenever I have needed assistance, their customer service team has been prompt and professional. Thanks to [Bank Name], managing our finances has never been easier.',
  },

  {
    id: 3,
    image: '/person2.png',
    name: 'Micheal B. - Investment Services',
    title: 'the boss',
    quote:
      'I decided to move my investment accounts to Pledge Bank after a friend recommended their wealth management services. It is been a great decision. My financial advisor took the time to understand my goals and risk tolerance, and we have seen consistent growth in my portfolio. I feel confident that my financial future is in good hands.',
  },
];

const Testimonies = () => {
  const [people, setPeople] = useState(list);
  const [currentItem, setCurrentItem] = useState(0);

  const nextSlide = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem + 1) % people.length;
      return newItem;
    });
  };

  const prevSlide = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem - 1 + people.length) % people.length;
      return newItem;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [currentItem]);

  return (
    <Wrapper>
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <section className="slider-container">
        {people.map((person, personIndex) => {
          const { id, name, title, image, quote } = person;
          return (
            <article
              key={id}
              className="slide"
              style={{
                transform: `translateX(${100 * (personIndex - currentItem)}%)`,
                opacity: personIndex === currentItem ? 1 : 0,
                visibility: personIndex === currentItem ? 'visible' : 'hidden',
              }}
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              {/* <p className="title">{title}</p> */}
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </Wrapper>
  );
};
export default Testimonies;
