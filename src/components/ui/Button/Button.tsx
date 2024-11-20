import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./Button.style";

interface IButtonProps{
    children:React.ReactElement;
    style?:ViewStyle;
};
const Button:React.FC<IButtonProps> = (props) => {
    console.log(props);

    return (
        <TouchableOpacity style={{...props.style,...styles.Button}}>
            {props.children}
        </TouchableOpacity>
    );
}
export default Button;
