import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BookClientComp() {
  return (
    <>
    <div class="dashboard">
       
        <div class="orders">
        <h1 id="activeOrders">Active Bin Collection</h1>
            <div class="order">
                <h3>Order #001</h3>
                <p><i class="fas fa-map-marker-alt"></i> Location: Nairobi CBD</p>
                <p><i class="fas fa-trash"></i> Waste Type: Garbage</p>
                <p><i class="fas fa-weight-hanging"></i> Volume: Medium (3-5 Bins)</p>
                <p><i class="fas fa-road"></i> Distance: 8 km</p>
                <p><i class="fas fa-money-bill-wave"></i> Payment: Ksh 2,300</p>
                <button class="accept-btn">Accept Order</button>
                <button class="accept-btn">Preview Order</button>
                <button class="complete-btn">Mark as Completed</button>
            </div>
            <div class="order">
                <h3>Order #002</h3>
                <p><i class="fas fa-map-marker-alt"></i> Location: Westlands</p>
                <p><i class="fas fa-water"></i> Waste Type: Sewage</p>
                <p><i class="fas fa-weight-hanging"></i> Volume: Full Tank</p>
                <p><i class="fas fa-road"></i> Distance: 12 km</p>
                <p><i class="fas fa-money-bill-wave"></i> Payment: Ksh 5,000</p>
                <button class="accept-btn">Accept Order</button>
                <button class="complete-btn">Mark as Completed</button>
            </div>
             <div class="order">
                <h3>Order #002</h3>
                <p><i class="fas fa-map-marker-alt"></i> Location: Westlands</p>
                <p><i class="fas fa-water"></i> Waste Type: Sewage</p>
                <p><i class="fas fa-weight-hanging"></i> Volume: Full Tank</p>
                <p><i class="fas fa-road"></i> Distance: 12 km</p>
                <p><i class="fas fa-money-bill-wave"></i> Payment: Ksh 5,000</p>
                <button class="accept-btn">Accept Order</button>
                <button class="complete-btn">Mark as Completed</button>
            </div>
        </div>
    </div>
    </>

  )
}

export default BookClientComp
