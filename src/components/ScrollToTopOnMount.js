import { Component } from 'react'

export default class ScrollToTopOnMount extends Component {
    componentDidMount() {
        setTimeout(() => {
            if (window.innerWidth < 768) {
                window.scrollTo({ top: 450, behavior: 'smooth' })
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                window.scrollTo({ top: 530, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 780, behavior: 'smooth' });
            }
        }, 1000);
    }

    render() {
        return null
    }
}