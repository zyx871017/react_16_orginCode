import reactDOM from 'react-dom';
import react from 'react';

class MyDom extends react.Component {
    constructor(props) {
        super(props);
        this.state = {text: '111'}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({text: '222'})
        }, 5000);
    }

    render() {
        return react.createElement('div', {style: {width: 100, height: 100, border: '1px red solid'}}, this.state.text);
    }
}


class MySecDom extends react.Component {
    constructor(props) {
        super(props);
        this.state = {text: '333'};
    }

    render() {
        return react.createElement('div', {
            style: {
                width: 200,
                height: 200,
                border: '1px green solid'
            }
        }, react.createElement(MyDom));
    }
}


const dom = react.createElement(MySecDom);

reactDOM.render(dom, document.getElementById('root'));