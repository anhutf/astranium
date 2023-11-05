import {
  ChevronDoubleDownIcon,
  ShieldCheckIcon,
  WifiIcon,
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
      <div className="grid gid-cols-1 sm:grid-cols-2 gap-6 items-center text-base sm:text-lg">
        <div className="trust-content relative">
          <span className="absolute -top-7 left-0 -z-50 text-7xl sm:text-8xl text-amber-100 font-bold">
            01
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pl-7 pb-4">
            Bảo mật cao
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Trình xác thực được thiết lập bảo mật nhiều lớp, luôn đảm bảo an
            toàn cho toàn bộ Astra được stake.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center">
          <ShieldCheckIcon className="h-40 w-40 text-amber-400 drop-shadow-lg animate-pulse" />
          <span className="inline-block w-9/12 h-6 rounded-[50%] bg-amber-100 shadow-ct mb-8"></span>
        </div>
        <div className="trust-content relative sm:row-start-2 sm:col-start-2">
          <span className="absolute -top-7 left-0 -z-50 text-7xl sm:text-8xl text-amber-100 font-bold">
            02
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pl-7 pb-4">
            Phí vận hành 5%
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Chúng tôi cung cấp mức phí vận hành thấp nhất, đảm bảo lãi xuất và
            lợi nhuận của bạn luôn ở mức cao.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center">
          <ChevronDoubleDownIcon className="h-40 w-40 text-amber-400 drop-shadow-lg animate-pulse" />
          <span className="inline-block w-9/12 h-6 rounded-[50%] bg-amber-100 shadow-ct mb-8"></span>
        </div>
        <div className="trust-content relative">
          <span className="absolute -top-7 left-0 -z-50 text-7xl sm:text-8xl text-amber-100 font-bold">
            03
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pl-7 pb-4">
            Luôn trực tuyến
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Astranium xậy dựng trên hệ thống máy chủ ảo uy tín, đảm bảo trình
            xác thực hoạt động liên tục. Xác thực, nâng cao bảo mật cho Astra và
            nhận phần thưởng.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center">
          <WifiIcon className="h-40 w-40 text-amber-400 drop-shadow-lg animate-pulse" />
          <span className="inline-block w-9/12 h-6 rounded-[50%] bg-amber-100 shadow-ct mb-8"></span>
        </div>
      </div>
    </section>
  );
}
