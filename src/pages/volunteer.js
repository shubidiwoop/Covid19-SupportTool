import React from 'react'
import NavigationBar from './navbar';

import FooterPage from './footer';
import FormDataV from './formdataV';

export default function volunteer() {
    return (
        <div>
            <NavigationBar />
                <FormDataV />
            <FooterPage />
            
        </div>
    )
}