const EmailListCard = ({ from, subject, shortDescription, date }) => {
    return (
        <div>
            <p>From: {from}</p>
            <p>Subject: {subject}</p>
            <p>{shortDescription}</p>
            <p>{date}</p>
        </div>
    );
};

export default EmailListCard;
