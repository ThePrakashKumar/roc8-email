import { useDispatch } from "react-redux";
import { getEmailBody } from "../features/emailBody/emailBodySlice";
import DateComponent from "./DateComponent";

const EmailListCard = ({ id, from, subject, shortDescription, date }) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => dispatch(getEmailBody(id))}
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
