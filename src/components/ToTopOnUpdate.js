import { Component } from 'react'

export default class ToTopOnUpdate extends Component {
    componentDidUpdate() {
        setTimeout(() => {
            if (window.innerWidth < 1024) {
                window.scrollTo({ top: 750 });
            } else {
                window.scrollTo({ top: 1300 });
            }
        }, 100)
    }

    render() {
        return null
    }
}
