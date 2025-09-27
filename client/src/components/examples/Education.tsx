import Education from '../Education';

export default function EducationExample() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Veltech Rangarajan Dr. Rangarajan R&D Institute of Science and Technology",
      location: "Chennai",
      duration: "Sept 2022 – May 2026",
      grade: "8.29",
      gradeType: "CGPA" as const,
      status: "Currently Pursuing"
    },
    {
      degree: "Intermediate MPC",
      institution: "Krishnaveni Junior College",
      location: "Vinukonda",
      duration: "June 2020 – May 2022",
      grade: "76%",
      gradeType: "Percentage" as const
    },
    {
      degree: "10th Standard",
      institution: "Geethanjali High School",
      location: "Vinukonda",
      duration: "June 2019 – April 2020",
      grade: "98%",
      gradeType: "Percentage" as const
    }
  ];

  return <Education education={educationData} />;
}