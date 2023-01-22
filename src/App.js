import React from "react";
import "./App.css";
import EmailBody from "./features/emailBody/EmailBody";
import EmailList from "./features/emailList/EmailList";

function App() {
    return (
        <div className="App">
            <EmailList />
            <EmailBody />
        </div>
    );
}

export default App;
