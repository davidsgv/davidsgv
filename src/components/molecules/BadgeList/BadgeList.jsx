import Badge from "../../atoms/Badge/Badge";
import css from "./BadgeList.module.css";

export default function BadgeList(props) {
    const { textList } = props

    return (
        <div className={css.badgeContainer}>
            {
                textList.map((text, index) => {
                    return <Badge key={index} text={text} />;
                })
            }
        </div>
    )
}