import React from "react";
import EmailBody from "./features/emailBody/EmailBody";
import EmailList from "./features/emailList/EmailList";
import Filter from "./features/filter/Filter";

function App() {
    return (
        <div className="App">
            <Filter />
            <EmailList />
            <EmailBody />
        </div>
    );
}

export default App;
