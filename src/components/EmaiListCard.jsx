import DateComponent from "./DateComponent";

const EmailListCard = ({ from, subject, shortDescription, date }) => {
    return (
        <div style={{ border: "2px solid black", margin: "10px" }}>
            <p>From: {from}</p>
            <p>Subject: {subject}</p>
            <p>{shortDescription}</p>
            <DateComponent date={date} />
        </div>
    );
};

export default EmailListCard;
