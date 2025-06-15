export default function PaymentInfo() {
  const paymentMethods = [
    {
      bankName: "OPAY DIGITAL BANK",
      accountNumber: "8062558567",
      accountName: "Abdulhakim Ahmad",
    },
    {
      bankName: "Access Bank",
      accountNumber: "1502272902",
      accountName: "Abdulhakim Ahmad",
    },
  ]

  return (
    <section id="payment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Payment Information</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Bank Details For Forex Trading Mentorship 🏦</h3>
          {paymentMethods.map((method, index) => (
            <div key={index} className="mb-8 p-8 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Option {index + 1}</h4>
              <p className="text-lg mb-2">
                <strong>Bank Name:</strong> {method.bankName}
              </p>
              <p className="text-lg mb-2">
                <strong>Account Number:</strong> {method.accountNumber}
              </p>
              <p className="text-lg mb-2">
                <strong>Account Name:</strong> {method.accountName}
              </p>
            </div>
          ))}
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-4">For special deals and inquiries, contact us on WhatsApp:</p>
            <a href="https://wa.me/2348062558567" className="text-3xl font-bold hover:underline">
              +234 8062558567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

