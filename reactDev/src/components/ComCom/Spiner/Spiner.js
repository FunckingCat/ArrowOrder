import React, {Component} from 'react';
import './Spiner.scss';

export default class Spiner extends Component {

    render() {

        let className = this.props.spin? 'spin' : 'stop';

        return(
            <div className="spinner">
               <svg width="100%" height="100%" viewBox="0 0 394 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className = {className} id='letter' d="M8.04977 446.5C7.41334 446.501 6.78682 446.342 6.2277 446.038C5.66858 445.734 5.19478 445.295 4.84977 444.76C1.78977 440.13 8.47977 422.7 12.7398 412.76C17.5998 401.76 33.1698 364.86 52.8998 318.13C78.9898 256.27 111.46 179.33 138.47 116.43C153.15 82.23 164.73 55.67 172.87 37.5C187.89 4 188.64 4 191.13 4H191.75L192.19 4.18C193.74 4.68 194.54 5.37 202.67 24.11C206.99 34 212.87 48 220.19 65.77C233.19 97.3 247.27 132.13 253.27 147C254.71 150.58 255.66 152.94 255.98 153.7C256.59 154.936 256.871 156.309 256.795 157.686C256.718 159.063 256.288 160.396 255.544 161.557C254.801 162.718 253.77 163.668 252.551 164.313C251.333 164.958 249.968 165.277 248.59 165.24H248.15C245.59 165.1 242.94 164.96 229.46 131.71C222.09 113.51 213.41 90.13 206.46 71.35C201.77 58.71 196.96 45.76 194.12 38.74C185.37 58.74 155.61 129.42 123.8 206.29C86.6798 295.9 61.9898 357.15 55.0498 376.77C76.7098 360 154.99 287.83 226.17 209.84C327.63 98.72 346.4 72.94 348.06 67.84C347.48 67.14 345.6 65.49 339.48 61.94C338.48 61.35 337.35 60.76 336.28 60.19C331.81 57.82 328.58 56.1 328.76 52.92C328.83 51.68 329.5 49.99 332.25 48.92C333.43 48.45 335.78 47.92 343.47 47.92C349.89 47.92 374.67 48.82 379.6 50.34V50.28C381.34 50.95 381.93 51.18 386.05 71.97C388.64 85.1 389.8 92.63 389.48 94.36C389.365 95.0787 389.002 95.7345 388.454 96.2133C387.906 96.692 387.207 96.9633 386.48 96.98H385.94L385.7 96.89H385.26C384.92 96.89 384.56 96.89 384.17 96.89C380.58 96.89 377.63 95.34 375.17 92.16C369.73 86.97 367.29 86.63 364.93 86.3L364.06 86.17C358.43 90.6 329.34 123.07 295.86 160.44C250.25 211.35 187.79 281.07 132.7 338.38C66.6998 407.05 26.2398 442.38 9.02977 446.38C8.70944 446.461 8.38018 446.501 8.04977 446.5V446.5ZM384.05 437.43C383.514 437.424 382.98 437.357 382.46 437.23C380.51 436.81 380.26 436.76 362.6 399.45C352.52 378.16 339.65 350.61 327.21 323.98C311.74 290.85 295.82 256.75 290.45 245.92C280.8 257.19 252.56 292.42 224.87 327.82C186.36 377.05 168.34 401.67 163.41 409.58C169.21 410.86 179.95 413.88 183.7 419.31C184.341 420.179 184.783 421.179 184.996 422.238C185.209 423.298 185.186 424.39 184.93 425.44C184.13 428.68 180.51 432.01 159.7 434.3C147.06 435.7 133.94 436.06 128.77 436.07C125.71 436.07 124.39 436.07 123.42 435.34C122.45 434.61 121.61 433.34 120.11 418.46C119.51 412.57 118.56 401.52 118.88 393.77C119.14 387.66 120.11 384.85 122.34 383.77C122.843 383.521 123.398 383.394 123.96 383.4C125.14 383.4 127.32 383.4 136.69 392.4C139.63 395.22 141.63 397.26 142.98 398.76C167.98 371.01 245.29 274.46 302.28 203.33C364.28 125.96 370.44 118.49 372 117.65C373.915 116.477 376.088 115.79 378.33 115.65C379.059 115.62 379.787 115.751 380.46 116.033C381.134 116.314 381.738 116.74 382.23 117.28C383.39 118.56 383.83 120.35 383.59 122.75C382.82 128.88 365.46 152.4 329.28 199.59C317.94 214.38 306.23 229.59 304 233.35C306.1 239.88 324.65 280.35 344.25 323.19C354.96 346.59 367.1 373.1 378.68 398.68C390.68 425.49 390.39 432.1 388.35 435.25C387.877 435.943 387.237 436.507 386.489 436.888C385.741 437.269 384.909 437.455 384.07 437.43H384.05Z" stroke="black" strokeWidth="8"/>
                </svg>
            </div>
        )
    }
}
