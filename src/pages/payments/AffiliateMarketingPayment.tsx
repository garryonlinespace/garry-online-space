
import PaymentPage from "@/components/PaymentPage";

const AffiliateMarketingPayment = () => {
  return (
    <PaymentPage 
      courseName="Affiliate Marketing Course" 
      amount={15} 
      currency="USD" 
      redirectPath="/affiliate-marketing-confirmation" 
    />
  );
};

export default AffiliateMarketingPayment;
