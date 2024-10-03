import React from 'react';
// import logo from './logo.svg';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    }
  ]

  const servicesLinks =[
    {
      path: '../assets/img/services/3.jpg',
      name: 'service-heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    },
    {
      name: 'service-heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    },
    {
      name: 'service-heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    }

  ]

  const aboutLinks =[
    {
      path: '../assets/img/about/1.jpg',
      leftDate: '2009-2011',
      leftTitle: 'Our Humble Beginnings',
      leftDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',

    },
    {
      path: '../assets/img/about/2.jpg',
      rightDate: 'March 2011',
      rightTitle: 'An Agency is Born',
      rightDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',

    },
    {
      path: '../assets/img/about/3.jpg',
      leftDate: 'December 2015',
      leftTitle: 'Transition to Full Service',
      leftDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',

    },
    {
      path: '../assets/img/about/4.jpg',
      rightDate: 'July 2020',
      rightTitle: 'Phase Two Expansion',
      rightDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',

    }
  ]

  const teamLinks =[
    {
      // eslint-disable-next-line no-template-curly-in-string
      path: 'assets/img/team/1.jpg',
      name: 'Larry Parker',
      title: 'Lead Developer'
    },
    {
      path: 'assets/img/team/2.jpg',
      name: 'Parveen Anand',
      title: 'Lead Designer'
    },
    {
      path: 'assets/img/team/3.jpg',
      name: 'Diana Petersen',
      title: 'Lead Marketer'
    }
  ]

  const contactUsLinks =[
    {
      title: 'Your name',
      required: 'A name is required.',
      validation: 'Name is not valid'
    },
    {
      title: 'Your address',
      required: 'Address is required.',
      validation: 'Address is not valid'
    },
    {
      title: 'Your Email',
      required: 'An email is required.',
      validation: 'Email is not valid'
    },
    {
      title: 'Your Phone',
      required: 'A phone number is required.',
      validation: 'Phone is not valid'
    }
  ]

  return (
    <div className="App">

      <Home></Home>

      <Services servicesLinks={servicesLinks}></Services>
      
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <About aboutLinks={aboutLinks}></About>

      <Team teamLinks={teamLinks}></Team>

      <ContactUs contactUsLinks={contactUsLinks}></ContactUs>

      <Footer></Footer>
    </div>
  );
}

export default App;