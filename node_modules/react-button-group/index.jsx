'use strict';

var React = require('react')
var Group = require('./src')
var Button = Group.Button
var SplitButton = require('react-split-button/src')

var App = React.createClass({


    render: function() {

        var style = {
            width: '50%'
        }

        function clicked(value){
            console.log('clicked')
        }

        function arrowClick(pressed, index){
            console.log(pressed, index)
        }

        var items = [
            {
                label: 'export'
            },
            {
                label: 'Save'
            }
        ]

        var x = <Group defaultPressedIndex={1} orientation="vertical" style={{borderRadius: 4}} commonProps={{ themed: false}}>
                    <SplitButton label="hello world!" commonStyle={{color: 'red'}} fn={clicked} arrowPosition='left' onArrowClick={arrowClick}>
                    </SplitButton>
                    <Button onToggle={arrowClick}>test me</Button>
                    <SplitButton items={items} label="choose 2"></SplitButton>

                </Group>

        return (
            <div className="App" style={{padding: 10}}>

            <Group defaultPressedIndex={1} keepOnePressed style={{fontSize: 20, borderRadius: 5}}>
                <Button>Save</Button>
                <Button>Export</Button>
                <Button>Import</Button>
            </Group>

            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))