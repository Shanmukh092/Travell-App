const REACT_APP_RAZORPAY_KEY_ID="rzp_test_Zo211LQnx0c5rk";
const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
    };
export const handlePayment = async (totalPrice,detailsDispatch) => {
    const res = await loadRazorpayScript();
    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    const options = {
        key: REACT_APP_RAZORPAY_KEY_ID, // from .env
        amount: (totalPrice+49)*100, // 500.00 INR in paise
        currency: "INR",
        name: "ShopSwiftly",
        description: "Test Transaction",
        handler: function (response) {
        // alert("Payment Successful!");
        detailsDispatch({
            type:"SUCESS"
        })
        console.log(response); // response.razorpay_payment_id etc.
        },
        notes: {
        address: "Razorpay Corporate Office"
        },
        theme: {
        color: "#3399cc"
        }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
}