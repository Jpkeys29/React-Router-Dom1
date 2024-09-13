import { Link } from "react-router-dom";
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function ChatComponent() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {/* <SendbirdApp
            appId={"APPID"}
            userId={"USERID"}
             /> */}
            <Link to={'/'}>Home</Link>

        </div>
    )
}

export default ChatComponent;


// export default function Practice() {
//     return(
//         <div className="practice" style={{backgroundColor:'#ADD8E6', height:'100vh'}}  >
//             <Link to={'/'}>Home</Link>
//             <h1>Find a room</h1>
//         </div>   
//     )
// }
