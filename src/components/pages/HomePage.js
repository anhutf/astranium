import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="hero bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <h1 className="text-amber-300 text-5xl sm:text-6xl font-bold tracking-tight pt-4">
            Stake for the future and grow with Astranium
            <span className="text-amber-400">!</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 px-4 sm:px-20 py-6">
            Increase your Astra by staking, earning and shopping. Let's interact
            with the Astranium Validator.
          </p>
          <a
            href="/"
            className="inline-block bg-amber-400 hover:bg-amber-300 px-6 py-3 rounded-2xl text-xl sm:text-2xl font-semibold text-white"
          >
            Start staking
          </a>
          <Link
            to="/how-to-stake"
            className="inline-block bg-gray-200 hover:bg-slate-200 px-6 py-3 rounded-2xl text-xl sm:text-2xl font-semibold ml-4"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="trust max-w-5xl mx-auto px-8 py-12">
        <h3 className="text-lg sm:text-xl uppercase text-amber-400 font-bold tracking-tight">
          Why should you stake in Astranium?
        </h3>
        <p className="text-3xl sm:text-4xl font-semibold pt-3 pb-6">
          We are a trusted validator on the Astra blockchain. Astra is paving
          the way towards an omnichannel world connected through Blockchain.
        </p>
        <div className="grid gid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg">
          <div>
            Lorem ipsum dolor sit amet. 33 voluptas mollitia non autem velit sed
            aspernatur perferendis non voluptatibus vero non quidem possimus sed
            culpa cupiditate. Et provident mollitia ut rerum omnis vel similique
            consequatur et aspernatur tempora sed sunt dolor eum modi omnis. Aut
            enim harum et aperiam accusamus nam provident voluptatem! Aut fugiat
            ullam et maiores eius ea veritatis perspiciatis vel dolores quasi.
          </div>
          <div>
            Lorem ipsum dolor sit amet. 33 voluptas mollitia non autem velit sed
            aspernatur perferendis non voluptatibus vero non quidem possimus sed
            culpa cupiditate. Et provident mollitia ut rerum omnis vel similique
            consequatur et aspernatur tempora sed sunt dolor eum modi omnis. Aut
            enim harum et aperiam accusamus nam provident voluptatem! Aut fugiat
            ullam et maiores eius ea veritatis perspiciatis vel dolores quasi.
          </div>
          <div>
            Lorem ipsum dolor sit amet. 33 voluptas mollitia non autem velit sed
            aspernatur perferendis non voluptatibus vero non quidem possimus sed
            culpa cupiditate. Et provident mollitia ut rerum omnis vel similique
            consequatur et aspernatur tempora sed sunt dolor eum modi omnis. Aut
            enim harum et aperiam accusamus nam provident voluptatem! Aut fugiat
            ullam et maiores eius ea veritatis perspiciatis vel dolores quasi.
          </div>
          <div>
            Lorem ipsum dolor sit amet. 33 voluptas mollitia non autem velit sed
            aspernatur perferendis non voluptatibus vero non quidem possimus sed
            culpa cupiditate. Et provident mollitia ut rerum omnis vel similique
            consequatur et aspernatur tempora sed sunt dolor eum modi omnis. Aut
            enim harum et aperiam accusamus nam provident voluptatem! Aut fugiat
            ullam et maiores eius ea veritatis perspiciatis vel dolores quasi.
          </div>{" "}
          <div>
            Lorem ipsum dolor sit amet. 33 voluptas mollitia non autem velit sed
            aspernatur perferendis non voluptatibus vero non quidem possimus sed
            culpa cupiditate. Et provident mollitia ut rerum omnis vel similique
            consequatur et aspernatur tempora sed sunt dolor eum modi omnis. Aut
            enim harum et aperiam accusamus nam provident voluptatem! Aut fugiat
            ullam et maiores eius ea veritatis perspiciatis vel dolores quasi.
          </div>{" "}
          <div>
            Lorem ipsum dolor sit amet. 33 voluptas mollitia non autem velit sed
            aspernatur perferendis non voluptatibus vero non quidem possimus sed
            culpa cupiditate. Et provident mollitia ut rerum omnis vel similique
            consequatur et aspernatur tempora sed sunt dolor eum modi omnis. Aut
            enim harum et aperiam accusamus nam provident voluptatem! Aut fugiat
            ullam et maiores eius ea veritatis perspiciatis vel dolores quasi.
          </div>
        </div>
      </section>

      <section className="community max-w-5xl mx-auto px-8 py-12 text-center">
        <h3 className="text-3xl sm:text-4xl uppercase text-amber-400 font-bold tracking-tight">
          Join our community
        </h3>
        <p className="text-base sm:text-lg py-3">
          If you have any questions about the process, our service or about us,
          always feel free to reach out.
        </p>
        <a
          href="https://t.me/astranium_official"
          className="inline-block bg-amber-400 hover:bg-amber-300 px-8 py-3 rounded-full text-xl sm:text-2xl font-bold text-white uppercase"
        >
          Join now
        </a>
      </section>
    </>
  );
}
