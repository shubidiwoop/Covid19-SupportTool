import React from 'react'
import NavigationBar from './navbar';

import FooterPage from './footer';
import FormDataU from './FormDataU';



export default function patient() {
    return (
        <div>
            <NavigationBar />
                <FormDataU />
            <FooterPage />
        </div>
    )
}
