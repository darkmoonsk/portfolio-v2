import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "@/constants";
import SkillData from "./SkillData";
import SkillsText from "./SkillsText";

function Skills() {
  return (
    <section
      id="skills"
      className="
        flex flex-col items-center justify-center gap-3 h-full overflow-hidden pb-[80px] py-20
        scale-90
    "
    >
      <SkillsText />
      <div
        className="
          flex flex-row justify-around flex-wrap mt-4 gap-5 items-center
        "
      >
        {Skill_data.map((skill, index) => (
          <SkillData
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div
        className="
          flex flex-row justify-around flex-wrap mt-4 gap-5 items-center
        "
      >
        {Frontend_skill.map((skill, index) => (
          <SkillData
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div
        className="
          flex flex-row justify-around flex-wrap mt-4 gap-5 items-center
        "
      >
        {Backend_skill.map((skill, index) => (
          <SkillData
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div
        className="
          flex flex-row justify-around flex-wrap mt-4 gap-5 items-center
        "
      >
        {Full_stack.map((skill, index) => (
          <SkillData
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div
        className="
          flex flex-row justify-around flex-wrap mt-4 gap-5 items-center
        "
      >
        {Other_skill.map((skill, index) => (
          <SkillData
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div
          className="
              w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover
            "
        >
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/videos/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
