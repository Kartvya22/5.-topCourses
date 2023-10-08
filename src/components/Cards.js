import React from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        //   console.log(courseCategory);
        array.forEach((course) => {
          // console.log(course);
          allCourses.push(course);
        });
      });
      // console.log(allCourses);
      return allCourses;
    } else {
      // main sirf specific category ka data array krunga
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
};

export default Cards;
