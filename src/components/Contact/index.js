import React, { Component } from 'react';
import './styles.scss';
import spotify from '../Icons/spotify.png';
import yt from '../Icons/yt.svg';
import ig from '../Icons/ig.svg';
import fb from '../Icons/fb.svg';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        phone: '',
        subject: '',
        formErrors: { name: '', email: '', message: '', phone: '', subject: '' },
        nameValid: false,
        emailValid: false,
        messageValid: false,
        phoneValid: false,
        subjectValid: false,
        formValid: false,
        messageSuccess: ''
    }

    handleSubmit = e => {
        const { name, email, message, phone, subject } = this.state;

        e.preventDefault();
        this.validateForm();
        window.Pageclip.send("qtY6MXh4eGBYBZt27o9IFLhtWEKvuYoC", "default", { name, email, message, phone, subject }, (error) => {
            if (!error) {
                this.setState({ messageSuccess: 'success' });
                this.resetForm();
            } else {
                this.setState({ messageSuccess: 'error' })
            }
        })
    }

    validateField(fieldName, value) {
        let { formErrors, nameValid, emailValid, phoneValid, messageValid, subjectValid } = this.state

        switch (fieldName) {
            case 'name':
                nameValid = value.length > 0;
                formErrors.name = nameValid ? '' : "Uzupełnij swoje imię";
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = emailValid ? '' : "Format e-maila jest nieprawidłowy";
                break;
            case 'message':
                messageValid = value.length > 0;
                formErrors.message = messageValid ? '' : "Nie zapomnij wpisać treści";
                break;
            case 'phone':
                phoneValid = value.length > 0;
                formErrors.phone = phoneValid ? '' : "Wpisz swój numer kontaktowy";
                break;
            case 'subject':
                subjectValid = value.length > 0;
                formErrors.subject = subjectValid ? '' : "Wpisz temat wiadomości";
                break;
            default:
                break;
        }
        this.setState({
            formErrors,
            nameValid,
            emailValid,
            phoneValid,
            subjectValid,
            messageValid,
        }, this.validateForm());
    }

    validateForm() {
        const { nameValid, phoneValid, emailValid, messageValid, subjectValid } = this.state;
        this.setState({ formValid: nameValid && phoneValid && emailValid && messageValid && subjectValid });
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            phone: '',
            subject: ''
        })
    }

    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) })
    }

    render() {

        const icons = [
            { src: spotify, alt: "Spotify icon", href: 'https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc' },
            { src: yt, alt: "Youtube icon", href: 'https://www.youtube.com/channel/UCenAClIHyVJom4GTaGHD_aw' },
            { src: ig, alt: "Instagram icon", href: 'https://www.instagram.com/wedding_czarymarry/' },
            { src: fb, alt: "Facebook icon", href: 'https://www.facebook.com/Agencja.Slubna.CzaryMarry/' },
        ]

        const { name, email, phone, message, subject, messageSuccess, formErrors, formValid } = this.state

        if (messageSuccess === 'success' || messageSuccess === 'error') {
            return (
                <div className="Contact">
                    <div className="Contact-main">
                        <div className="Contact-main_icons">
                            {icons.map(({ src, alt, href }) => (
                                <a href={href} key={alt} target="_blank" rel="noopener noreferrer">
                                    <div className="icon-wrapper">
                                        <img src={src} alt={alt} />
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="Contact-main_form">
                            <p className={`${messageSuccess === 'success' && 'text-success'} ${messageSuccess === 'error' && 'text-danger'}`} style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.25rem' }}>
                                {messageSuccess === 'success' && "Wiadomość została poprawnie wysłana, dziękujemy!"}
                                {messageSuccess === 'error' && "Ups, coś poszło nie tak! Spróbuj ponownie później."}
                            </p>
                        </div>
                    </div>
                </div >
            )
        }
        return (
            <div className="Contact">
                <div className="Contact-main">
                    <div className="Contact-main_icons">
                        {icons.map(({ src, alt, href }) => (
                            <a href={href} key={alt} target="_blank" rel="noopener noreferrer">
                                <div key={alt} className="icon-wrapper">
                                    <img src={src} alt={alt} />
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="Contact-main_form" id="contact">
                        <form className="pageclip-form">
                            <div className="form-group">
                                <input value={name} onChange={e => this.handleInput(e)} type="text" className="form-control" id="exampleInputName" name="name" aria-describedby="name" placeholder="Imię" required />
                                <p className="text-danger" style={{ height: ".25rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.name}</p>
                            </div>
                            <div className="form-group custom-box">
                                <div className="col1">
                                    <input value={email} onChange={e => this.handleInput(e)} type="email" className="form-control" id="exampleInputEmail" name="email" aria-describedby="emailHelp" placeholder="Email" required />
                                    <p className="text-danger" style={{ height: ".25rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.email}</p>
                                </div>
                                <div className="col2">
                                    <input value={phone} onChange={e => this.handleInput(e)} type="text" className="form-control" id="exampleInputPhone" name="phone" aria-describedby="phone" placeholder="Telefon" required />
                                    <p className="text-danger" style={{ height: ".25rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.phone}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <input value={subject} onChange={e => this.handleInput(e)} type="text" className="form-control" id="exampleInputSubject" name="subject" aria-describedby="subject" placeholder="Temat" required />
                                <p className="text-danger" style={{ height: ".25rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.subject}</p>
                            </div>
                            <div className="form-group">
                                <textarea value={message} onChange={e => this.handleInput(e)} className="form-control" name="message" id="exampleFormControlTextarea" rows="5" placeholder="Napisz wiadomość..." required />
                                <p className="text-danger" style={{ height: ".25rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.message}</p>
                            </div>
                            <button
                                onClick={this.handleSubmit}
                                type="submit"
                                className="btn form-btn pageclip-form__submit"
                                disabled={!formValid}
                            >
                                <span>Wyślij wiadomość</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact