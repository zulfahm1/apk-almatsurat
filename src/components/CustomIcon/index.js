import React from 'react'
// import { colors, sizes } from '../../utils'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import IconFeather from 'react-native-vector-icons/Feather'
// import IconAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function CustomIcon({iconawesome, iconfeather, color, size, name, ...otherProps }) {
	const colorStyle = color && color.includes('#') ? color : colors[color || 'black']
	const fontSizeStyle = Number.isInteger(size) ? size : sizes[size || 'xl4']
	if (iconfeather) {
		return <IconFeather name={name} color={colorStyle} size={fontSizeStyle} {...otherProps}/>
	}
	if (iconawesome) {
		return <IconAwesome name={name} color={colorStyle} size={fontSizeStyle} {...otherProps}/>
	}
  return <Icon name={name} color={colorStyle} size={fontSizeStyle} {...otherProps}/>
}

export default CustomIcon