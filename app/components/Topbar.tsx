import React from 'react'
import {ChevronLeft, ChevronRight, ShieldQuestion, User} from 'lucide-react'
import Link from 'next/link';
const Topbar = () => {

    const scrollToSection = (sectionId: any) => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div className="pt-10 flex space-x-3.5 gap-2 justify-center sm:gap-20 px-3">
      <>
        <Link
          href="#schedule"
          className="flex items-center cursor-pointer dark:text-white text-black"
        >
          <div className="flex items-center gap-0">
            <ChevronLeft />
            <ChevronRight />
          </div>
          <p>The Schedule</p>
        </Link>

        <Link
          href="#testimony"
          className="flex items-center cursor-pointer dark:text-white text-black"
        >
          <User />
          <p>Testimonials</p>
        </Link>

        <Link
          href="#FAQ"
          className="flex items-center cursor-pointer dark:text-white text-black"
        >
          <ShieldQuestion />
          <p>FAQ</p>
        </Link>
      </>
    </div>
  );
}

export default Topbar
