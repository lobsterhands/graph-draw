import React from 'react';

export default class SayHello extends React.Component {
    render() {
        var { name, lastName } = this.props;
        return (
            <h1>
                Hello {name}{lastName != null ? ' ' + lastName : ''}!
            </h1>
        )
    }
}

