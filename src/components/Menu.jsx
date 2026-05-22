import "./Menu.css";

const menuItems = [
  {
    category: "Beverages ☕",
    title: "Espresso",
    description: "Bold single-shot coffee with rich crema.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Beverages ☕",
    title: "Cappuccino",
    description: "Classic foam-topped favorite with silky texture.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Beverages ☕",
    title: "Latte",
    description: "Smooth espresso with steamed milk and artful finish.",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Breakfast 🥞",
    title: "Pancakes",
    description: "Fluffy pancakes served with maple syrup and berries.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Breakfast 🥞",
    title: "Omelette",
    description: "Farm-fresh eggs with herbs and melted cheese.",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Breakfast 🥞",
    title: "Avocado Toast",
    description: "Crunchy sourdough topped with ripe avocado blend.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Snacks 🥪",
    title: "Sandwich",
    description: "Grilled layered sandwich with fresh vegetables.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Snacks 🥪",
    title: "Burger",
    description: "Juicy gourmet burger with a toasted brioche bun.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "Snacks 🥪",
    title: "Fries",
    description: "Golden, crispy fries with house seasoning.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80"
  }
];

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          Breakfast Menu
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          Curated selections across beverages, breakfast, and snacks prepared with
          premium ingredients.
        </p>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article
              key={`${item.title}-${item.category}`}
              className="menu-card"
              data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="menu-card-content">
                <p className="menu-category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="menu-price">₹{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
