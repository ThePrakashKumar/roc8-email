import { useSelector } from "react-redux";

const EmailBody = () => {
    const { id } = useSelector((state) => state.emailBody);
    console.log(id);
    return <div>{id && <span>EmailBody{id}</span>}</div>;
};

export default EmailBody;
