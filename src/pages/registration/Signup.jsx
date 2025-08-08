import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    //       User Signup Function 
    

    const userSignupFunction = async () => {
        // Validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All fields are required");
            return;
        }
        if (userSignup.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
    
        setLoading(true);
        try {
            // Check if email already exists
            const querySnapshot = await getDocs(query(collection(fireDB, 'user'), where('email', '==', userSignup.email)));
            if (!querySnapshot.empty) {
                toast.error("Email is already in use");
                setLoading(false);
                return;
            }
    
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
    
            // Create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            };
    
            // Create user Reference
            const userReference = collection(fireDB, "user");
    
            // Add User Detail
            await addDoc(userReference, user);
    
            setUserSignup({
                name: "",
                email: "",
                password: "",
            });
    
            toast.success("Signup Successful");
            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.error("Error signing up:", error);
            toast.error("An error occurred while signing up");
            setLoading(false);
        }
    };
    

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-green-50 px-8 py-6 border border-green-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-green-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-96 rounded-md outline-none placeholder-green-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-96 rounded-md outline-none placeholder-green-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-96 rounded-md outline-none placeholder-green-200'
                    />
                    <label className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        <input
                            type="checkbox"
                            className="h-5 w-5 text-green-500"
                            checked={showPassword}
                            onChange={togglePasswordVisibility}
                        />
                        <span className="ml-2 text-gray-700">Show </span>
                    </label>
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-green-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;
