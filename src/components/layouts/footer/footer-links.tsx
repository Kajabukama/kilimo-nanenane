import React from "react";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
      <div className="text-center sm:text-left">
        <p className="text-xl uppercase font-bold">The Ministry</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Administration
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Division & Units
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Organization Structure
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Mission and Vision
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Crop Boards
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Training Institutions
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-xl uppercase font-bold">Important Links</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              MoF
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              State House
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Parliament
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Other Institutions
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-xl uppercase font-bold">Our Partners</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              FAQs
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Support
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-xl uppercase font-bold">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Clients Charter
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Speeches and Budgets
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Publications
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Monitoring & Evaluation
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Download Forms
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Acts & Regulations
            </a>
          </li>
          <li>
            <a className="transition hover:text-gray-700/75" href="#">
              Agriculture Maps
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
