import './src/styles/global.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const onInitialClientRender = () => {
  AOS.init({
    // You can place your global AOS configurations here
    duration: 1000, // Example: Animation duration in milliseconds
    once: true, // Whether animation should happen only once - while scrolling down
    // Additional configurations can be added here
  });
};