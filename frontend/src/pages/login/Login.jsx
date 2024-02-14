const Login = () => {
    return (
        <div className="flex justify-center flex-col items-center mx-auto min-w-96">
            {/* Tailwind Glassmorphism */}
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-info"> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className="label-text text-base">Username</span>
                        </label>
                        <input type="text" id="username" name="username" placeholder="Enter username"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input id="password" name="password" type="password" placeholder="Enter password"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <a href="#" className="text-sm w-full text-center hover:underline text-blue-400 mt-5 mb-1 inline-block">
                        {"Don't"} have an account?
                    </a>
                    <div className="btn btn-block btn-sm mt-2 btn-info">Login</div>
                </form>
            </div>
        </div>
    )
}

export default Login


/*
// Starter code for this file: 

const Login = () => {
    return (
        <div className="flex justify-center flex-col items-center mx-auto min-w-96">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-info"> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className="label-text text-base">Username</span>
                        </label>
                        <input type="text" id="username" name="username" placeholder="Enter username"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input id="password" name="password" type="password" placeholder="Enter password"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <a href="#" className="text-sm w-full text-center hover:underline hover:text-blue-600 mt-3 mb-1 inline-block">
                        {"Don't"} have an account?
                    </a>
                    <div className="btn btn-block btn-sm mt-2 btn-info">Login</div>
                </form>
            </div>
        </div >
    )
}

export default Login
*/