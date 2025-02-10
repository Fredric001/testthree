import React from 'react'
import AppBarComp from './Components/AppBarComp'
import FooterComp from './Components/FooterComp'
import Profile from './Components/Profile'
import BookingComp from './Components/BookingComp'
import MapComp from './Components/MapComp'
import BookClientComp from './Components/BookClientComp'
import { useState } from 'react'


function OrderPage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDirections, setShowDirections] = useState(false);

  // Function to trigger displaying directions
  const handleShowDirections = () => {
    setShowDirections(true); // Trigger direction rendering
  };
  return (
    <div>
      <AppBarComp/>
     <div className='Orderpage'>
     <Profile/>
      <BookClientComp setOrigin={setOrigin}
        setDestination={setDestination}
        handleShowDirections={handleShowDirections} />
      <MapComp origin={origin}
        destination={destination}
        showDirections={showDirections}/>
     </div>
      <FooterComp/>
    </div>
  )
}

export default OrderPage
