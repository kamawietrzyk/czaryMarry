import { Component } from 'react'

export default class ToStartOnUpdate extends Component {
    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}