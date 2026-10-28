 
"use client";

import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contactInfo = [
    {
      title: "Email",
      value: "prokashdas734@gmail.com",
      href: "mailto:prokashdas734@gmail.com",
      icon: <Mail size={23} />,
      iconBg: "bg-[#f44336]",
    },
    {
      title: "Phone",
      value: "+880 1572910506",
      href: "tel:+8801572910506",
      icon: <Phone size={22} />,
      iconBg: "bg-[#2563eb]",
    },
    {
      title: "WhatsApp",
              value: "+880 1572910506",
              href: "https://wa.me/8801572910506",
      icon: <FaWhatsapp size={23} />,
      iconBg: "bg-[#16c965]",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden mt-10 px-5 py-10 transition-colors duration-300 sm:px-8 lg:px-12 ${isDark
                    ? " "
                    :  ""
} `}
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Section Heading */}
        <div className="mb-8">
          <h2
            className={` text-3xl font-bold tracking-tight transition-colors duration-300   ${
          isDark ? "text-white" : "text-black"
} `}
          >
            Contact
          </h2>

          <p
            className={`mt-3 text-md transition-colors duration-300   ${isDark ? "text-[#c4b5fd]" : "text-gray-700"
} `}
          >
            Let’s talk — I usually reply within a day
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target={
                contact.title === "WhatsApp" ? "_blank" : undefined
              }
              rel={
                contact.title === "WhatsApp"
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`group flex min-h-[99px] items-center gap-4 rounded-2xl border px-5 py-5 transition-all duration-300 hover:-translate-y-1 sm:px-6 ${isDark
                    ? "border-[#5938b8] bg-[#171522]/90 hover:border-[#8b5cf6] hover:bg-[#201b35] hover:shadow-lg hover:shadow-purple-950/30"
                    : "border-gray-300 bg-white hover:border-violet-500 hover:shadow-lg hover:shadow-gray-200/70"
} `}
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
          isDark ? "bg-[#10101c]" : "bg-gray-100"
} `}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-white ${ contact.iconBg } `}
                >
                  {contact.icon}
                </span>
              </div>

              {/* Contact Details */}
              <div className="min-w-0">
                <h3
                  className={`text-base font-semibold transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
} `}
                >
                  {contact.title}
                </h3>

                <p
                  className={`mt-1 break-words text-sm transition-colors duration-300 sm:text-base ${
          isDark
                    ? "text-[#7957ff] group-hover:text-[#a78bfa]"
                    : "text-violet-700 group-hover:text-violet-900"
} `}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
 