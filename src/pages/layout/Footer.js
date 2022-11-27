import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => (
  <footer style={{ backgroundColor: "#009097" }} className="page-footer font-small blue text-light pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Al-Quran</h5>
          <p> Alquran adalah kitab suci dan bagian penting dalam hidup umat Islam. Bagi kaum muslimin, Alquran adalah hukum dan perintah, pedoman untuk berperilaku dan moral.</p>
        </div>
        <div className="col">
          <div className="fs-2">Media Sosial</div>
          <div className="w-100">
            <BsInstagram className="me-2" />
            Sanasri_
            <br />
            <BsGithub className="me-2" />
            Sanasri_
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Sanasri Copyright</div>
  </footer>
);

export default Footer;
