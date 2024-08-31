import React, { Fragment, useEffect, useRef, useState } from "react";
import "./WhatsApp.css";
import { Link } from "react-router-dom";
import logo14 from "../Assets/Group 1000001764.svg";
import celetelapp from "../Assets/celetelapp.svg";
import logo16 from "../Assets/mainpglast.svg";
import logo18 from "../Assets/Content.svg";
import one from "../Assets/1.svg";
import two from "../Assets/2.svg";
import three from "../Assets/3.svg";
import four from "../Assets/5.jpg";
import five from "../Assets/6.jpg";
import six from "../Assets/7.jpg";

// import { motion, AnimatePresence } from 'framer-motion';

// const variants = {
//   hidden: {
//     opacity: 0,
//     x: -50 // Slide from left to right
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: 'spring',
//       duration: 0.75
//     }
//   },
//   exit: {
//     opacity: 0,
//     x: 50, // Slide from left to right while exiting
//     transition: {
//       type: 'spring',
//       duration: 0.75
//     }
//   }
// };


export function WhatsApp() {

  const innerRefTestimonial = useRef(null);

  useEffect(() => {
    innerRefTestimonial.current.classList.add("testimonial-animation");
  }, []);

  const testimonials = [
    {
      text: "The team at this company was extremely knowledgeable and experienced. They were able to provide me with valuable insights and suggestions on how to improve my current marketing strategy.",
      image: one,
      alt: "Stage",
    },

    {
      text: "Communication with the team was always prompt and professional. They were always available to answer any questions I had and provided regular updates on the progress of my marketing campaigns.",
      image: two,
      alt: "Vapp",
    },

    {
      text: "RCS from Celetel has taken our messaging to the next level. The interactive features and rich media engagement have enhanced our brand's visibility and customer interactions.Also it has boosted our sales exponentially",
      image: three,
      alt: "Ibizo",
    },
    {
      text: "I took SMS service from Celetel,  It helped me massively in growing my business. Also, the team is fabulous as they are always there to suggest me growth plans on my business, it feels like family to be with.",
      image: four,
      alt: "Nkosi",
    },
    {
      text: "I have been in connection with Celetel from last 2 years, It is a great experience, no other organization have understood my needs as they have. Whenever I need any communication service Celetel is my first priority.",
      image: five,
      alt: "Musa",
    },
    {
      text: "This organization is providing some different level of services every service is available at minimal pricings and quality is superfine. I would recommend every business to connect with this organization if you are a player of long run.",
      image: six,
      alt: "Tesfaye",
    },
  ];

  const [openState, setOpenState] = useState(true);
  const codeToCopyRef = useRef(null);

  const handleOpenApi = () => {
    setOpenState(false);
  };
  const handleOpen2Api = () => {
    setOpenState(true);
  };

  const [copyText, setCopyText] = useState('Copy');

  const [backgroundColor, setBackgroundColor] = useState("#E2DDFF");

  const handleCopy = async () => {
    try {
      const codeToCopy = codeToCopyRef.current.innerText;
      await navigator.clipboard.writeText(codeToCopy);
      setCopyText('Copied');
      setBackgroundColor("#FFB000");
      setTimeout(() => {
        setCopyText('Copy');
        setBackgroundColor("#E2DDFF");
      }, 3000);
    } catch (err) {
      console.error('Unable to copy', err);
    }
  };


  const whatsappOne =
    " https://celetelassets.s3.ap-south-1.amazonaws.com/gif/Flow+12%403x-50fps.gif";
  const whatsappTwo =
    "https://celetelassets.s3.ap-south-1.amazonaws.com/gif/Flow+13%403x-50fps.gif";

  return (
    <Fragment>
      <div className="main_whatsapp">
        <div className="sub_whatsapp">
          <img src={whatsappOne} alt="" />
        </div>
        <div className="para_sol2">
          <h1>
            Reach, Engage, and Convert with Seamless WhatsApp Messaging
            Strategies"
          </h1>
          <p>
            Discover a revolutionary way to connect with your audience through
            WhatsApp marketing
          </p>
          <Link to={"/connectwhatsapp"}>
            <button>Explore</button>
          </Link>
        </div>
      </div>

      <div className="main_whatsapp1">
        <div className="para_sol3">
          <h1>
            Elevate Engagement with RCS Messaging: The Future of Interactive
            Communication
          </h1>
          <p>
            Redefine how you engage with your audience using RCS messaging, the
            next-generation of interactive communication
          </p>
          <Link to={"/connectrcs"}>
            <button>Explore</button>
          </Link>
        </div>
        <div className="sub_whatsapp1">
          <img src={whatsappTwo} alt="" />
        </div>
      </div>

      <div className="potential_tech">
        <div className="p_potential">
          <h1>Unlocking Potential with Celetel</h1>
          <p style={{ marginTop: "20px" }}>
            Explore the limitless possibilities of effective communication with
            Celetel as your trusted partner. Let's unlock your business's full
            potential, together.
          </p>
          <img src={logo14} alt="" />
        </div>

        <div className="technical_p_1">
          <div className="new_tech">
            <div className="tech_1">
              <h1>01</h1>
              <h3>Innovators by Nature</h3>
              <p>
                We empower businesses with the versatile Communication Platform
                as a Service (CPaas) model, enabling seamless integration of
                multiple communication channels. From SMS to Voice
              </p>
            </div>

            <div className="tech_1">
              <h1>02</h1>
              <h3>Global Reach, Local Impact</h3>
              <p>
                Our telecom signalling expertise ensures messages are routed
                efficiently, optimising delivery for every interaction.
              </p>
            </div>
            <div className="tech_1">
              <h1>03</h1>
              <h3>Customer-Centric</h3>
              <p>
                Whether you're looking to leverage the impact of A2P SMS,
                harness the engagement potential of IVR, or explore the rich
                media experience of RCS Celetel equips you with solutions that
                resonate with your audience. 02
              </p>
            </div>
            <div className="tech_1">
              <h1>04</h1>
              <h3>Unleashing Value- Added Services</h3>
              <p>
                Enhance customer engagement and satisfaction through our
                Value-Added Services, adding an extra layer of value to your
                offerings and interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="api_sdk">
        <div className="api_sdk_para">
          <h1>
            Build with confidence and boost your business - with just a few
            lines of code
          </h1>
          <p>
            Our SDKS and APIs are tried and true! Choose your preferred code
            language - we'll adapt. Whatever it is you want to build, we're here
            to make it as easy as possible. Get started in no time with our
            extensive developer documentation and intuitive tutorials!
          </p>
          <div className="btn3">
            <button>
              <a href="https://docs.celetel.com/">Explore</a>
            </button>
            {/* <button>Explore</button> */}
          </div>
        </div>

        <div className="api_sdk_im">
          <div className="api_1">
            <ul style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <li onClick={handleOpenApi} style={{ backgroundColor: openState ? '' : '#E2DDFF', padding: '8px 15px', cursor: "pointer" }}>Java</li>
              <li onClick={handleOpen2Api} style={{ backgroundColor: openState ? '#E2DDFF' : '', cursor: "pointer", padding: '8px 15px' }}>JSON</li>
            </ul>
            <p onClick={handleCopy} style={{ backgroundColor, padding: "8px 15px", cursor: "pointer" }}>
              {copyText}
            </p>
          </div>
          {!openState ? (
            <Fragment>
              <div className="" ref={codeToCopyRef}>
                <p style={{ marginTop: "20px" }}>
                  package example;
                  <br /> <br />
                  <p>
                    import com.Celetel.xms.{" "}
                    <span style={{ color: "blue" }}> ApiConnection;</span>{" "}
                  </p>
                  <p>
                    {" "}
                    import com.Celetel.xms.{" "}
                    <span style={{ color: "blue" }}> CeletelSMSApi;;</span>
                  </p>
                  <p>
                    import com.Celetel.xms.api.{" "}
                    <span style={{ color: "blue" }}> GroupResult;</span>
                  </p>
                  <p>
                    import com.Celetel.xms.api.{" "}
                    <span style={{ color: "blue" }}> MtBatchTextSmsResult;</span>
                  </p>
                </p>

                <p style={{ marginTop: "20px" }}>public class Example</p>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "blue" }}> private static</span> final
                  String SERVICE_PLAN_ID = "SERVICE_PLAN_ID";
                </p>
                <p>
                  <span style={{ color: "blue" }}> private static</span> ffinal
                  String TOKEN="SERVICE_TOKEN";
                </p>
                <p>
                  <span style={{ color: "blue" }}> private static</span> private
                  static final String[] RECIPIENTS = "1232323131", "3213123";
                </p>
                <p>
                  <span style={{ color: "blue" }}> private static</span> final
                  String SENDER = "SENDER";
                </p>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div style={{ marginTop: "20px" }} ref={codeToCopyRef}>
                "type": "text",
                <br />
                "auth":{" "}
                <span style={{ color: "blue" }}>
                  ""username": "testuser", "password": "testpassword"
                </span>
                ,
                <br />
                "sender":<span style={{ color: "blue" }}>"BulkTest"</span> ,
                <br />
                "receiver": <span style={{ color: "blue" }}>
                  "4179123456",
                </span>{" "}
                <br />
                "dcs": <span style={{ color: "blue" }}>"GSM"</span>
                <br />
                "text":{" "}
                <span style={{ color: "blue" }}>This is test message</span>
                <br />
                "dlrMask": <span style={{ color: "blue" }}>19</span>
                <br />
                "dlrUrl":{" "}
                <span style={{ color: "blue" }}>
                  "http://my-server.com/dlrjson.php"
                </span>{" "}
                <br />
              </div>
            </Fragment>
          )}
        </div>
      </div>

      <div className="new_status_conf">
        <div className="new_img_conf">
          <img src={celetelapp} alt="" />
        </div>
        <div className="new_para_conf">
          <h1>One step solution with Celetel app</h1>
          <p style={{ marginTop: "20px" }}>
            Welcome to Celetel's SMS Solutions, where we transform simple text
            messages into powerful communication tools that connect businesses
            with their audience like never before. With our suite of SMS
            services, we provide the foundation for engaging, effective, and
            efficient messaging strategies.
          </p>
        </div>
      </div>
      <div className="care_and_share">
        <div className="care_1">
          <img src={logo16} alt="" />
        </div>
        <div className="new_care1">
          <h1 style={{ fontSize: "42px" }}>We don't share because we care</h1>
          <p style={{ marginTop: "20px", paddingRight: "45px" }}>
            We know that data privacy and security is the prime concern . Data
            is the seed for growth , and that's why we don't share our cloud
          </p>
        </div>
      </div>

      <div className="care_and_share2">
        <div className="new_care2">
          <h1>We don't share because we care</h1>
          <img src={logo16} alt="" />
          <p style={{ marginTop: "20px" }}>
            We know that data privacy and security is the prime concern . Data
            is the seed for growth , and that's why we don't share our cloud
          </p>
        </div>
      </div>

      <div className="testimony_review">
        <h1> Trusted by Thousands of Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>


      {/* <div className="testimonials_new_cards">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              className="cards_testimonials"
            >
              <span>{testimonial.text}</span>
              <div className="cards_test_content">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                />
                <p>{testimonial.alt}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div> */}


      <div className="testimonials_new_cards">
        <div className="testimonials_container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={innerRefTestimonial}
              initial="hidden"
              className="cards_testimonials"
            >
              <span>{testimonial.text}</span>
              <div className="cards_test_content">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
                <p>{testimonial.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="used_by">
        <h1>Proud to Be Used By</h1>
        <p>
          Professional cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-levelling customer service for state of
          the art customer service{" "}
        </p>
        <img src={logo18} alt="" />
      </div>
    </Fragment>
  );
}
