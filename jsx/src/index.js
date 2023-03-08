import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
    let minvalue = 5;
    return (
        <div>
            <input type="number" min={minvalue}/>
            <br/><br/>
            <textarea autoFocus={true}></textarea>
        </div>
    );
}

root.render(<App/>);