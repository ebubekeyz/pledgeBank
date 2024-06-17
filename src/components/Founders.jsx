import { useEffect, useState } from 'react';
import Wrapper from '../assets/Testimonies';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const list = [
  {
    id: 1,
    image: '/ceo1.jpeg',
    name: 'Britney Olivia',
    title: 'Co Founder & CEO',
    quote:
      'Britney Olivia was an investment analyst at the international Finance Corporation and an investment associate at Zephyr Management LP in the US. She holds an MBS from Harvard Business School.',
  },
  {
    id: 2,
    image: '/ceo2.jpg',
    name: 'John A. Smith',
    title: 'Manager',
    quote:
      'John’s career in banking spans over the years, during which he has accumulated extensive experience across various sectors of the financial industry. He began his career as a Financial Analyst, quickly rising through the ranks due to his keen analytical skills and strategic vision.',
  },
];

const Founders = () => {
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
        <h2>Our Founders</h2>
      </div>
      <section
        className="slider-container"
        style={{ margin: '0 auto', marginBottom: '4rem' }}
      >
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
              <p className="title">{title}</p>
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
export default Founders;
