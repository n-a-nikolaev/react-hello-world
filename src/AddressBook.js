import React from 'react';

class AddressBook extends React.Component {
    render() {
        console.log(this.props.contacts);
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default AddressBook;