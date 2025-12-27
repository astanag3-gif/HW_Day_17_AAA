function Feedback() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Обратная связь
        </h2>

        <p className="text-sm mb-4 max-w-2xl">
          Если у вас есть вопросы по представленным проектам
          или предложения по сотрудничеству — свяжитесь с нами.
        </p>

        <div className="text-sm space-y-1">
          <p>Email: info@msb-projects.kz</p>
          <p>Телефон: +7 (777) 123-45-67</p>
        </div>
      </div>
    </footer>
  );
}

export default Feedback;
