import { Component } from 'react'

export default class ToTopOnUpdate extends Component {
    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}
