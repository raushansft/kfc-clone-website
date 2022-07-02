import NavbarCareers from "./Navbar-careers";
import SimpleImageSlider from "react-simple-image-slider";
import "./carreers.css"

const images = [
    { url: "https://images.ctfassets.net/9tka4b3550oc/2gCjL7qPDqysOrgf3H9vAA/71487ce4241a79c730cafe3e4b312f84/cook.jpg?w=470" },
    { url: "https://images.ctfassets.net/9tka4b3550oc/3kEbJ6F1XBJUd1sa4dzhH2/2fce139fc9a6b19a4c4651062d811b16/kfc_customer_sevice.jpg?w=470" },
    { url: "https://images.ctfassets.net/9tka4b3550oc/4xLm9Q4797pqf7HpmC4saD/5802b9d05723df5b29e017c1510d5a97/shift-supervisor.jpg?w=470" },
];
const Careers = () => {
    return (
        <>
            <div id="subnavimg">
                <img src="https://images.ctfassets.net/9tka4b3550oc/5tRiGfQXCdlrlRXDVPWdYT/79fca81cf69dad4129d7f6c0e9c873f9/hero-careers.jpg?w=1680" alt="" />
            </div>
            <NavbarCareers></NavbarCareers>
            <div id="helo">

                <h1>BROWSE KFC OPPORTUNITIES IN YOUR AREA:</h1>
                <form>
                    <select name="" id="">
                        <option value="none">All Positions</option>
                        <option value="">Team Member</option>
                        <option value="">Shift Supervisor</option>
                        <option value="">Restaurant Assistant Manager</option>
                        <option value="">Restaurant General Manager</option>
                    </select>
                    <br />
                    <input type="text" placeholder="set location to find jobs"></input>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
            <div id="applysection">
                <h3>READY TO APPLY?</h3>
                <h1>CHOOSE A RESTURANT JOB </h1>
                <div id="imageslider">
                    <SimpleImageSlider
                        width={700}
                        height={500}
                        images={images}
                        loop={true}
                        autoPlay={true}
                        // showBullets={true}
                        showNavs={true}
                    />

                    {/* <img src="https://images.ctfassets.net/9tka4b3550oc/2gCjL7qPDqysOrgf3H9vAA/71487ce4241a79c730cafe3e4b312f84/cook.jpg?w=470" alt="" />
            <img src="https://images.ctfassets.net/9tka4b3550oc/3kEbJ6F1XBJUd1sa4dzhH2/2fce139fc9a6b19a4c4651062d811b16/kfc_customer_sevice.jpg?w=470" alt="" />
        <img src="https://images.ctfassets.net/9tka4b3550oc/4xLm9Q4797pqf7HpmC4saD/5802b9d05723df5b29e017c1510d5a97/shift-supervisor.jpg?w=470" alt="" /> */}
                </div>
                
        <hr />  
                {/* <h1>______________________________________________________________________________</h1> */}
            </div>
            <div id="subapplysection">
                <div>
                    <h3>RESTAURANT</h3>
                    <h1>INTERVIEW PROCESS</h1>
                    <p>At KFC, we know your time is valuable and want to prepare you for what is next! See what happens after you fill out an application for one of our Restaurant Opportunities. Note: Most KFC restaurants are operated by independent franchisees who have their own hiring and benefits guidelines. These requirements may vary by location, and you’ll learn more when you meet with the hiring manager.</p>
                    <hr />
                </div >
                <div>
                    <h3>01</h3>
                    <h1>APPLICATION</h1>
                    <p>Your application will be reviewed by the restaurant leader.</p>
                    <hr />
                </div>
                <div>
                    <h3>02</h3>
                    <h1>SCHEDULING</h1>
                    <p>One of the restaurant leaders will reach out to schedule an interview!</p>
                    <hr />
                </div>
                <div>
                    <h3>03</h3>
                    <h1>INTERVIEW</h1>
                    <p>You will meet with a restaurant leader to go over your experience and learn more about the job opening. Don’t be afraid to ask questions!</p>
                    <hr />
                </div>
            </div>
            <br />
            <div id="expert">
                <div>

                <img src="https://images.ctfassets.net/9tka4b3550oc/5f3MpBw3YhmwFQ2XrAWtaD/ccce597b56b28b5aa8f6a0b56f940a13/banner-quote-team-member.jpg?q=75&w=580" alt="" />
                </div>
                <div>
                <h1>"I AM EXPERIENCING NEW THINGS, LEARNING NEW SKILLS AND MEETING NEW PEOPLE. AND I’M WORKING AT A GREAT PLACE WITH GREAT PEOPLE."</h1>
                <p>Luis, Team Member, Overland Park, KS</p>
                    
                </div>
            </div>
            {/* <div>
                <h3>HOW WE'RE TAKING ACTION </h3>
                <h1>RESTAURN SAFETY</h1>
                <div>
                    <div>
                        <img src="https://images.ctfassets.net/9tka4b3550oc/tuRv0gAQWTbt5y9jlCxzN/ed54aadbd2dcd8fbaf6badc1812320f5/safety-masks.png" alt="" />
                        <h1>GLOVES AND MASKES</h1>
                        <p>KFC team members wear gloves and masks at all times, and receive daily wellness checks to ensure they are healthy and symptom-free.</p>
                    </div>
                    <div>
                        <img src="https://images.ctfassets.net/9tka4b3550oc/3sahcx6DPA8zLZ2HdmBUfi/372978462b9667185a5168f157c11293/safety-plexiglass.png" alt="" />
                        <h1>PLEXIGLASS</h1>
                        <p>KFC has installed plexiglass shields at cash registers as well as highly encouraging contactless payment.</p>
                    </div>
                    <div>
                        <img src="https://images.ctfassets.net/9tka4b3550oc/6hDYNfJJh13VftUurd4jcL/37e8dcbfd8a888318fa662bbdac9f6d9/safety-delivery.png" alt="" />
                        <h1>CONTACTLESS DELIVERY</h1>
                        <p>KFC provides contactless delivery and tamper-evident packaging seals for every meal prepared in our kitchens.</p>
                    </div>
                    <div>
                        <img src="https://images.ctfassets.net/9tka4b3550oc/5sevI5gTbB1WvOKYYP8noq/adfe3f2f8e9739d84b73b46debb01627/safety-handwashing.png" alt="" />
                        <h1>HAND WASHING</h1>
                        <p>KFC team members wash their hands every hour at minimum and have increased sanitization efforts in our restaurants.</p>
                    </div>
                </div>
            </div> */}
            <br />
            <br />
            <br />

            <div id="subexpert">
                <div>

                <img src="https://images.ctfassets.net/9tka4b3550oc/5IMyL8KmhVGl6fo77t7BT/041fbb0005c5862d06087cf2a456a8d6/banner-quote-safety.jpg?q=75&w=580" alt="" />
                </div>
                <div>
                <h1>"WORKING TOGETHER, WE CAN LIMIT THE SPREAD OF COVID-19 WHILE OFFERING CONVENIENT, AFFORDABLE FOOD IN A LOW CONTACT ENVIRONMENT."</h1>
                <p>David Gibbs, CEO of Yum! Brands.</p>

                </div>
            </div>
            <br />
            <br />
            <div style={{marginTop:"20px"}}>
                <img src="https://images.ctfassets.net/9tka4b3550oc/51fyOnDnrgeXWqP1B2Zsih/7d9b6da24b0c8ba9e84fcb2342539bda/banner-card-corporate-careers.jpg?q=75&w=1680" style={{ width: "100%" }} alt="" />
            </div>
               <div id="subarticle">
                <p>References to minimum age requirements are not applicable in any state where state or local law would prohibit a minimum age. Applicants must be able to lawfully perform all job tasks related to the role during all restaurant operating hours.</p>

               </div>
               <br />
            <div id="subsect">
                <h2>EXPLORE CAREER PATH</h2>
                <div>
                <img src="https://images.ctfassets.net/9tka4b3550oc/4Ib0hIQA7tdYuV3oBHHzqY/e1ad0a11c544279e1895f42eb72df68f/routing-careers-culture.jpg?w=640" alt="" />
                <img src="https://images.ctfassets.net/9tka4b3550oc/50tkcHRFTh0VgPIlhPRpIF/d28c820fc7f7bbbd26ae6ad1ad832cbe/routing-careers-growth.jpg?w=640" alt="" />
                </div>
            </div>
        </>
    )
}



export default Careers
