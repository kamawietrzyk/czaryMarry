import { Component } from 'react'

export default class ToTopOnUpdate extends Component {
    componentDidUpdate() {
        setTimeout(() => {
            if (window.outerWidth <= 767) {
                window.scrollTo({ top: 900 });
            } else if (window.outerWidth >= 768 && window.outerWidth < 1024) {
                window.scrollTo({ top: 790 });
            } else {
                window.scrollTo({ top: 1300 });
            }
        }, 100)
    }

    render() {
        return null
    }
}
