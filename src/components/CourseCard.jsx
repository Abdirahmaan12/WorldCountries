// this is external css file 
import "./styles.css"

// function CourseCard(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>this is {props.Title}</h1>
//       <p>Duration: {props.duration}</p>
//     </>
//   );
// }

// export default CourseCard;




function CourseCard({course, enrol, children}) {
  // console.log(props);
  // thi sis inline style 
  const styles= {border: "1px solid gray", margin: "10px", padding: "10px", backgroundColor: "lightgray", borderRadius: "5px"}
  return (
    <div style={styles}>
      <h1 className="courseTitle">this is {course.CourseTitle}</h1>
      <p className="desc">desc: {course.desc}</p>
      {children}
      <p>Duration: {course.duration}</p>
      <button className="bg-red-300 rounded m-2 p-2 cursor-pointer" onClick={enrol}>enrol the course</button>
    </div>
  );
}

export default CourseCard;





// destructuring props

// function CourseCard({Title, duration}) {
//   return (
//     <>
//       <h1>this is {Title}</h1>
//       <p>Duration: {duration}</p>
//     </>
//   );
// }

// export default CourseCard;
