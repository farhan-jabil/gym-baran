import "./css/common.css";
import Hero from "./components/Hero";
import Tips from "./components/Tips";
import Programs from "./components/Programs";
import Testimonial from "./components/Testimonial";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="category-space" />
      <Hero />
      <div className="category-space" />
      <Tips />
      <div className="category-space" />
      <Body />
      <div className="category-space" />
      <Programs />
      <div className="category-space" />
      <Testimonial />
      <div className="category-space" />
      <Footer />
    </>
  );
}

export default App;
