import React, { useState } from "react";
import "../styles/profile.scss";
import cover from "../images/cover.jfif";
import profile from "../images/profile.jfif";
import company_logo from "../images/company_logo.jfif";
import university from "../images/university.jpg";
import { MdOutlineEdit } from "react-icons/md";
import { BsGraphUp, BsDownload } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineUsergroupAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import jspdf from "jspdf";

const DownloadPage = () => {
  const [openModal, setOpenModal] = useState(false); // OPEN CLOSE MODAL STATE

  // DUMMY DATA OF USER - IT CAN BE API DATA ALSO
  const userDetails = {
    name: "Pankaj Yadav",
    mobile: "8295536***",
    email: "pankaj38@gmail.com",
    address: "Gurgaon, Haryana",
    companyName: "Intigate Technologies Pvt. Ltd. (Noida)",
  };

  // DOWNLOAD IN PDF FORMAT FUNCTION
  const downloadPdf = () => {
    var doc = new jspdf("portrait", "px", "a4", "false");
    doc.addImage(profile, "jfif", 60, 20, 80, 80);

    doc.setFontSize("13");
    doc.setTextColor("black");

    doc.text("Name:", 60, 130);
    doc.text("Mobile:", 60, 145);
    doc.text("Email:", 60, 160);
    doc.text("Address:", 60, 175);
    doc.text("Company:", 60, 190);

    doc.setFontSize("13");
    doc.setTextColor("gray");

    doc.text(userDetails.name, 120, 130);
    doc.text(userDetails.mobile, 120, 145);
    doc.text(userDetails.email, 120, 160);
    doc.text(userDetails.address, 120, 175);
    doc.text(userDetails.companyName, 120, 190);

    doc.setFontSize("8");
    doc.setTextColor("red");
    doc.text("Manually Written", 60, 270);
    doc.text(
      doc.splitTextToSize(
        "This is demo procedure of download .pdf in ReactJs. By this procedure, we create custom pdf and download it. In this .pdf we integrate 'Api Data' alos.",
        330
      ),
      60,
      280
    );

    doc.save("resume.pdf");

    setOpenModal(false);
  };

  return (
    <div className="profile__page">
      <div className="layout__container mt-0">
        <div className="cover__img__sec">
          <img src={cover} alt="cover" />
        </div>
        <div className="profile__picture">
          <img src={profile} alt="profile" />
        </div>
        <div className="user__name">
          <h3>
            Pankaj Yadav
            <span>
              <MdOutlineEdit />
            </span>
          </h3>
        </div>
        <div className="user__details__sec">
          <div className="details__div">
            <p>
              🏆 ReactJs || Redux || NodeJs || ExpressJs || MongoDB || ES6 ||
              JavaScript || UI/UX || Html || Css || Bootstrap || MaterialUI 🏆
            </p>
            <p>
              <span>Gurugram, Haryana, India ·</span>
              <a href="#!">Contact info</a>
            </p>
            <p className="connections">
              <a href="#!">500+ connections</a>
            </p>
          </div>
          <div className="exp__div">
            <div>
              <span>
                <img src={company_logo} alt="company" />
              </span>
              <span>Intigate technologies pvt. ltd.</span>
            </div>
            <div>
              <span>
                <img src={university} alt="university" />
              </span>
              <span>Indira gandhi university, meerpur</span>
            </div>
          </div>
        </div>
        <div className="buttons__actions">
          <button className="open_to">Open to</button>
          <button className="add_profile">Add Section</button>
          <button className="more_btn" onClick={() => setOpenModal(!openModal)}>
            more
          </button>
          {openModal && (
            <div className="download__ad__pdf__section">
              <div className="download__btn" onClick={downloadPdf}>
                <span>
                  <BsDownload />
                </span>
                <span>download as pdf</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="layout__container">
        <div className="analytics__sec">
          <h3>
            Analytics{" "}
            <span>
              <AiOutlineEye /> Private to you
            </span>
          </h3>
          <div>
            <div>
              <span>
                <AiOutlineUsergroupAdd />{" "}
              </span>
              <p>
                <span>1015 profile views</span>Discover who's viewed your
                profile
              </p>
            </div>
            <div>
              <span>
                <BsGraphUp />{" "}
              </span>
              <p>
                <span>1,128 post impressions</span>Check out who's engaging with
                your posts.
              </p>
            </div>
            <div>
              <span>
                <AiOutlineSearch />{" "}
              </span>
              <p>
                <span>25 search appearances</span>See how often you appear in
                search results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
