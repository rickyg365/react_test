import React, { useEffect, useState } from "react";
import "./clock.css";

// ty https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f

let Clock = () => {
    // const [date, setDate] = useState(new Date());
    // const [status, setStatus] = useState(true);
    // let [timerID, setID] = useState(0);

    // useEffect(() => {
    //     setInterval(setDate(new Date()), 1000);
    // }, []);

    // useEffect(() => {
    //     if (status) {
    //         console.log("running");
    //     } else {
    //         console.log("stopped");
    //     }
    //     return () => {
    //         console.log("unmount?");
    //     };
    // }, [status]);

    // let stop = () => {
    //     clearInterval(timerID);
    // };

    const [date, setDate] = useState(new Date());
    const [status, setStatus] = useState(true);

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        if (status) {
            console.log("running");
            console.log(timerId);
        } else {
            console.log("mid clear");
            clearInterval(timerId);
            console.log("timer not running");
        }
        return () => {
            // Runs this First, clears prevoius timer
            console.log("final clear");
            clearInterval(timerId);
        };
    }, [status]);

    let toggleStatus = () => {
        if (status) {
            setStatus(false);
            console.log("set False");
        } else {
            setStatus(true);
            console.log("set True");
        }
    };

    return (
        <div className="clock-container" onClick={toggleStatus}>
            <h2 className="clock-time">{date.toLocaleTimeString()}</h2>
        </div>
    );
};

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date(), status: true };
//         this.start = this.start.bind(this);
//         this.stop = this.stop.bind(this);
//         this.toggleTimer = this.toggleTimer.bind(this);
//     }

//     componentDidMount() {
//         this.start();
//     }

//     componentWillUnmount() {
//         this.start();
//         this.stop();
//     }

//     start() {
//         this.tick();
//         this.timerID = setInterval(() => this.tick(), 1000);
//         this.setState({
//             status: true,
//         });
//     }

//     tick() {
//         this.setState({ date: new Date() });
//     }

//     stop() {
//         clearInterval(this.timerID);
//         this.setState({
//             status: false,
//         });
//     }

//     toggleTimer() {
//         if (this.state.status) {
//             this.stop();
//         } else {
//             this.start();
//         }
//     }

//     render() {
//         return (
//             <div className="clock-container" onClick={this.toggleTimer}>
//                 <h2 className="clock-time">
//                     {this.state.date.toLocaleTimeString()}
//                 </h2>
//             </div>
//         );
//     }
// }

export default Clock;
