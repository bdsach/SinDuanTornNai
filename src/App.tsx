import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { Display } from "./components/Display";
import { Nav } from "./components/Nav";
import "./App.css";

dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

export default function App() {
  return (
    <>
      <Nav />
      <Display />
    </>
  );
}
