'use strict';

var React  = require('react')
var assign = require('object-assign')
var Button = require('react-button')
var SplitButton = require('react-split-button')
var DropDownButton = require('react-dropdown-button')
var cloneWithProps = React.cloneElement || require('react-clonewithprops')

function emptyFn(){}

function clearBorder(style){
	['border','borderLeft','borderRight','borderTop','borderBottom'].forEach(function(name){
		style[name] = 0
	})
}

var ButtonGroup = React.createClass({

	displayName: 'ReactButtonGroup',

	getDefaultProps: function(){
		return {
			keepOnePressed: false,
			defaultCommonStyle: {},
			defaultStyle: {
				border   : '1px solid rgb(218, 218, 218)',
				boxSizing: 'border-box',
				display  : 'inline-flex',
				flexFlow : 'row',
				verticalAlign: 'top',

				margin: 2
			},
			manageBorder: true,
			manageRadius: true,
			orientation: 'horizontal'
		}
	},

	getInitialState: function(){
		return {
			defaultPressedIndex: this.props.defaultPressedIndex
		}
	},

	render: function(){

		var state = this.state
		var props = this.prepareProps(this.props, state)

		return <div {...props} />
	},

	prepareProps: function(thisProps, state) {
		var props = assign({}, thisProps)

		props.horizontal = props.orientation != 'vertical'

		var pressedIndex = props.pressedIndex != null?
							props.pressedIndex:
							state.defaultPressedIndex

		props.pressedIndex = pressedIndex
		props.style    = this.prepareStyle(props, state)
		props.children = this.prepareChildren(props, state)

		if (props.manageBorder){
			clearBorder(props.style)
		}

		return props
	},

	prepareStyle: function(props, state) {

		var defaultStyle = props.defaultStyle

		if (!props.horizontal){
			defaultStyle = assign({}, defaultStyle, {
				flexFlow: 'column'
			})
		}

		if (props.block){
			defaultStyle.display = 'flex'
		}

		var style = assign({}, defaultStyle, props.style)

		if (style.border == ''){
			style.border = null
		}

		return style
	},

	prepareChildren: function(props){
		var buttonsCount = React.Children.count(props.children)
		var buttonIndex  = 0

		var children = React.Children.map(props.children, function(child){
			if (child && child.props){
				child = this.prepareChild(props, child, buttonIndex, buttonsCount)
			}

			buttonIndex++

			return child
		}, this)

		return children
	},

	prepareChild: function(props, button, index, count) {

		if (props.renderChild == 'function'){
			return props.renderChild(props, button, index, count)
		}

		var propsStyle = props.style
		var border     = propsStyle.border

		var borderTop    = propsStyle.borderTop    == null? border: propsStyle.borderTop
		var borderBottom = propsStyle.borderBottom == null? border: propsStyle.borderBottom
		var borderRight  = propsStyle.borderRight  == null? border: propsStyle.borderRight
		var borderLeft   = propsStyle.borderLeft   == null? border: propsStyle.borderLeft

		var topLeftRadius     = propsStyle.borderTopLeftRadius     == null? propsStyle.borderRadius: propsStyle.borderTopLeftRadius
		var bottomLeftRadius  = propsStyle.borderBottomLeftRadius  == null? propsStyle.borderRadius: propsStyle.borderBottomLeftRadius
		var topRightRadius    = propsStyle.borderTopRightRadius    == null? propsStyle.borderRadius: propsStyle.borderTopRightRadius
		var bottomRightRadius = propsStyle.borderBottomRightRadius == null? propsStyle.borderRadius: propsStyle.borderBottomRightRadius

		var borderStyle = {
			borderLeft  : 0,
			borderTop   : 0,
			borderBottom: 0,
			borderRight : 0,
			border      : 0
		}

		if (props.horizontal){
			borderStyle.borderTop    = borderTop
			borderStyle.borderBottom = borderBottom
		} else {
			borderStyle.borderLeft  = borderLeft
			borderStyle.borderRight = borderRight
		}

		var radiusStyle = {
			borderRadius           : 0,
			borderTopLeftRadius    : 0,
			borderTopRightRadius   : 0,
			borderBottomRightRadius: 0,
			borderBottomLeftRadius : 0
		}

		var newStyle = {
			margin: 0
		}

		if (!index){
			if (props.horizontal){
				radiusStyle.borderTopLeftRadius    = topLeftRadius
				radiusStyle.borderBottomLeftRadius = bottomLeftRadius
			} else {
				radiusStyle.borderTopLeftRadius  = topLeftRadius
				radiusStyle.borderTopRightRadius = topRightRadius
			}
		}

		if (index == count - 1){
			if (props.horizontal){
				radiusStyle.borderTopRightRadius    = topRightRadius
				radiusStyle.borderBottomRightRadius = bottomRightRadius
				borderStyle.borderRight = borderRight
			} else {
				radiusStyle.borderBottomLeftRadius    = bottomLeftRadius
				radiusStyle.borderBottomRightRadius = bottomRightRadius
				borderStyle.borderBottom = borderBottom
			}
		}

		if (props.horizontal){
			borderStyle.borderLeft = borderLeft
		} else {
			borderStyle.borderTop = borderTop
		}

		if (props.manageBorder){
			assign(newStyle, borderStyle)
		}

		if (props.manageRadius){
			assign(newStyle, radiusStyle)
		}

		var buttonProps = button.props
		var buttonStyle = assign({}, props.defaultCommonStyle, button.props.style, newStyle, props.commonStyle)

		var newProps = assign({}, this.props.commonProps, {
			style: buttonStyle,
			renderMenu: this.props.renderMenu
		})

		if (props.pressedIndex != null){
			newProps.pressed  = props.pressedIndex == index
			newProps.onToggle = this.onButtonToggle.bind(this, props, button, index)
		}

		button.props.style = buttonStyle

		var result = cloneWithProps(button, newProps)

		result.props.style = newProps.style

		return result
	},

	onButtonToggle: function(props, button, index, pressed) {

		if (props.keepOnePressed && !pressed && props.pressedIndex == index){
			return
		}

		if (this.props.pressedIndex == null){
			this.setState({
				defaultPressedIndex: pressed? index: -1
			})
		}

		;(this.props.onToggle || emptyFn)(pressed, index)
		;(button.props.onToggle || emptyFn)(pressed)
	}

})

ButtonGroup.Button      = Button
ButtonGroup.SplitButton = SplitButton
ButtonGroup.DropDownButton = DropDownButton

module.exports = ButtonGroup