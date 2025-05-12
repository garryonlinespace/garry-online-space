
import PaymentPage from "@/components/PaymentPage";

const AffiliateMarketingPayment = () => {
  return (
    <PaymentPage 
      courseName="Affiliate Marketing Course" 
      amount={50000} 
      redirectPath="/affiliate-marketing-confirmation" 
    />
  );
};

export default AffiliateMarketingPayment;
