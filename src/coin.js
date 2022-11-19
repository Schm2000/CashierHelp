import React, { CanvasHTMLAttributes } from "react";
import Clock from './clock'

class Coin extends React.Component {
    constructor(props){
        super(props)
        this.value = props.value;
        this.width = 0;
        this.height = 0;
        if (this.value < 100){
            this.width = 100;
            this.height = 100;
        }
        else{
            this.width = 200;
            this.height = 150;
        }
    }
    componentDidMount () {
        var front = this.refs.canvas
        const circle = front.getContext('2d');
        circle.beginPath();
        if (this.value === 2000){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "green";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$20', 12, 70);
        }
        if (this.value === 2001){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$20', 12, 70);
        }
        else if (this.value === 1001){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$10', 14, 70);
        }
        else if (this.value === 1000){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "green";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$10', 14, 70);
        }
        else if (this.value === 501){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$5', 15, 70);
        }
        else if (this.value === 500){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "green";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$5', 15, 70);
        }
        else if (this.value === 101){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$1', 15, 70);
        }
        else if (this.value === 100){
            circle.rect(5, 30, 190, 100)
            circle.stroke();
            circle.font = "50px Times New Roman";
            circle.fillStyle = "green";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('$1', 15, 70);
        }
        else if (this.value === 26){
            circle.arc(front.height/2, front.width/2, 50, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "47px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('25\u00A2', 19, 65);
            }
        else if (this.value === 25){
        circle.arc(front.height/2, front.width/2, 50, 0, 2 * Math.PI);
        circle.stroke();
        circle.font = "47px Times New Roman";
        circle.fillStyle = "grey";
        circle.fill();
        circle.fillStyle = "black";
        circle.fillText('25\u00A2', 19, 65);
        }
        else if (this.value === 6){
            circle.arc(front.height/2, front.width/2, 40, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "40px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('5\u00A2', 30, 63);
        }
        else if (this.value === 5){
            circle.arc(front.height/2, front.width/2, 40, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "40px Times New Roman";
            circle.fillStyle = "grey";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('5\u00A2', 30, 63);
        }
        else if (this.value === 3){
            circle.arc(front.height/2, front.width/2, 30, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "30px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('1\u00A2', 36, 60);
        }
        else if (this.value === 1){
            circle.arc(front.height/2, front.width/2, 30, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "30px Times New Roman";
            circle.fillStyle = "orange";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('1\u00A2', 36, 60);
        }
        else if (this.value === 11){
            circle.arc(front.height/2, front.width/2, 20, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "20px Times New Roman";
            circle.fillStyle = "red";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('10\u00A2', 35, 55);
        }
        else if (this.value === 10){
            circle.arc(front.height/2, front.width/2, 20, 0, 2 * Math.PI);
            circle.stroke();
            circle.font = "20px Times New Roman";
            circle.fillStyle = "grey";
            circle.fill();
            circle.fillStyle = "black";
            circle.fillText('10\u00A2', 35, 55);
        }
    }
    render () {
    return(
        <div>
            <canvas ref="canvas" height = {this.height} width = {this.width} className="Circle">
            </canvas>
        </div>
    );
    }
}
export default Coin