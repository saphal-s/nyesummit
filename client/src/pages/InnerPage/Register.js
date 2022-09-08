import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Register = () => {
    return (
        <div>
            <Header />
            <div className="register" style={{
                backgroundColor: '#f2f2f2', textAlign: 'center',
                paddingTop: '130px',
                paddingBottom: '170px'
            }}>
                <h1 style={{ fontWeight: 'bold', color: '#14469f' }}>Registration form Closed !!</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Register
