import {
  UserCheck,
  Eye,
  Key,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import TagBadge from "./TagBadge";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: UserCheck,
      title: "Análise de cada conta",
      description:
        "Cadastro validado e análise do negócio antes da liberação, para uma base de clientes saudável.",
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description:
        "Gestão baseada em risco e monitoramento contínuo para prevenir fraudes e lavagem de dinheiro.",
    },
    {
      icon: Key,
      title: "API protegida",
      description:
        "Credenciais por ambiente, controle de acessos e segurança de API desde o primeiro request.",
    },
    {
      icon: ShieldCheck,
      title: "Privacidade e LGPD",
      description:
        "Seus dados e os dos seus clientes tratados com transparência e segurança.",
    },
  ];

  return (
    <section id="seguranca" className="py-20 md:py-28 bg-[#F6F7F2] scroll-mt-12">
      <div id="politicas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bass Pago info (Badge e textos justificados à esquerda) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <TagBadge text="Segurança" className="mb-5" />

            <h2 className="w-full text-left text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] xl:text-[40px] text-[#111111] tracking-tight leading-tight mb-5 whitespace-normal xl:whitespace-nowrap">
              <span className="font-bold text-[#111111]">Segurança em </span>
              <span className="font-bold text-[#5B7500]">cada Pix</span>
            </h2>

            <p className="text-base text-[#666666] font-normal leading-relaxed mb-6 max-w-lg text-left mx-0">
              A Versell opera com a infraestrutura da{" "}
              <span className="text-[#111111] font-bold">
                Bass Pago Instituição de Pagamento
              </span>
              , responsável pelas contas, pelas transações Pix e pela liquidação. Por cima, somamos tecnologia, antifraude e monitoramento para a sua operação rodar tranquila.
            </p>

            <div className="w-full flex justify-start mb-8">
              <a
                href="#politicas"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111111] hover:text-neutral-700 transition-colors"
              >
                <span>Conheça nossas políticas</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </a>
            </div>

            {/* Email Channels (alinhados à esquerda) */}
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-[#666666] items-start text-left w-full">
              <div>
                <span>Canal de denúncias: </span>
                <a
                  href="mailto:denuncia@versell.com.br"
                  className="font-bold text-[#111111] underline underline-offset-2 hover:text-[#5B7500] transition-colors"
                >
                  denuncia@versell.com.br
                </a>
              </div>
              <div>
                <span>Compliance: </span>
                <a
                  href="mailto:compliance@versell.com.br"
                  className="font-bold text-[#111111] underline underline-offset-2 hover:text-[#5B7500] transition-colors"
                >
                  compliance@versell.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[32px] p-8 sm:p-9 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-start min-h-[230px] sm:min-h-[250px]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0D0E10] flex items-center justify-center text-white mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-[#D2FB07] stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#666666] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
