import IconTitle from "../../molecules/IconTitle/IconTitle";
import JobTitle from "../../molecules/JobTitle/JobTitle";
import Skill from "../../molecules/Skill/Skill";
import css from "./SectionDetail.module.css";
import List from "../../molecules/List/List";
import ListItem from "../../atoms/ListItem/ListItem";
import DescriptionTitle from "../../molecules/DescriptionTitle/DescriptionTitle";

export default function SectionDetail(props) {
  const { title, icon, text, jobs, skills, dataItems, altColor, separator } =
    props;

  const listJobs = jobs?.map((element, index) => {
    // const jobSkills = element?.skills?.map((skill, indexSkill) => {
    //   return <Skill key={indexSkill} skill={skill.skill} value={skill.value} />;
    // });

    return (
      <ListItem key={index}>
        <JobTitle
          jobTitle={element.jobTitle}
          startDate={element.startDate}
          endDate={element.endDate}
          BussinesName={element.BussinesName}
          altColor={altColor}
        />
        <p className={css.text}>{element.description}</p>

        {/* {jobSkills && <div className={css.skill}>{jobSkills}</div>} */}
      </ListItem>
    );
  });

  const listSkills = skills?.map((element, index) => {
    return <Skill key={index} skill={element.skill} value={element.value} />;
  });

  const listDataContent = dataItems?.map((element, index) => {
    return (
      <ListItem key={index}>
        <DescriptionTitle
          title={element.title}
          descriptions={element.descriptions}
          altColor={altColor}
        />
      </ListItem>
    );
  });

  return (
    <div className={`${css.container} ${separator && css.separator}`}>
      <IconTitle icon={icon} altColor={altColor}>
        {title}
      </IconTitle>
      {text && (
        <p className={`${css.text} ${css.content} ${altColor && css.alt}`}>
          {text}
        </p>
      )}

      {listJobs && <List>{listJobs}</List>}

      {listSkills && <div className={css.skill}>{listSkills}</div>}

      {listDataContent && <List>{listDataContent}</List>}
    </div>
  );
}
