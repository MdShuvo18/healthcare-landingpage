import React from "react";
import Headings from "../SharedComponent/Headings";
import MembersCard from "./MembersCard";

const TeamMembers = () => {
  const members = [
    {
      name: "Dr. Sarah Johnson",
      image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg",
      specialist: "Cardiologist",
      description:
        "Specializes in diagnosing and treating heart-related conditions, with over 15 years of experience in interventional cardiology.",
    },
    {
      name: "Dr. Michael Lee",
      specialist: "Neurologist",
      image: "https://us.123rf.com/450wm/jackf/jackf2306/jackf230601964/205718291-young-woman-posing-in-medical-uniform-in-studio.jpg?ver=6",
      description:
        "Expert in disorders of the nervous system, including stroke, epilepsy, and multiple sclerosis. Focuses on advanced neurological care and treatment.",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialist: "Pediatrician",
      image: "https://st.depositphotos.com/1010683/2753/i/450/depositphotos_27539245-stock-photo-asian-female-doctor-holding-stethoscope.jpg",
      description:
        "Provides comprehensive healthcare for children from birth through adolescence, with a special interest in preventive care and child development.",
    },
    {
      name: "Dr. David Thompson",
      specialist: "Orthopedic Surgeon",
      image: "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
      description:
        "Specializes in musculoskeletal system surgery, treating bone and joint disorders with a focus on minimally invasive procedures.",
    },
    {
      name: "Dr. Anjali Patel",
      specialist: "Dermatologist",
      image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
      description:
        "Experienced in diagnosing and treating skin conditions, including acne, eczema, and skin cancer. Provides both medical and cosmetic dermatology services.",
    },
    {
      name: "Dr. Robert Evans",
      specialist: "Endocrinologist",
      image: "https://www.shutterstock.com/image-photo/horizontal-banner-smiling-young-male-600nw-2137891993.jpg",
      description:
        "Focuses on hormone-related disorders, such as diabetes, thyroid diseases, and metabolic disorders, providing personalized treatment plans for each patient.",
    },
  ];

  return (
    <div className="container mx-auto">
      <Headings mainText={"Meet Our Team Members"}></Headings>
      <h3 className="text-center md:mt-4 mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </h3>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-8 md:mt-14 mt-5">

        {members.map((member, index)=> (<MembersCard key={index} member={member}></MembersCard> ))}
      </div>

    </div>
  );
};

export default TeamMembers;
