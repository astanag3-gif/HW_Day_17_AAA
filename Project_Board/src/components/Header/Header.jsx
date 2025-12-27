function Header() {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Проекты для МСБ
        </h1>

        <p className="text-slate-300 max-w-3xl">
          Портал с подборкой бизнес-проектов для малого и среднего бизнеса.
          Здесь представлены идеи с ориентировочным объёмом инвестиций
          и сроками окупаемости.
        </p>
      </div>
    </header>
  );
}

export default Header;
