import React, { useEffect,useState } from "react";
import { count_Down_img } from "./link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function CountDown() {
     // Set the target date and time here
    const targetDate = new Date("2024-12-31T23:59:59").getTime();
    // State for time left
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        } else {
            // Stop the countdown when the target date is reached
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };
     // Use useEffect to set up the interval
     useEffect(() => {
        const timer = setInterval(() => calculateTimeLeft(), 1000);

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div>
                <div className="container-fluid mt-4" style={{
                    backgroundImage: `url(${count_Down_img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'auto',
                }}>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 d-flex">
                                <span>
                                <FontAwesomeIcon icon={faCalendar} size="2x" className="text-light pt-3" />
                                </span>
                                <div className="text-light ps-3">
                                <h3 className="fw-bold">
                                    Up comming event</h3>
                                <p>SCHOOL OF CRITIVITY</p>
                                </div>
                            </div>
                            <div className="col-lg-8  text-light fs-2 p-2 fw-bold">
                <span className="ps-4">{timeLeft.days} Days </span>
                <span className="ps-4">{timeLeft.hours} Hours </span>
                <span className="ps-2">{timeLeft.minutes} Minutes </span>
                <span className="ps-2">{timeLeft.seconds} Seconds</span>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CountDown;
