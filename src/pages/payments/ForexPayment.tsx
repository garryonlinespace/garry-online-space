
import PaymentPage from "@/components/PaymentPage";

const ForexPayment = () => {
  return (
    <PaymentPage 
      courseName="Forex Trading Course" 
      amount={100} 
      currency="USD" 
      redirectPath="/forex-confirmation" 
    />
  );
};

export default ForexPayment;
