import { Faqs as Faq } from '../components';

const Faqs = () => {
  return (
    <div>
      <img
        src="/faq.jpg"
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />
      <Faq />
    </div>
  );
};
export default Faqs;
