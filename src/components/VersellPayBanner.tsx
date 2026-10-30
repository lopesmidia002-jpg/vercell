import { CreditCard, ArrowUpRight } from "lucide-react";

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
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.06] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <CreditCard className="w-6 h-6 text-[#D2FB07]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-normal text-black group-hover:text-neutral-800 transition-colors">
                  Também precisa de cartão e checkout?
                </h3>
                <p className="text-xs sm:text-sm text-[#666666]">
                  Conheça o gateway Versell: checkout de alta conversão, cartão, Pix e boleto em um só lugar.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-sm font-normal text-neutral-800 group-hover:text-black transition-colors self-end sm:self-center">
              <span>versellpay.com</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

