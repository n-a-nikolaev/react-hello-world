import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <fieldset className="field">
                    <label className="label">Name:</label>
                    <div className="control has-icons-left">
                        <input type="text" className="input" placeholder="Type name" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                    </div>
                </fieldset>
                <fieldset className="field">
                    <label className="label">Number:</label>
                    <div className="control has-icons-left">
                        <input type="text" className="input" placeholder="Type number" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-phone"></i>
                        </span>
                    </div>
                </fieldset>
                <fieldset className="field">
                    <label className="label">Email:</label>
                    <div className="control has-icons-left">
                        <input type="email" className="input" placeholder="Type email" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope-o"></i>
                        </span>
                    </div>
                </fieldset>
                <fieldset className="field is-grouped">
                    <p className="control">
                        <button className="button is-primary" type="submit">Add Contact</button>
                    </p>
                </fieldset>
            </form>
        )
    }
}

export default Form;