import './login.css'

export function Login() {
    return <div className='de-login-container'>
        <div className='de-login'>
            <h1> Login </h1>
            <input type='text' placeholder="User Name" />
            <input type='text' placeholder="Password" />
            <div className='de-button-wrap'>
                <button className='de-button ds-bg-clr-green'>
                    Login
                </button>
                <button className='de-button'>
                    Register
                </button>
            </div>
        </div>
    </div>
}