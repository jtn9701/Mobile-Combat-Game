import { Pressable, Image } from "react-native";

import { statButtonStyles } from "./style-sheets/stat-button-styles";
import { pressableStyles } from "./style-sheets/pressable-styles";

const StatButton = ({title, onPress}) => {
    if (title === "-") {
        return (
            <Pressable style={({pressed}) => [pressed && pressableStyles.rippleEffect]} onPress={onPress}>
                <Image style={statButtonStyles.imageSize} source={require("./../assets/images/minusSign.png")}/>
            </Pressable>
        );
     } else if (title === "+") {
        return (
            <Pressable style={({pressed}) => [pressed && pressableStyles.rippleEffect]} onPress={onPress}>
                <Image style={statButtonStyles.imageSize} source={require("./../assets/images/plusSign.png")}/>
            </Pressable>
        );
     }
}

export default StatButton