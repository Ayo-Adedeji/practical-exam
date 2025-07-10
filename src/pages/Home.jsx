import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import LabModule from "../components/LabModule";
import InstructorNotes from "../components/InstructorNotes";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <LabModule />
      <InstructorNotes />
    </Layout>
  );
};

export default Home;
