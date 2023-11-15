import {
  ShieldCheckIcon,
  BanknotesIcon,
  WifiIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function TrustSection() {
  return (
    <section className="trust max-w-5xl mx-auto px-8 py-16">
      <h3 className="text-lg sm:text-xl uppercase text-amber-400 font-bold tracking-tight">
        Tại sao bạn nên stake tại Astranium?
      </h3>
      <p className="text-3xl sm:text-4xl font-semibold pt-3 pb-12">
        Chúng tôi là trình thực đáng tin cậy trên Astra blockchain. Astra đang
        mở đường hướng tới một thế giới đa kênh được kết nối thông qua
        Blockchain.
      </p>
      <div className="grid gid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg">
        <div className="trust-content">
          <span class="inline-block bg-slate-100 rounded-xl p-2">
            <ShieldCheckIcon className="h-12 w-12 text-amber-400" />
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pb-4">
            Bảo mật cao
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Trình xác thực được thiết lập bảo mật nhiều lớp, luôn đảm bảo an
            toàn cho toàn bộ Astra được stake.
          </p>
        </div>
        <div className="trust-content">
          <span class="inline-block bg-slate-100 rounded-xl p-2">
            <BanknotesIcon className="h-12 w-12 text-amber-400" />
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pb-4">
            Phí vận hành 5%
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Chúng tôi cung cấp mức phí vận hành thấp nhất, đảm bảo lãi xuất và
            lợi nhuận của bạn luôn ở mức cao.
          </p>
        </div>

        <div className="trust-content">
          <span class="inline-block bg-slate-100 rounded-xl p-2">
            <WifiIcon className="h-12 w-12 text-amber-400" />
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pb-4">
            Luôn trực tuyến
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Astranium xậy dựng trên hệ thống máy chủ ảo uy tín, đảm bảo hoạt
            động liên tục. Xác thực, nâng cao bảo mật cho Astra và nhận thưởng.
          </p>
        </div>
        <div className="trust-content">
          <span class="inline-block bg-slate-100 rounded-xl p-2">
            <UserGroupIcon className="h-12 w-12 text-amber-400" />
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pb-4">
            Hỗ trợ nhanh
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Bạn luôn nhận được hỗ trợ tất cả nội dung liên quan đến Asa khi tham
            gia và liên hệ qua kênh telegram{" "}
            <a
              href="https://t.me/astranium_official"
              className="text-amber-400 hover:text-amber-500"
            >
              Astranium Official
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
