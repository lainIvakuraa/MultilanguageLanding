const React = require("react");

function IMGButton(props){
        
    {/* function pressed(mode){
        switch(mode){
            case "arr_l":
                console.log("Shift left");
                break;
            case "arr_r":
                console.log("Shift right");
                break;
            default:
                alert("Unassigned arg!");
                break;
        }
    }
*/}
    function RPressed(){
        return console.log("Right pressed");
    }
    function LPressed(){
        return console.log("Left pressed");
    }

    var mode = props.act;

    switch(props.act)
    {
        case "arr_l":
            return <div class="arrow_button"><img src={props.image} alt="" width={props.w} height={props.h} onClick={LPressed}></img></div>;
        case "arr_r":
            return <div class="arrow_button"><img src={props.image} alt="" width={props.w} height={props.h} onClick={RPressed}></img></div>;
    }
    {/*
    var result = <div class="arrow_button"><img src={props.image} alt="" width={props.w} height={props.h}></img></div>;
    return result;
    return <div><img src={props.image} alt="" width={props.w} height={props.h}></img></div>;*/}
}
IMGButton.defaultProps = {image:"images/arrow_left.png", w:"25", h:"50", act:"none"}  

module.exports = IMGButton;