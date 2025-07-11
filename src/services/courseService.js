import axios from "axios";

export const fetchCourses = async () => {
  try {
    const res = await axios.get("/API/courses.json");
    return res.data;
  } catch (err) {
    console.error("Lỗi khi fetch courses:", err);
    throw err;
  }
}; 