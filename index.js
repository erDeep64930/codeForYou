const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
  {
    id: 4,
    name: "course4",
  },
];
app.get("/", (req, res) => {
  res.send("hello world");
});
// app.get("/api/courses", (req, res) => {
//   res.send([1, 2, 3]);
// });
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("the course with given id ");
    res.send(course);
  }
});

// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id);
// });

//   app.get("/api/course/:year/:month", (req, res) => {
//     res.send(req.query)
//    });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}...`);
});
