import React from "react";
import { useSelector } from "react-redux";
import EmailBody from "./features/emailBody/EmailBody";
import EmailList from "./features/emailList/EmailList";
import Filter from "./features/filter/Filter";

function App() {
    const { viewMode } = useSelector((state) => state.emailList);
    return (
        <div className="App">
            <Filter />
            <div style={{ display: viewMode && "flex" }}>
                <EmailList />
                <EmailBody />
            </div>
        </div>
    );
}

export default App;
