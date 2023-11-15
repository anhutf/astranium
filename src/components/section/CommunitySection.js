export default function CommunitySection() {
  return (
    <section className="community mx-auto px-8 py-16 bg-gray-50 text-center">
      <h3 className="text-2xl sm:text-3xl uppercase text-amber-400 font-bold">
        Cộng đồng trên Telegram
      </h3>
      <p className="max-w-5xl mx-auto text-base sm:text-lg py-3">
        Tham gia{" "}
        <a
          href="https://t.me/astranium_official"
          className="text-amber-400 hover:text-amber-500"
        >
          Astranium Official
        </a>{" "}
        để theo dõi, chia sẻ các nội dung cập nhật về Astra và các chương trình
        khuyến mãi. Nếu bạn có bất kỳ câu hỏi nào về quy trình, dịch vụ của
        chúng tôi hoặc về chúng tôi, hãy luôn liên hệ.
      </p>
      <a
        href="https://t.me/astranium_official"
        className="inline-block bg-amber-400 hover:bg-amber-300 px-8 py-3 rounded-full text-xl sm:text-2xl font-bold text-white uppercase"
      >
        Tham gia ngay
      </a>
    </section>
  );
}
