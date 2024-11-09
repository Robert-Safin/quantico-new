import Image from "next/image";

const Main = () => {
  return (
    <div className="bg-gold">
      <Image
        src="/ship2.png"
        width={3000}
        height={3000}
        alt="ship"
        className="w-full h-[360px] tablet:h-[450px] desktop:h-[650px] object-cover"
      />
      <div className="tablet:px-12 desktop:px-14 pb-20 relative tablet:-top-64  desktop:-top-80">
        <div className="bg-section-gray px-7 tablet:px-10 desktop:px-20 pb-20 max-w-screen-desktop mx-auto ">
          <h2 className="section-header text-text-white-on-black pt-16 pb-10 tablet:py-24">
            Our Foundation for Responsible Business Conduct
          </h2>
          <div className="flex space-x-6 laptop:space-x-16 desktop:space-x-60">
            <h4 className="large-text text-text-white-on-black">Compliance</h4>
            <p className="small-text text-text-white-on-black">
              As a company, we strive to conduct business in accordance with the
              highest ethical standards. This includes compliance with all
              applicable laws and regulations aimed at combating money
              laundering and terrorism financing. Quantico Trading has developed
              and regularly updates an internal policy to mitigate the risk of
              money laundering and terrorism financing associated with its
              operations and the turnover of goods. Quantico Trading is
              registered on the GoAML platform, developed by the UAE&apos;s
              Financial Intelligence Unit as a strategic response to the United
              Nations Office on Drugs and Crime (UNODC) for combating money
              laundering and terrorism financing.
              <br />
              <br />
              Quantico Trading adheres to international sanction legislation in
              its global operations. We do not engage in commercial transactions
              involving countries, territories, organizations, individuals,
              goods, or services under sanctions. We avoid transactions that
              expose our business or our clients&apos; businesses to sanction
              risks. To manage sanction risks, our specialists conduct daily
              monitoring of sanction regimes. We verify all jurisdictions with
              which we conduct business to ensure compliance with sanctions
              imposed on sub-sanctioned countries or territories. We also
              monitor sanction legislation to ensure that our company does not
              engage in transactions aimed at or contributing to the evasion of
              sanction rules.
              <br />
              <br />
              Quantico Trading regularly conducts training for its employees and
              performs Know Your Customer (KYC) checks on all its counterparts.
              Our policy involves conducting comprehensive due diligence at the
              outset of any business relationship and, when necessary, on
              suppliers, distributors, clients, agents, and other counterparts
              with whom Quantico Trading is already doing business. This ensures
              that we can be confident they are who they claim to be, and we can
              guarantee the absence of legal impediments for conducting
              transactions and entering contracts.
              <br />
              <br />
              As a participant in the licensed precious metals trading activity,
              Quantico Trading is obliged to conduct thorough checks on each
              counterpart in accordance with the requirements of the Dubai
              Government. Additionally, Quantico strictly adheres to all
              requirements of the UAE Central Bank and commercial banks in the
              country regarding foreign trade activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
