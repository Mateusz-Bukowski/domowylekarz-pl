import { useState } from 'react';

export default function CookiesModal({ isOpen, onClose }) {
  const [necessaryCookies, setNecessaryCookies] = useState(true);
  const [analyticalCookies, setAnalyticalCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg w-[600px] relative z-50"> {/* Zwiększony rozmiar */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Ustawienia plików cookies</h2>
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Możesz dostosować swoje preferencje dotyczące plików cookies. 
              Niezbędne cookies są zawsze włączone, ponieważ są konieczne do 
              prawidłowego działania strony.
            </p>

            <div className="space-y-6">
              {/* Niezbędne cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="text-sm font-semibold">Niezbędne cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony. 
                    Bez nich strona nie może działać poprawnie. Nie mogą być wyłączone.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-not-allowed opacity-75">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-11 h-6 bg-purple-400 rounded-full"></div> {/* Zmieniony kolor na jaśniejszy fiolet */}
                  <div className="absolute left-6 top-1 bg-white w-4 h-4 rounded-full"></div> {/* Zmieniona pozycja na 'left-6' */}
                </label>
              </div>

              {/* Analityczne cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="text-sm font-semibold">Analityczne cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Te pliki cookies pomagają nam zrozumieć, w jaki sposób odwiedzający 
                    korzystają z naszej strony. Używamy ich do analizowania danych, takich jak 
                    liczba odwiedzin czy źródła ruchu, co pomaga nam ulepszyć stronę (Plausible).
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticalCookies}
                    onChange={(e) => setAnalyticalCookies(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${analyticalCookies ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                  <div className={`absolute w-4 h-4 bg-white rounded-full transition-all ${analyticalCookies ? 'left-6' : 'left-1'} top-1`}></div>
                </label>
              </div>

              {/* Marketingowe cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="text-sm font-semibold">Marketingowe cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Te pliki cookies są używane do śledzenia aktywności użytkowników w celu 
                    dostarczania reklam dopasowanych do ich zainteresowań (Facebook Pixel). 
                    Pomaga to nam prezentować bardziej odpowiednie treści i oferty.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingCookies}
                    onChange={(e) => setMarketingCookies(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${marketingCookies ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                  <div className={`absolute w-4 h-4 bg-white rounded-full transition-all ${marketingCookies ? 'left-6' : 'left-1'} top-1`}></div>
                </label>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-8 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 text-sm"
            >
              Zapisz ustawienia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}