import { render } from '@testing-library/react';
import React from 'react';

class AboutPage extends React.Component {
    render () {
        return (
            <>
                <h2>About</h2>
                <p>This app uses React.</p>
            </>
        );
    }
}

export default AboutPage;