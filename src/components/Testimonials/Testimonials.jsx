import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      role: 'CEO, TechStart Indonesia',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmad&backgroundColor=8B5CF6',
      text: 'Muhammad Rifqi has shown exceptional talent in web development. His attention to detail and ability to learn new technologies quickly is impressive. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      role: 'Product Designer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=22D3EE',
      text: 'Working with Rifqi on our UI design project was a pleasure. He understands design principles well and translates them into clean, functional code.',
      rating: 5
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Content Creator',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=budi&backgroundColor=8B5CF6',
      text: 'The video editing work exceeded my expectations. Great communication, fast delivery, and professional quality throughout the project.',
      rating: 5
    },
    {
      id: 4,
      name: 'Diana Putri',
      role: 'Student',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=diana&backgroundColor=22D3EE',
      text: "Rifqi is an amazing teacher! Patient, knowledgeable, and really helps me understand programming concepts step by step. Best mentor I've had!",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>

        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-nav">
            <button className="testimonial-nav-btn" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className="testimonial-nav-btn" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
