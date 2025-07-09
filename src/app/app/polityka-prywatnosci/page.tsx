import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Polityka Prywatności - Home Doctor',
  description: 'Polityka prywatności serwisu Home Doctor - telemedycyna dla dzieci',
}

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Polityka Prywatności</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Ostatnia aktualizacja: 7 stycznia 2025
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Informacje ogólne</h2>
              <p className="text-gray-600 mb-4">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                użytkowników serwisu Home Doctor w związku z korzystaniem z usług telemedycznych.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Administrator danych</h2>
              <p className="text-gray-600 mb-4">
                Administratorem danych osobowych jest Home Doctor sp. z o.o. z siedzibą w Warszawie.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Rodzaje przetwarzanych danych</h2>
              <p className="text-gray-600 mb-4">
                Przetwarzamy następujące kategorie danych osobowych:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Dane identyfikacyjne (imię, nazwisko)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                <li>Dane zdrowotne (w zakresie niezbędnym do świadczenia usług medycznych)</li>
                <li>Dane techniczne (adres IP, informacje o przeglądarce)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Cele przetwarzania danych</h2>
              <p className="text-gray-600 mb-4">
                Dane osobowe przetwarzamy w celu:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Świadczenia usług telemedycznych</li>
                <li>Obsługi klienta i komunikacji</li>
                <li>Wystawiania e-recept i skierowań</li>
                <li>Prowadzenia dokumentacji medycznej</li>
                <li>Wypełniania obowiązków prawnych</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Podstawy prawne</h2>
              <p className="text-gray-600 mb-4">
                Przetwarzanie danych osobowych odbywa się na podstawie:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Zgody (art. 6 ust. 1 lit. a RODO)</li>
                <li>Wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
                <li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
                <li>Ochrony żywotnych interesów (art. 6 ust. 1 lit. d RODO)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Okres przechowywania danych</h2>
              <p className="text-gray-600 mb-4">
                Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, 
                dla których zostały zebrane, nie dłużej niż przez 20 lat od ostatniej wizyty.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Prawa użytkowników</h2>
              <p className="text-gray-600 mb-4">
                Przysługują Państwu następujące prawa:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Prawo dostępu do danych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo sprzeciwu</li>
                <li>Prawo cofnięcia zgody</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Kontakt</h2>
              <p className="text-gray-600 mb-4">
                W sprawach dotyczących ochrony danych osobowych można się kontaktować:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>E-mail: privacy@homedoctor.pl</li>
                <li>Telefon: +48 800 000 000</li>
                <li>Adres: ul. Przykładowa 1, 00-000 Warszawa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
