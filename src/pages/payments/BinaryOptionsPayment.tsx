
import PaymentPage from "@/components/PaymentPage";

const BinaryOptionsPayment = () => {
  return (
    <PaymentPage 
      courseName="Binary Options Course" 
      amount={50000} 
      redirectPath="/binary-options-confirmation" 
    />
  );
};

export default BinaryOptionsPayment;
