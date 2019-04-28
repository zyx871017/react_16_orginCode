import reactDOM from 'react-dom';
import react from 'react';

class MyDom extends react.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.forceUpdate();
        }, 5000);
    }

    render() {
        return react.createElement('div', {style: {width: 100, height: 100, border: '1px red solid'}});
    }
}


const dom = react.createElement(MyDom);

reactDOM.render(dom, document.getElementById('root'));