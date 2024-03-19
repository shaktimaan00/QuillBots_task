import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer-logo'>
            <Image src={"/logo.svg"} width={140} height={100} alt="footer logo" className="footer-logo" />
        </div>
        <div className="footer-content">
            <div className="footer-con-left">
                <Image src={"/More About Quill.svg"} height={10} width={200} alt="more bot quill" />
            </div>
            <div className="footer-con-right">
                <div className="footer-services">
                    <Image src={"/Audit Services.svg"} height={10} width={140} alt="image" />
                    <Image src={"/Quill Ecosystem.svg"} height={10} width={110} alt="image" />
                    <Image src={"/Other Services.svg"} height={10} width={140} alt="image" />
                    <Image src={"/Quick Links.svg"} height={10} width={90} alt="image" />
                </div>
                <div className="footer-programmes">
                    <h1 className="text-slate-100 pb-1 prog-heading" >Our Programmes</h1>
                    <div className="footer-buttons">
                        <button as={Link} color="primary" href="#" variant="flat" className="footer-button">
                            Request an Audit
                        </button>
                        <button as={Link} color="primary" href="#" variant="flat" className="footer-button">
                            Request an Audit
                        </button>
                        <button as={Link} color="primary" href="#" variant="flat" className="footer-button">
                            Request an Audit
                        </button>
                        <button as={Link} color="primary" href="#" variant="flat" className="footer-button">
                            Request an Audit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <Image src={"/Images.svg"} width={300} height={20} alt="image"  />
            <Image src={"/SM Logos.svg"} width={300} height={20} alt="image"  />
        </div>
        <div className="divider-hor"></div>
        <div className="footer-copyright flex justify-between"> 
            <p className="section3-p5 text-slate-400 text-xs">All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
            <p className="section3-p5 text-slate-400 text-xs">Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer;