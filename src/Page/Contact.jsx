import React from "react";

function Contact() {

    const item =[
        {
            id: '0',
            name: "Rishabh Singh",
            role: "Frontend Developer",
            image: "/assets/rishabh.jpeg"
        },
        {
            id: '1',
            name: "Aditya Chapele",
            role: "Designer",
            image: "/assets/Aditya.jpg"
        },
        {
            id: '2',
            name: "Jatin Pandey",
            role: "Backend Developer",
            image: "/assets/Jatin.png"
        },
        {
            id: '3',
            name: "Shrey Gandhi",
            role: "Full Stack Developer",
            image: "/assets/ShreyGandhi.jpg"
        }
    ]
  return (
    <div className="content-grid py-20">
      <h2 className="py-12 text-center text-3xl">Our Team</h2>
      <div className="grids ">
        {item.map((i) => {
          return (
            <div key={i.id} className="relative flex flex-col bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <img src={i.image} alt={`${i.name} image`} className="relative object-cover mx-4 -mt-6 w-32 aspect-square  overflow-hidden rounded-full  bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 " />
              <div className="p-6 text-black ">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                  {i.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {i.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
