import CustomHead from "../components/Head";
import Wellcome from "../components/Wellcome";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
        <CustomHead title="Brian Durand | Full Stack Developer" index follow />
        <Wellcome />
        <Contact/>
    </>
  )
}

