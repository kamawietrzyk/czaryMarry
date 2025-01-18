// @ts-nocheck
import React, { useState } from 'react';
import './styles.scss';
import spotify from '../Icons/spotify.png';
import yt from '../Icons/yt.svg';
import ig from '../Icons/ig.svg';
import fb from '../Icons/fb.svg';

const icons = [
    { src: spotify, alt: "Spotify icon", href: 'https://open.spotify.com/show/7Lj581I8xRqkY3lRwkOvrc' },
    { src: yt, alt: "Youtube icon", href: 'https://www.youtube.com/channel/UCenAClIHyVJom4GTaGHD_aw' },
    { src: ig, alt: "Instagram icon", href: 'https://www.instagram.com/wedding_czarymarry/' },
    { src: fb, alt: "Facebook icon", href: 'https://www.facebook.com/Agencja.Slubna.CzaryMarry/' },
]

const Contact = () => {

    const [fields, setFields] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    })

    const [fieldsValid, setFieldsValid] = useState({
        name: false,
        email: false,
        message: false,
        phone: false
    })

    const [formValid, setFormValid] = useState(false)
    const [resultMessage, setResultMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const validateForm = () => {
        const { name, phone, email, message } = fieldsValid;
        setFormValid(name && phone && email && message)
    }

    const resetForm = () =>
        setFields({
            name: '',
            email: '',
            message: '',
            phone: '',
            subject: ''
        })


    const validateField = (fieldName, value) => {
        let { name, email, message, phone } = fieldsValid

        switch (fieldName) {
            case 'name':
                name = value.length > 0;
                formErrors.name = name ? '' : "Uzupełnij swoje imię";
                break;
            case 'email':
                email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = email ? '' : "Format e-maila jest nieprawidłowy";
                break;
            case 'message':
                message = value.length > 0;
                formErrors.message = message ? '' : "Nie zapomnij wpisać treści";
                break;
            case 'phone':
                phone = value.length > 0;
                formErrors.phone = phone ? '' : "Wpisz swój numer kontaktowy";
                break;
            default:
                break;
        }

        setFormErrors(formErrors)
        setFieldsValid(fieldsValid)
        validateForm()
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields({ ...fields, [name]: value })
        validateField(name, value)
    }

    const handleSubmit = (e) => {
        const { name, email, message, phone, subject } = fields;

        e.preventDefault();
        validateForm();
        setLoading(true);
        window.Pageclip.send("qtY6MXh4eGBYBZt27o9IFLhtWEKvuYoC", "default", { name, email, message, phone, subject }, (error) => {
            if (!error) {
                setResultMessage('success')
                resetForm();
            } else {
                setResultMessage('error')
            }
            setLoading(false)
        })
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
                {resultMessage.length > 0 ? (
                    <div className="Contact-main_form info">
                        <p className={`${resultMessage === 'success' && 'text-success'} ${resultMessage === 'error' && 'text-danger'}`} style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.25rem' }}>
                            {resultMessage === 'success' && "Wiadomość została poprawnie wysłana, dziękujemy!"}
                            {resultMessage === 'error' && "Ups, coś poszło nie tak! Spróbuj ponownie później."}
                        </p>
                    </div>
                ) : (
                    <div className="Contact-main_form" id="contact">
                        <form className="pageclip-form">
                            <div className="form-group">
                                <input value={fields.name} onChange={e => handleInput(e)} type="text" className="form-control" id="exampleInputName" name="name" aria-describedby="name" placeholder="*Imię" required />
                                <p className="text-danger" style={{ height: ".35rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.name}</p>
                            </div>
                            <div className="custom-box">
                                <div className="col1 mb-3">
                                    <input value={fields.email} onChange={e => handleInput(e)} type="email" className="form-control" id="exampleInputEmail" name="email" aria-describedby="emailHelp" placeholder="*Email" required />
                                    <p className="text-danger" style={{ height: ".35rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.email}</p>
                                </div>
                                <div className="col2 mb-3">
                                    <input value={fields.phone} onChange={e => handleInput(e)} type="text" className="form-control" id="exampleInputPhone" name="phone" aria-describedby="phone" placeholder="*Telefon" required />
                                    <p className="text-danger" style={{ height: ".35rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.phone}</p>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <input value={fields.subject} onChange={e => handleInput(e)} type="text" className="form-control" id="exampleInputSubject" name="subject" aria-describedby="subject" placeholder="Temat" />
                            </div>
                            <div className="form-group">
                                <textarea value={fields.message} onChange={e => handleInput(e)} className="form-control" name="message" id="exampleFormControlTextarea" rows="5" placeholder="*Napisz wiadomość..." required />
                                <p className="text-danger" style={{ height: ".35rem", fontSize: "12px", marginTop: ".25rem" }}>{formErrors.message}</p>
                            </div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="btn form-btn pageclip-form__submit"
                                disabled={!formValid || loading}
                            >
                                {loading ? (
                                    <div className="spinner-border text-light mx-auto">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <span>Wyślij wiadomość</span>
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact