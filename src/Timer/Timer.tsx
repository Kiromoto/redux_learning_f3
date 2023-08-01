import React, {useState} from 'react';
import './Timer.Module.scss'


export default function Timer() {
    const [date, setDate] = useState(new Date())

    const refresh = () => {
        setDate(new Date())
    }


    return (
        <div>
            <h1>Time: {date.toLocaleTimeString()}</h1>
            <button className="btn" onClick={refresh}>ShowTime</button>
        </div>
    )
}


// class Clock extends React.Component {
//     constructor(props:any) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
//
// }
