import React from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecyclingIcon from '@mui/icons-material/Recycling';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import DangerousIcon from '@mui/icons-material/Dangerous';

function ServiceComp() {
  return (
    <div>
        <br />
        <br />
        <br />
      <h1>Our Services</h1>
    <div class="services-container">
        <div class="service-card">
            <div class="icon-container">
                <DeleteSweepIcon/>
            </div>
            <h3> 1. Residential Garbage Collection</h3>
            <p>
           
            MobiBin provides reliable garbage collection services for households, ensuring your living spaces remain clean and hygienic. Whether it's kitchen waste, paper, or general trash, we collect and dispose of it responsibly. Enjoy peace of mind with our timely and eco-friendly pickup services tailored for your convenience.</p>
            {/* <a href="#" class="button">Learn More</a> */}
        </div>

        <div class="service-card">
            <div class="icon-container">
                <PropaneTankIcon/>
            </div>
            <h3>2. Sewage Tank Emptying</h3>
            <p>
            
            Our professional sewage collection service ensures your septic tanks are emptied safely and efficiently. Using advanced equipment, we handle both small and large-scale sewage needs without causing any inconvenience. Trust MobiBin for hygienic and eco-conscious waste disposal that complies with safety standards.</p>
            {/* <a href="#" class="button">Learn More</a> */}
        </div>

        <div class="service-card">
            <div class="icon-container">
                <LocalShippingIcon/>
            </div>
            <h3>3. Commercial Waste Collection</h3>
            <p>
            
            MobiBin caters to businesses, restaurants, and offices, providing custom garbage collection solutions. We manage everything from paper waste and packaging materials to food waste, ensuring your premises stay clean. Our flexible scheduling options make it easy to maintain a professional and hygienic environment for your staff and customers.</p>
            {/* <a href="#" class="button">Learn More</a> */}
        </div>

        <div class="service-card">
            <div class="icon-container">
                <RecyclingIcon/>
            </div>
            <h3>4. Recyclable Waste Pickup</h3>
            <p>
            
            We help you contribute to environmental sustainability by collecting recyclable materials like plastic, glass, metal, and paper. MobiBin ensures these items are transported to recycling facilities for proper processing. Reduce your carbon footprint with our efficient and eco-friendly waste pickup services.</p>
            {/* <a href="#" class="button">Learn More</a> */}
        </div>

        <div class="service-card">
            <div class="icon-container">
                <EventBusyIcon/>
            </div>
            <h3>5. Event Waste Management</h3>
            <p>
            
            Hosting an event? MobiBin has you covered with tailored waste collection solutions for gatherings of any size. From small parties to large public events, we provide bins and timely pickups to keep your event space spotless. Let us handle the waste so you can focus on making your event a success.</p>
            {/* <a href="#" class="button">Learn More</a> */}
        </div>

        <div class="service-card">
            <div class="icon-container">
               <DangerousIcon/>
            </div>
            <h3> 6. Hazardous Waste Disposal</h3>
            <p>
           
            Dispose of hazardous waste safely with MobiBin's specialized services. We handle medical waste, batteries, chemicals, and other dangerous materials with utmost care and compliance with environmental regulations. Protect your community and the environment with our expert hazardous waste collection solutions.</p>
            {/* <a href="#" class="button">Learn More</a> */}
        </div>
    </div>
    </div>
  )
}

export default ServiceComp
