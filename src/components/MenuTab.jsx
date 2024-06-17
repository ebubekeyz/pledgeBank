import { useState } from 'react';
import Wrapper from '../assets/MenuTab';

const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: '/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: '/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: '/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: '/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: '/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: '/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: '/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: '/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: '/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const MenuTab = () => {
  const [menuItem, setMenuItem] = useState(menu);

  const allCategories = [
    'all',
    ...new Set(menuItem.map((menu) => menu.category)),
  ];

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  console.log(allCategories);

  return (
    <Wrapper>
      {' '}
      <main>
        <section className="menu">
          <div className="title">
            <h4>Our Menu</h4>
            <div className="title-underline"></div>
          </div>

          <div className="btn-container">
            {categories.map((category) => {
              return (
                <button
                  type="button"
                  className="btn"
                  key={category}
                  onClick={() => filterItems(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="section-center">
            {menuItem.map((item) => {
              const { img, title, price, desc, id } = item;
              return (
                <article key={id} className="menu-item">
                  <img src={img} alt={title} className="img" />
                  <div className="item-info">
                    <header>
                      <h5>{title}</h5>
                      <span className="item-price">${price}</span>
                    </header>
                    <p className="item-text">{desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </Wrapper>
  );
};
export default MenuTab;
