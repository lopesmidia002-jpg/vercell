import {
  UserCheck,
  Activity,
  ShieldCheck,
  Lock,
  ArrowRight,
  Mail,
} from "lucide-react";
import TagBadge from "./TagBadge";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: UserCheck,
      title: "Análise de cada conta",
      description:
        "Cadastro validado e análise de negócios antes da liberação, para uma base de clientes saudável.",
    },
    {
      icon: Activity,
      title: "Monitoramento 24/7",
      description:
        "Gestão baseada em risco e monitoramento contínuo para prevenir fraudes e lavagem de dinheiro.",
    },
    {
      icon: ShieldCheck,
      title: "API protegida",
      description:
        "Credenciais por ambiente, controle de acessos e segurança de API desde o primeiro request.",
    },
    {
      icon: Lock,
      title: "Privacidade e LGPD",
      description:
        "Seus dados e os dos seus clientes tratados com transparência e segurança.",
    },
  ];

  return (
    <section id="seguranca" className="py-20 md:py-28 bg-[#F6F7F2] scroll-mt-12">
      <div id="politicas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Baas Pago info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <TagBadge text="Segurança" className="mb-4" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
              Segurança em <br />
              <span className="text-[#5B7500]">cada Pix</span>
            </h2>

            <p className="text-base text-[#666666] font-normal leading-relaxed mb-6">
              A Versell opera com a infraestrutura da{" "}
              <strong className="text-black font-semibold">
                Baas Pago Instituição de Pagamento
              </strong>
              , responsável pelas contas, pelas transações Pix e pela liquidação. Por cima, somamos tecnologia, antifraude e monitoramento para a sua operação rodar tranquila.
            </p>

            <a
              href="#politicas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:text-neutral-700 mb-8 transition-colors"
            >
              <span>Conheça nossas políticas</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="pt-6 border-t border-neutral-200/80 w-full flex flex-col space-y-2 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>Canal de denúncias:</span>
                <a
                  href="mailto:denuncias@versell.com.br"
                  className="text-black font-medium hover:underline"
                >
                  denuncias@versell.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>Compliance:</span>
                <a
                  href="mailto:compliance@versell.com.br"
                  className="text-black font-medium hover:underline"
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
                  className="bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white mb-5 shadow-sm">
                    <Icon className="w-5 h-5 text-[#D2FB07]" />
                  </div>

                  <h3 className="text-lg font-bold text-black tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed">
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

