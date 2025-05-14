import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import docAid from "../assets/images/docAid.webp";
import ak80_64 from "../assets/images/AK80_64.jpg";
import Portfolio from "../assets/images/portfolio.webp"
import CartManagementSystem from "../assets/images/cart-management-system.webp"
import esp32CamWeb from "../assets/images/esp32_cam_web.jpg";
import ROBOT from "../assets/images/robot.jpg";
import ROBOT1 from "../assets/images/robot1.jpg";


const data = [
    {
        name: "Eyes Protect Systems",
        type: "WebApp + Embedded systems",
        url: "https://github.com/NocNoc31/Esp32_CAM",
        github: "https://github.com/NocNoc31/Esp32_CAM",
        image: esp32CamWeb,
        slug: "Eyes Protect Systems",
        tech: ['HTML', 'Javascript', 'Css', 'Dart']
        
    },
    {
        name: "2-joint rehabilitation robot system",
        type: "CAN + Control + ROSROS",
        url: "https://github.com/NocNoc31/Ak8064_TEST",
        github: "https://github.com/NocNoc31/Ak8064_TEST",
        image: ak80_64,
        slug: "ak80_64",
        tech: ['ROS', 'CAN', 'Node', 'Controller', 'Impedence control']

    },
    {
        name: "AUTUNOMOUS ROBOT + MOBILE ROBOT",
        type: "MOBILE ROBOT",
        url: "https://github.com/NocNoc31/lino_ws",
        github: "https://github.com/NocNoc31/lino_ws",
        image: ROBOT, ROBOT1, 
        slug: "ROBOT",
        tech: ['ROS', 'GAZEBO', 'Teensy', 'Lidar']
    }
]

export function getData(){
    return data;
}