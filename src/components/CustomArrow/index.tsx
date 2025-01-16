import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

type CustomImageProps = {
    onPress?: any;
    style?: any;
    imageStyle?: any;
    source?: any;
}
const CustomImage: React.FC<CustomImageProps> = ({
    onPress,
    style,
    imageStyle,
    source
}) => {
    return(
        <TouchableOpacity onPress={onPress} style={style}>
            <Image source={source} style={imageStyle} resizeMode='contain'/>
        </TouchableOpacity>
    )
}

export default CustomImage;