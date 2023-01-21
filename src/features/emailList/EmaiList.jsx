import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailListCard from "../../components/EmaiListCard";
import { getEmail } from "./emailListSlice";
const EmailList = () => {
    const dispatch = useDispatch();
    const { emails, number } = useSelector((state) => state.emailList);

    useEffect(() => {
        console.log("calling");
        dispatch(getEmail());
    }, []);

    return (
        <div>
            Email List {number}
            <div>
                {emails.length > 0 ? (
                    emails.map((email) => (
                        <EmailListCard
                            from={email.from.name}
                            shortDescription={email.short_description}
                            subject={email.subject}
                            date={email.date}
                        />
                    ))
                ) : (
                    <span>loading</span>
                )}
            </div>
        </div>
    );
};

export default EmailList;
