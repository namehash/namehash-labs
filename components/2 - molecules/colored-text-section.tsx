export const ColoredText = () => {
  return (
    <section
      className="lg:px-[110px] px-5 py-[122px] border-b border-gray-200 w-full"
      id="targetDiv"
    >
      <p
        style={{
          background: "linear-gradient(180deg, #289FB9 0%, #8740A0 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
        className="text-transparent lg:text-4xl lg:leading-[52px] text-[24px] leading-[32px] font-semibold text-center max-w-[1216px] m-auto"
      >
        We bring ENS onboarding directly into wallets and dApps that millions of
        people already use every day.
      </p>
    </section>
  );
};
