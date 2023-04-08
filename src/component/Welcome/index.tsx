export const Welcome = () => {
  return (
    <section
      className="bg-fixed bg-cover bg-center bg-no-repeat bg-top h-screen"
      style={{backgroundImage: "url('./store-bg.png')"}}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white">Welcome to my website</h1>
        <p className="text-lg text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};
