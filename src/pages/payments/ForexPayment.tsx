
import PaymentPage from "@/components/PaymentPage";

const ForexPayment = () => {
  return (
    <PaymentPage 
      courseName="Forex Trading Course" 
      amount={300000} 
      redirectPath="/forex-confirmation" 
    />
  );
};

export default ForexPayment;
