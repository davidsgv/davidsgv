import ListItem from "../../atoms/ListItem/ListItem";
import BadgeList from "../../molecules/BadgeList/BadgeList";
import JobTitle from "../../molecules/JobTitle/JobTitle";
import List from "../../molecules/List/List";
import css from "./JobList.module.css";

export default function JobList(props) {
    const { jobs } = props;

    return <List>{jobs?.map((element, index) => <JobItem key={index} {...element} />)}</List>
}

function JobItem(props) {
    const { jobTitle, startDate, endDate, bussinesName, description, altColor, skills, links } = props;

    return (
        <ListItem>
            <JobTitle
                jobTitle={jobTitle}
                startDate={startDate}
                endDate={endDate}
                bussinesName={bussinesName}
                altColor={altColor}
            />

            {skills && <BadgeList textList={skills} />}

            {description && description?.map((element, index) => <p className={css.text} key={index}>{element}</p>)}

            {links && links.map((element, index) => {
                return (
                    <div className={css.text} key={index}>
                        <a
                            className={`${altColor && css.alt}`}
                            href={element.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {element.text}
                        </a>
                    </div>
                );
            })}
        </ListItem>
    )
}