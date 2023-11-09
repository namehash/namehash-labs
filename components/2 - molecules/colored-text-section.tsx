export const ColoredText = () => {
  return (
    <section className="lg:px-[110px] px-5 py-[122px]" id="targetDiv">
      <p
        style={{
          background: "linear-gradient(180deg, #289FB9 0%, #8740A0 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
        className="text-transparent text-4xl font-semibold text-center max-w-[1216px]"
      >
        Founded in 2022, Namehash Labs is a technology organization dedicated to
        infrastructure-level solutions that helps the Ethereum Name Service
        (ENS) Protocol grow
      </p>
    </section>
  );
};
