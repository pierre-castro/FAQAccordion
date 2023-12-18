import React from 'react'
import './FAQapp.css'

import star_icon from "../assets/images/icon-star.svg"
import Question from './Question'

const FAQapp = () => {
  return (
    <div className="container">
        <div className="top-bar">
            <img src={star_icon} alt="" />
            <h1>FAQs</h1>
        </div>
        <div className="question-container">
            <Question 
                question="What does this platform do, and how will it help me?" 
                answer="We provide front-end challenges that include professional web designs. These allow you to practice building websites in a realistic workflow. Taking these challenges will help you improve your skills, gain experience creating websites, and build up an incredible project portfolio. We also have a large community of developers, so it's a great way to meet other devs!"
            />
            <Question 
                question="Is it free?" 
                answer="The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference."
            />
            <Question 
                question="Can I use these projects in my portfolio?" 
                answer="Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
            />
            <Question 
                question="Can I use these projects in my portfolio?" 
                answer="Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
            />
            <Question 
                question="What are points for, and how does the points system work?" 
                answer="Your Mentor Score is a rough gauge of your reputation on the platform. Earning more points can boost your exposure within the community and get you on the Wall of Fame. Click Learn about our Wall of Fame on the Wall of Fame for all the information."
            />
        </div>

    </div>
  )
}

export default FAQapp