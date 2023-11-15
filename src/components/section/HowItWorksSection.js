import {
  StarIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorksSection() {
  return (
    <section className="how max-w-5xl mx-auto px-8 py-8">
      <h3 className="text-lg sm:text-xl uppercase text-amber-400 font-bold tracking-tight">
        Xác thực và nhận phần thưởng
      </h3>
      <p className="text-3xl sm:text-4xl font-semibold pt-3 pb-12">
        Quy trình hoạt động của Astranium validator trong Astra blockchain
      </p>
      <div className="grid gid-cols-1 sm:grid-cols-2 gap-6 items-center text-base sm:text-lg">
        <div className="trust-content relative">
          <span className="absolute -top-7 left-0 -z-50 text-7xl sm:text-8xl text-amber-100 font-bold">
            01
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pl-7 pb-4">
            Stake token Asa
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Ký gửi (Stake) một lượng Asa để trở thành validator của Astra
            blockchain. Người dùng có thể uỷ quyền (Delegate) cho Astranium.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center">
          <StarIcon className="h-40 w-40 text-amber-400 drop-shadow-lg animate-pulse" />
          <span className="inline-block w-9/12 h-6 rounded-[50%] bg-amber-100 shadow-ct mb-8"></span>
        </div>
        <div className="trust-content relative sm:row-start-2 sm:col-start-2">
          <span className="absolute -top-7 left-0 -z-50 text-7xl sm:text-8xl text-amber-100 font-bold">
            02
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pl-7 pb-4">
            Tham gia đồng thuận
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Astranium cùng các validator khác xác minh tính hợp lệ của giao
            dịch. Đề xuất khối mới. Đồng bộ hoá dữ liệu để đảm bảo sự đồng
            thuận.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center">
          <PuzzlePieceIcon className="h-40 w-40 text-amber-400 drop-shadow-lg animate-pulse" />
          <span className="inline-block w-9/12 h-6 rounded-[50%] bg-amber-100 shadow-ct mb-8"></span>
        </div>
        <div className="trust-content relative">
          <span className="absolute -top-7 left-0 -z-50 text-7xl sm:text-8xl text-amber-100 font-bold">
            03
          </span>
          <h4 className="text-2xl sm:text-3xl text-slate-700 font-bold pl-7 pb-4">
            Nhận phần thưởng
          </h4>
          <p className="text-lg sm:text-xl text-slate-600">
            Giao dịch của người dùng được hoàn thành và Astranium nhận được phần
            thưởng là phí giao dịch.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 items-center">
          <GiftIcon className="h-40 w-40 text-amber-400 drop-shadow-lg animate-pulse" />
          <span className="inline-block w-9/12 h-6 rounded-[50%] bg-amber-100 shadow-ct mb-8"></span>
        </div>
      </div>
    </section>
  );
}
