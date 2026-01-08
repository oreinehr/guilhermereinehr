import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactSection() {
  return (
    <>
    <Header/> 
      {/* ===================== */}
      {/* CONTACT BANNER */}
      {/* ===================== */}
       <section className="relative w-full h-[60vh] md:h-[80vh]">
             <Image
               src="/frame.png"
               alt="Banner"
               fill
               priority
               className="object-contain"
             />
     
             <div className="absolute inset-0 bg-black/10" />
     
        <div className="absolute inset-0 flex items-center justify-center">
       <h1
         className="
           text-[5rem] md:text-[20rem]
           font-black
           text-transparent
           tracking-tight
           select-none
         "
         style={{
           WebkitTextStroke: "1px white",
         }}
       >
         Contact
       </h1>
     </div>
           </section>

      {/* ===================== */}
      {/* CONTACT FORM */}
      {/* ===================== */}
      <section className="relative bg-black py-24 px-6">
        <div className="mx-auto max-w-xl flex flex-col items-center">
          {/* Headline */}
          <p className="mb-10 text-3xl md:text-3xl text-center">
            <span className="text-[#F2360C]">Let’s create</span>{" "}
            <span className="text-white">beauty together</span>
          </p>

          {/* Form */}
          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="contact-input"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="contact-input resize-none"
            />

            <button
              type="submit"
              className="
                w-full mt-4
                rounded-xl
                bg-[#F2360C]
                py-4
                font-medium
                text-black
                transition
                hover:brightness-110
              "
            >
              Talk to me
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
}
