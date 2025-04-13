import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Highlights from './components/Highlights';
import Description from './components/Description';
import Location from './components/Location';
import TimingsAndPlans from './components/TimingsAndPlans';
import Trainers from './components/Trainers';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactCTA from './components/ContactCTA';
import ReviewModal from './components/ReviewModal';
import MembershipModal from './components/MembershipModal';

function App() {
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isMembershipModalOpen, setMembershipModalOpen] = useState(false);

  const handleReviewClick = () => {
    setReviewModalOpen(true);
  };

  const handleJoinClick = () => {
    setMembershipModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onReviewClick={handleReviewClick} />
      <Hero onJoinClick={handleJoinClick} />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <ImageCarousel />
        <Highlights />
        <Description />
        <TimingsAndPlans onJoinClick={handleJoinClick} />
        <Trainers />
        <Amenities />
        <Gallery />
        <Reviews onReviewClick={handleReviewClick} />
        <Location />
        <ContactCTA />
      </main>

      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setReviewModalOpen(false)} 
      />
      
      <MembershipModal 
        isOpen={isMembershipModalOpen} 
        onClose={() => setMembershipModalOpen(false)} 
      />
    </div>
  );
}

export default App;