import React from "react";

function BookingComp({ setOrigin, setDestination, handleShowDirections }) {
  const handleBookClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleShowDirections(); // Call the function to show directions on the map
  };

  return (
    <>
      <div className="rounded-lg shadow-md w-full max-w-md overflow-hidden" id="bookingForm">
        <div className="flex border-b">
          <button
            id="outstationBtn"
            className="flex-1 py-4 px-4 text-center focus:outline-none transition-colors duration-200 ease-in-out"
            data-type="outstation"
          >
            <i className="fas fa-taxi text-2xl mb-2 text-green-500"></i>
            <div className="text-sm font-semibold">Economic</div>
          </button>
          <button
            id="airportBtn"
            className="flex-1 py-4 px-4 text-center focus:outline-none transition-colors duration-200 ease-in-out"
            data-type="airport"
          >
            <i className="fas fa-plane-departure text-2xl mb-2 text-green-500"></i>
            <div className="text-sm font-semibold">Standard</div>
          </button>
        </div>
        <form id="bookingForm" className="p-10 space-y-20">
          


          <div className="space-y-4">
            <div>
              <label htmlFor="pickup" className="block text-xs text-green-600 mb-1">
                <i className="fas fa-map-marker-alt text-green-400 mr-1"></i> Pick-Up
                Location
              </label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                placeholder="Enter Origin"
                required
                onChange={(e) => setOrigin(e.target.value)} // Update origin state
                className="w-full p-2 border rounded text-sm focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="pickup" className="block text-xs text-green-600 mb-1">
                 Enter Number Of Bag
              </label>
              <input
                type="number"
                id="pickup"
                name="pickup"
                placeholder="e.g 1"
                required
                onChange={(e) => setOrigin(e.target.value)} // Update origin state
                className="w-full p-2 border rounded text-sm focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="date" className="block text-xs text-green-600 mb-1">
                Pick-Up Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full p-2 border rounded text-sm focus:outline-none focus:border-green-500 pl-8"
                />
                <i className="fas fa-calendar-alt absolute left-2 top-1/2 transform -translate-y-1/2 text-green-400"></i>
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="time" className="block text-xs text-green-600 mb-1">
                Select Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="w-full p-2 border rounded text-sm focus:outline-none focus:border-green-500 pl-8"
                />
                <i className="fas fa-clock absolute left-2 top-1/2 transform -translate-y-1/2 text-green-400"></i>
              </div>
            </div>
            
          </div>
           <div className="paymaent">
           <div class="col-12 px-4">
                       
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Qty</p>
                            <p class="fs-14 fw-bold">1</p>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Subtotal</p>
                            <p class="fs-14 fw-bold"><span class="fas fa-dollar-sign pe-1"></span>1,450</p>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Shipping</p>
                            <p class="fs-14 fw-bold">Free</p>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <p class="textmuted">Promo code</p>
                            <p class="fs-14 fw-bold">-<span class="fas fa-dollar-sign px-1"></span>100</p>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <p class="textmuted fw-bold">Total</p>
                            <div class="d-flex align-text-top ">
                                <span class="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span><span class="h4">1,350</span>
                            </div>
                        </div>
                        
                        
                    </div>
           </div>

          <button
            type="button" // Set type to button to prevent default form submission
            onClick={handleBookClick} // Call the custom click handler
            className="w-full py-3 px-4 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-orange-600 transition duration-200 ease-in-out"
          >
            Book
          </button>
        </form>
      </div>
    </>
  );
}

export default BookingComp;
