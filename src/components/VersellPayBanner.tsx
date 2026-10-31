import { CreditCard, ArrowRight } from "lucide-react";

export default function VersellPayBanner() {
  return (
    <section className="py-8 bg-[#F6F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://versellpay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="bg-gradient-to-r from-[#EEF9BD] via-[#FAFCEE] via-35% to-white to-70% bg-white rounded-[24px] p-5 sm:p-6 md:px-8 md:py-5 border border-[#E2E6D5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#0F1012] flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <CreditCard className="w-6 h-6 text-[#D2FB07] stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-base sm:text-[17px] font-bold text-[#111111] transition-colors tracking-tight">
                  Também precisa de cartão e checkout?
                </h3>
                <p className="text-xs sm:text-[13px] text-[#666666] font-normal mt-0.5 leading-snug">
                  Conheça o gateway Versell: checkout de alta conversão, cartão, Pix e boleto em um só lugar.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[15px] sm:text-base font-normal text-[#5B7500] group-hover:text-[#475b00] transition-colors self-end sm:self-center pr-2">
              <span>versellpay.com</span>
              <ArrowRight className="w-4 h-4 text-[#5B7500] group-hover:text-[#475b00] stroke-[1.8] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
