import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Button(props) {
 console.log(props);
 
    return (
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
}
export default Button;