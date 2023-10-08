import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ course, likedCourses, setLikedCourses }) => {

    function likeHandler(){
        if(likedCourses.includes(course.id)) {
            // pahle se like hua pada tha
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like Removed");
        }
        else {
            // pahle se like nahi hai ye course
            // insert karana h ye course liked courses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // non-empty pahle se
                setLikedCourses((prev) => [...prev,course.id])
            }
            toast.success("Liked Successfully");
        }
    }


  return (
    <div className="w-[300px] bg-slate-800 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <div>
          <button onClick={likeHandler} className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
            { likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" /> }
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">{course.description.substring(0,100)+"..."}</p>
      </div>
    </div>
  );
};

export default Card;
