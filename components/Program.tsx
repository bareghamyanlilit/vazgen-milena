import { anim, program, programImgs } from "@/data/data";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export function Program() {
  return (
    <section className=" text-white pt-12 FontMassis">
      <motion.h2
        {...anim}
        className="relative z-0 text-vrayi text-center text-5xl  mb-20 "
      >
        Ժամանակացույց
        <p className=" absolute w-max -z-1 text-6xl -top-1 left-1/2 -translate-x-1/2 text-taki ">
          Ժամանակացույց
        </p>
      </motion.h2>

      {program.map((item, i) => (
        <div className="  font-bold" key={i}>
          <ProgramItem {...item} />
        </div>
      ))}
    </section>
  );
}

const getImage = (title: any) => {
  if (title === "Պսակադրություն") return programImgs[0];
  if (title === "Հարսանյաց հանդիսություն") return programImgs[1];
  return null;
};

const ProgramItem = ({ add, time, title, address }: any) => {
  const img = getImage(title);

  return (
    <div
      className=" text-xl  bg-cover h-dvh bg-no-repeat "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full backdrop-brightness-30 h-full  flex flex-col items-center justify-center gap-5 py-10 px-5 text-center">
        <motion.p {...anim} className="opacity-80 text-5xl">
          {time}
        </motion.p>
        <motion.h3 {...anim} className=" text-center text-4xl">
          {title}
        </motion.h3>
        <motion.p {...anim} className="text-xl opacity-80">
          {add}
        </motion.p>

        <motion.a
          {...anim}
          href={address}
          target="_blank"
          className="inline-flex bg-black rounded-2xl items-center gap-2 px-10 py-2 text-sm border"
        >
          <FaMapMarkedAlt />
          Ինչպես հասնել
        </motion.a>
        {/* {img && <motion.img {...anim} src={img} className="my-2 max-w-full " />} */}

      </div>
    </div>
  );
};
