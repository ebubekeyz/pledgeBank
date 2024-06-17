import axios from 'axios';

let productionUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:7000/api'
    : 'https://pledgebank.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const blog = [
  {
    id: 1,
    image: '/budget.jpg',
    title: 'Budgeting Basics: How to Take Control of Your Finances',
    text: 'Creating a budget is the first step toward taking control of your finances. Whether you are looking to save for a big purchase, a budget can help you achieve your financial goals.',
    body: `<h4>Step 1: Track Your Income and Expenses</h4><p>The first step in creating a budget is understanding your income and expenses. Start by tracking all your sources of income and every expense you incur for a month. This will give you a clear picture of where your money is going.</p> <h4>Categorize Your Expenses</h4><p>Group your expenses into categories such as housing, utilities, groceries, transportation, entertainment, and savings. This will help you see where you might be overspending and where you can cut back.</p><h4>Categorize your expense</h4><p>Decide what you want to achieve with your budget. Are you saving for a vacation, a new car, or retirement? Setting clear financial goals will keep you motivated and focused.</p><h4>Create Your Budget</h4><p>Based on your income and expenses, create a budget that allocates a specific amount of money to each category. Make sure to include savings as a priority.</p><h4>Monitor and Adjust</h4><p>Your budget is not set in stone. Monitor your spending regularly and make adjustments as needed. This will help you stay on track and adapt to any changes in your financial situation.</p><h4>Conclusion</h4><p>Budgeting might seem daunting at first, but with these steps, you can take control of your finances and work toward your financial goals. For more personalized advice, visit Pledge Bank or contact one of our financial advisors.</p>`,
    image2: '/hero-img-small.jpeg',
  },

  {
    id: 2,
    image: '/motgage.jpg',
    title: 'Understanding Mortgage Rates and Terms: What You Need to Know',
    text: 'Buying a home is one of the most significant financial decisions you will make, and understanding mortgage rates and terms is crucial. Here is a breakdown of what you need to know.',
    body: `<h4>Buying a home is one of the most significant financial decisions you'll make, and understanding mortgage rates and terms is crucial. Here's a breakdown of what you need to know to make an informed decision.</h4><p>Buying a home is one of the most significant financial decisions you'll make, and understanding mortgage rates and terms is crucial. Here's a breakdown of what you need to know to make an informed decision.</p><h4>Fixed-Rate vs. Adjustable-Rate Mortgages</h4><p>A fixed-rate mortgage has an interest rate that remains constant throughout the loan term, providing predictable monthly payments. An adjustable-rate mortgage (ARM) has an interest rate that can change periodically, usually in relation to an index, and may start with a lower rate than a fixed-rate mortgage.
</p><h4>Interest Rates</h4><p>The interest rate on your mortgage will significantly affect your monthly payments and the total cost of your loan. Rates are influenced by factors such as the economy, inflation, and your credit score. It's essential to shop around and compare rates from different lenders.</p><h4>Loan Terms</h4><p>The term of your mortgage is the length of time you have to repay the loan. Common terms are 15, 20, or 30 years. Shorter terms typically have higher monthly payments but lower overall interest costs, while longer terms have lower monthly payments but higher overall interest costs.</p><h4>Points and Fees</h4><p>When securing a mortgage, you'll encounter various points and fees. Discount points are upfront fees paid to the lender in exchange for a lower interest rate. Origination fees cover the lender's costs for processing the loan. Be sure to ask for a detailed breakdown of all fees involved.</p><h4>Conclusion</h4><p>Understanding mortgage rates and terms can help you choose the best mortgage for your needs. For personalized assistance, contact the mortgage specialists at Pledge Bank or visit our website for more information.</p>`,
    image2: '/hero-img-small.jpeg',
  },
];

export const service = [
  {
    id: 1,
    image: '/personal-banking.avif',
    title: 'Personal Banking',
    text: 'Our Personal Banking Services includes Checking Accounts,Savings Accounts, Certificate of Deposit, Loans and Credits, Retirement Account, Investment Services, Online and Mobile Banking',
    subtitle1: 'Checking Accounts:',
    body1:
      'Standard Checking: Basic account for everyday transactions. Interest-Bearing Checking: Earn interest on your balance. Student Checking: Accounts designed specifically for students.',
    subtitle2: 'Savings Accounts:',
    body2:
      'Regular Savings: Easy access savings with competitive interest rates. High-Yield Savings: Higher interest rates for larger balances. Money Market Accounts: Combines features of savings and checking accounts with higher interest rates.',
    subtitle3: 'Certificates of Deposit (CDs):',
    body3:
      'Fixed-Term CDs: Deposit money for a fixed term with a guaranteed interest rate. No-Penalty CDs: Withdraw your money without penalty before maturity.',
    subtitle4: 'Loans and Credit:',
    body4:
      'Personal Loans: Unsecured loans for various personal needs. Auto Loans: Financing for new and used vehicles. Mortgages: Home loans for purchasing or refinancing a home. Home Equity Loans/Lines of Credit (HELOC): Borrow against the equity in your home. Credit Cards: Various credit card options with different rewards and benefits.',
    subtitle5: 'Retirement Accounts:',
    body5:
      'IRAs: Traditional and Roth Individual Retirement Accounts. 401(k) Rollovers: Transfer your 401(k) to an IRA.',
    subtitle6: 'Investment Services:',
    body6:
      'Brokerage Accounts: Buy and sell stocks, bonds, and mutual funds. Financial Planning: Professional advice and planning for investments and retirement. Wealth Management: Comprehensive services for high-net-worth individuals.',
  },

  {
    id: 2,
    image: '/business-banking.jpg',
    title: 'Business Banking',
    text: 'We Offer Business Checking Account, Business Savings and CDs, Business Loans and Credits, Cash Management Service, Treasury Management and Business Credit Card.',
    subtitle1: 'Business Checking Accounts:',
    body1:
      'Small Business Checking: Designed for small business needs. Commercial Checking: For larger businesses with higher transaction volumes.',
    subtitle2: 'Business Savings and CDs:',
    body2:
      'Business Savings: Earn interest on business funds. Business CDs: Fixed-term deposits for business funds.',
    subtitle3: 'Business Loans and Credit:',
    body3:
      'Business Loans: Financing for business operations, expansion, and equipment. Lines of Credit: Flexible credit options for managing cash flow. Commercial Real Estate Loans: Financing for purchasing or refinancing commercial property. SBA Loans: Small Business Administration-backed loans for small businesses.',
    subtitle4: 'Cash Management Services:',
    body4:
      'Merchant Services: Payment processing solutions. Payroll Services: Streamlined payroll processing. ACH Services: Automated Clearing House services for electronic transactions.',
    subtitle5: 'Treasury Management:',
    body5:
      'Liquidity Management: Solutions for managing business liquidity. Fraud Protection: Tools and services to protect against fraud.',
    subtitle6: 'Business Credit Cards:',
    body6:
      'Brokerage Accounts: Buy and sell stocks, bonds, and mutual funds. Financial Planning: Professional advice and planning for investments and retirement. Wealth Management: Comprehensive services for high-net-worth individuals.',
  },
];
