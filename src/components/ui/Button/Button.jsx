import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Button(props) {
 console.log(props);
 
    return (
        <TouchableOpacity>
           {props.children}
        </TouchableOpacity>
    );
}
export default Button;