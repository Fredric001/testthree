import React from 'react'
import BookingComp from './Components/BookingComp'
import AppBarComp from './Components/AppBarComp'
import FooterComp from './Components/FooterComp'
import Profile from './Components/Profile'



function ClientOrderPage() {
  return (
    <div>
      <AppBarComp/>
      
      <div className='Orderpage'>
      <Profile/>
      <BookingComp/>
      </div>
      <FooterComp/>
      
    </div>
  )
}

export default ClientOrderPage
