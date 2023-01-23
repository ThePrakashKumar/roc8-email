import { useDispatch } from "react-redux";
import { getEmailBody } from "../features/emailBody/emailBodySlice";
import { addRead } from "../features/emailList/emailListSlice";
import DateComponent from "./DateComponent";

const EmailListCard = ({ id, from, subject, shortDescription, date }) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(addRead(id));
        dispatch(getEmailBody(id));
    };
    return (
        <div
            onClick={clickHandler}
            style={{ border: "2px solid black", margin: "10px" }}
        >
            <p>From: {from}</p>
            <p>Subject: {subject}</p>
            <p>{shortDescription}</p>
            <DateComponent date={date} />
        </div>
    );
};

export default EmailListCard;
