import {TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from "react-icons/sl";


const Footer = () => {
  return (
      <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
            <a href="https://github.com/tauchipurura" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-200">
                    <TbBrandGithub/>
                </span>
            </a>
            <a href="https://www.instagram.com/tau.inc/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialInstagram/>
                </span>
            </a>
            <a href="https://twitter.com/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialTwitter/>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/tau-chipurura-66892282/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialLinkedin/>
                </span>
            </a>
      </div>
  )
}

export default Footer