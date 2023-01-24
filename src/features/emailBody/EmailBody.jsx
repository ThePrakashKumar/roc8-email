import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../emailList/emailListSlice";

const EmailBody = () => {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.emailBody);
    return (
        <div>
            {id && (
                <>
                    <span>EmailBody{id}</span>
                    <button onClick={() => dispatch(addFavorite(id))}>
                        Add to Favorite
                    </button>
                </>
            )}
        </div>
    );
};

export default EmailBody;
