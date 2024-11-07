import React from "react";
import { Video_img_for_wethink } from "../../link";
import About_counter_2 from "../aboutcounter_2";

function WeThinkAbout() {
    const counters = [
        { start: 0, end: 85, percentage: "%", name: "Donate scale" },
        { start: 0, end: 75, percentage: "%", name: "Comments" },
        { start: 0, end: 65, percentage: "%", name: "Posts views" },
        { start: 0, end: 55, percentage: "%", name: "Sharing Rating" },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={Video_img_for_wethink} className="video_img" alt="We Think About Charity" />
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                    <h2 className="fs-3 ps-5">WHAT WE THINK ABOUT OUR CHARITY</h2>
                    <p className="ps-5 pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque odio, auctor a euismod ac,
                        efficitur quis ante. Vivamus facilisis ullamcorper felis. Praesent gravida nec nibh vel finibus.
                        Morbi placerat ex sit amet sem eleifend tristique. Nam tincidunt aliquam efficitur.
                    </p>
                    <h2 className="fs-3 ps-5">WORKING PROGRESS</h2>
                    <div className="row">
                        {counters.map((counter, index) => (
                            <div className="col-lg-3 col-sm-12 text-center text-dark ps-5" key={index}> 
                              <div>  <About_counter_2 start={counter.start} end={counter.end}  /></div>
                                <h5 className="fs-5">{counter.name}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeThinkAbout;
