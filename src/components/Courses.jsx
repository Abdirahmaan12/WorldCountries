import User from "./User";

function Courses() {
  // const AllCourses= ["Html", "Css", "Javascript", "React", "Tailwindcss"]
  const Allusers = [
    { id: 1, name: "samafale", email: "samafale@gmail.com", role:"Admin" },
    { id: 2, name: "Aisha", email: "aisha@gmail.com", role:"User" },
    { id: 3, name: "mohamed", email: "mohamed@gmail.com", role:"Viewer" },
    { id: 4, name: "Abdirahman", email: "abdirahman@gmail.com", role:"Admin" },
    { id: 5, name: "maaiza", email: "maiza@gmail.com", role:"User" },
    { id: 6, name: "Ilhaam", email: "ilhaam@gmail.com", role:"Viewer" },
  ];
  return (
    <div className="bg-green-900 m-2 p-2 rounded text-white ">
      {/* <ul className="flex gap-10">
            {
                AllCourses.map((course, index)=> <li key={index}>{course}</li>)
            }
        </ul> */}

      <ul className="flex flex-wrap  gap-4">
        {Allusers.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
}

export default Courses;
