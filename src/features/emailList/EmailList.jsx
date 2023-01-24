import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailListCard from "../../components/emailList/EmaiListCard";
import { getEmail } from "./emailListSlice";
const EmailList = () => {
    const dispatch = useDispatch();
    const { emails, readEmail, favoriteEmail } = useSelector(
        (state) => state.emailList
    );

    const { currentFilter } = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(getEmail());
    }, []);

    const filterEmail = () => {
        // if currentFilter = "" show all emails
        if (currentFilter === "") {
            return emails;
        } else {
            return emails.filter((email) => {
                // if currentFilter = "unread" show all email except those are in read array
                if (currentFilter === "unread") {
                    return !readEmail.includes(email.id);
                } else if (currentFilter === "read") {
                    return readEmail.includes(email.id);
                    // if currentFilter = "favorite" show all the emails which are in favorite array
                } else {
                    return favoriteEmail.includes(email.id);
                }
            });
        }
    };

    return (
        <div>
            <div>
                {emails.length > 0 ? (
                    filterEmail(emails).map((email) => (
                        <EmailListCard {...email} />
                    ))
                ) : (
                    <span>loading</span>
                )}
            </div>
        </div>
    );
};

export default EmailList;
