import React from "react";
import Social from "./social";
import FooterLinks from "./footer-links";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="bg-primary text-white dark:bg-neutral-900 mt-10">
      <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <address className="flex-1 not-italic space-y-3 text-sm">
              <div>Permanent Secretary</div>
              <div>Ministry of Agriculture</div>
              <div>Administration Department, Kilimo IV</div>
              <div>P.O. Box 2182</div>
              <div>40487 Dodoma</div>
              <div>Telegram: “Kilimo Dodoma”</div>
              <div>Tel: +255 733 800 200</div>
              <div>Fax: +255 (026) 2320037</div>
              <div>Email: ps@kilimo.go.tz</div>
            </address>
          </div>

          <FooterLinks />
        </div>
        <div className="w-full flex items-center justify-between py-10">
          <Social />
        </div>
        <div className="border-t border-gray-400 py-5">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm font-medium">
              <span className="block mr-5 sm:inline">All rights reserved.</span>
              <a className="inline-block text-primary transition " href="#">
                Terms & Conditions
              </a>
              <span className="mx-3 text-2xl font-bold">&middot;</span>
              <a className="inline-block text-primary transition-all " href="#">
                Privacy Policy
              </a>
              <span className="mx-3 text-2xl font-bold">&middot;</span>
              <a className="inline-block font-medium transition " href="#">
                Last update {moment().format("DD-MM-YYYY hh:mm:ss")}
              </a>
            </p>

            <p className="mt-4 text-sm font-medium sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} The Ministry of Agriculture.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary py-5"></div>
    </footer>
  );
};

export default Footer;
