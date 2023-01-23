import { changeFilter } from "./filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    const { currentFilter } = useSelector((state) => state.filter);
    return (
        <div>
            <p>Sort By:</p>
            <button onClick={() => dispatch(changeFilter("unread"))}>
                Unread
            </button>
            <button onClick={() => dispatch(changeFilter("read"))}>Read</button>
            <button onClick={() => dispatch(changeFilter("favorite"))}>
                Favorite
            </button>
        </div>
    );
};

export default Filter;
