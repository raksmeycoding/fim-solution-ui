import React from "react";
import BgNavWavBackground from "../../images/nav-wav-background.svg";

function MyLoanBorrower() {
  return (
    <div className="relative left-0 right-0 top-0 h-full">
      <img
        className="absolute top-0 left-0 right-0 z-0 "
        src={BgNavWavBackground}
        alt=""
      />

      <div className="font-satoshi flex flex-col gap-2 justify-center items-center description absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[250px]">
        <h1 className="font-bold text-6xl">My Loan Page</h1>
        <div className="flex flex-col justify-center items-center text-2xl">
          <p>FInancial Management</p>
          <p>Solution</p>
          <p>Create your future</p>
        </div>
      </div>

      {/* border sectoin */}
      <div className="my-loan-table absolute z-10 top-[500px] right-0 left-0 flex flex-col items-center justify-center pb-52">
        {/* My Loan Table for Borrower section */}
        <div className="table-wrapper bg-white flex flex-col gap-8 shadow-xl w-full px-2 md:w-11/12 md:px-4 md:py-4 rounded-md backdrop-blur-sm items-center xl:w-8/12 ">
          <div className="table-loan-wrapper font-satoshi   flex flex-row justify-between w-full ">
            {/* left section */}
            <div className="head-right  flex flex-col gap-4 self-start md:w-[400px]">
              <p className="font-bold text-3xl">Amount Due</p>
              <p className="text-xl">$ {"258.14"}</p>
              <p className="text-xl">On: {"September, 1, 2014"}</p>
            </div>

            {/* right section */}
            <div className="head-right flex flex-col gap-4 md:w-[400px]">
              <p className="text-3xl font-bold">Loan Details:</p>
              <div className="table-list text-xl pl-[2rem]">
                <div className="loannumber flex flex-row justify-between">
                  <p>Loan Number: </p>
                  <p>76551</p>
                </div>
                <div className="loan-amount flex flex-row justify-between">
                  <p>Loan Amount: </p>
                  <p>$8,000</p>
                </div>
                <div className="start-date flex flex-row justify-between">
                  <p>Start Date: </p>
                  <p>9/1/2024</p>
                </div>
                <div className="interest flex flex-row justify-between">
                  <p>Interest: </p>
                  <p>8%</p>
                </div>
                <div className="duration flex flex-row justify-between">
                  <p>Duration: </p>
                  <p>3 years</p>
                </div>
                <div className="balance flex flex-row justify-between">
                  <p>Balance: </p>
                  <p>$8,000 as of 9/1/2024</p>
                </div>
                <div className="payoff flex flex-row justify-between">
                  <p>Payoff:</p>
                  <p>$6,600 as of 7/15/2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* section 2 - make payment */}
          <div className="section2-make-payment w-full flex flex-row justify-between">
            <button className="px-14 py-4 font-bold  rounded-sm border bg-[#f6f7f8] ">
              Make Payment
            </button>
            <div className="payment-timeine text-3xl font-bold text-start  md:w-[400px]">
              <p>Payment Timeliness:</p>
            </div>
          </div>

          {/* Payment Histor */}
          <div className="payment-history font-satoshi font-bold text-3xl  w-full">
            Payment History
          </div>

          {/* table of payment history timeline */}
          <div className="table-data-history font-satoshi  text-xl w-full">
            <table className="table-auto w-full ">
              <tr className="text-center  font-bold h-12">
                <th className="border">Date</th>
                <th className="border">Status</th>
                <th className="border">Interest</th>
                <th className="border">Priciple</th>
                <th className="border">Total</th>
                <th className="border">Balanced Owned</th>
              </tr>
              <tr className="text-center h-fit">
                <td className="border">10/01/2024</td>
                <td className="border">On time</td>
                <td className="border">$50.69</td>
                <td className="border">$200.00</td>
                <td className="border">$250.69</td>
                <td className="border">$7,603.97</td>
              </tr>
              <tr className="text-center h-fit">
                <td className="border">10/01/2024</td>
                <td className="border">On time</td>
                <td className="border">$50.69</td>
                <td className="border">$200.00</td>
                <td className="border">$250.69</td>
                <td className="border">$7,603.97</td>
              </tr>
              <tr className="text-center h-fit">
                <td className="border">10/01/2024</td>
                <td className="border">On time</td>
                <td className="border">$50.69</td>
                <td className="border">$200.00</td>
                <td className="border">$250.69</td>
                <td className="border">$7,603.97</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLoanBorrower;
