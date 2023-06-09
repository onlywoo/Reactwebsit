import Essay from "../assets/Essay.png";
import { Link } from "react-router-dom";

export const MenuList = [
  {
    name: "Essay",
    image: Essay,
    info: <Link to="/Art">go </Link>,
  },
  {
    name: "Blog 1",
    image: Essay,
    info: "The revision videos are long however I appreciate them a lot because I need to be able to go back and forward to fully grasp what I am learning. I really like them because they strengthen my foundation it wasn’t strong at first and taught me things  I know I would have appreciated last year. I  am furthering my skills to be able to learn what I need to make the websites of my dreams.",
  },
  {
    name: "Blog 2",
    image: Essay,
    info: "In the essay “Convention and Context”, Steven Mailloux examines the relationship between them in literature. He argues that convention and context are shaped by external things like culture and evolution. In the same way, literature is changed and shaped by the cultural and historical contexts in which they are read.",
  },
  {
    name: "Blog 3",
    image: Essay,
    info: "React is incredibly helpful and makes coding much easier, I often struggle with reading documentation as I become overwhelmed and can’t concentrate on the code, however, React documentation is easy to understand but also helps me understand other documentation for other libraries or software.",
  },
  {
    name: "Reflect",
    image: Essay,
    info: "",
  },
  {
    name: "Art",
    image: Essay,
    info: "",
  },
];
