import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Regulamin - Home Doctor',
  description: 'Regulamin korzystania z usług Home Doctor - telemedycyna dla dzieci',
}

export default function Regulamin() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Regulamin</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Ostatnia aktualizacja: 7 stycznia 2025
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 1. Postanowienia ogólne</h2>
              <p className="text-gray-600 mb-4">
                1. Niniejszy Regulamin określa zasady korzystania z usług telemedycznych 
                świadczonych przez Home Doctor sp. z o.o.
              </p>
              <p className="text-gray-600 mb-4">
                2. Usługi obejmują konsultacje lekarskie prowadzone zdalnie za pomocą 
                środków komunikacji elektronicznej.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 2. Definicje</h2>
              <p className="text-gray-600 mb-4">
                1. <strong>Usługodawca</strong> - Home Doctor sp. z o.o. z siedzibą w Warszawie
              </p>
              <p className="text-gray-600 mb-4">
                2. <strong>Pacjent</strong> - osoba korzystająca z usług telemedycznych
              </p>
              <p className="text-gray-600 mb-4">
                3. <strong>Teleporada</strong> - konsultacja lekarska prowadzona zdalnie
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 3. Warunki świadczenia usług</h2>
              <p className="text-gray-600 mb-4">
                1. Usługi świadczone są przez licencjonowanych lekarzy.
              </p>
              <p className="text-gray-600 mb-4">
                2. Teleporada nie zastępuje tradycyjnej wizyty lekarskiej w przypadkach 
                wymagających bezpośredniego badania.
              </p>
              <p className="text-gray-600 mb-4">
                3. W stanach nagłych należy niezwłocznie skontaktować się z pogotowiem 
                ratunkowym (112).
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 4. Dostępność usług</h2>
              <p className="text-gray-600 mb-4">
                1. Usługi dostępne są 24 godziny na dobę, 7 dni w tygodniu.
              </p>
              <p className="text-gray-600 mb-4">
                2. Czas oczekiwania na konsultację:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Lekarz medycyny rodzinnej: do 4 godzin</li>
                <li>Specjaliści: do 24 godzin</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 5. Płatności</h2>
              <p className="text-gray-600 mb-4">
                1. Opłaty za usługi pobierane są zgodnie z aktualnym cennikiem.
              </p>
              <p className="text-gray-600 mb-4">
                2. Płatności realizowane są za pośrednictwem bezpiecznych systemów płatniczych.
              </p>
              <p className="text-gray-600 mb-4">
                3. Możliwa jest rezygnacja z usługi w ciągu 14 dni od zawarcia umowy.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 6. Obowiązki pacjenta</h2>
              <p className="text-gray-600 mb-4">
                1. Pacjent zobowiązany jest do:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Podania prawdziwych danych osobowych</li>
                <li>Dokładnego opisania objawów</li>
                <li>Przestrzegania zaleceń lekarza</li>
                <li>Informowania o przyjmowanych lekach</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 7. Dokumentacja medyczna</h2>
              <p className="text-gray-600 mb-4">
                1. Dokumentacja medyczna prowadzona jest zgodnie z obowiązującymi przepisami.
              </p>
              <p className="text-gray-600 mb-4">
                2. Pacjent ma prawo dostępu do swojej dokumentacji medycznej.
              </p>
              <p className="text-gray-600 mb-4">
                3. E-recepty i skierowania wystawiane są w systemie P1.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 8. Reklamacje</h2>
              <p className="text-gray-600 mb-4">
                1. Reklamacje można składać:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>E-mail: reklamacje@homedoctor.pl</li>
                <li>Telefon: +48 800 000 000</li>
                <li>Formularz na stronie internetowej</li>
              </ul>
              <p className="text-gray-600 mb-4">
                2. Reklamacje rozpatrywane są w ciągu 14 dni roboczych.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 9. Postanowienia końcowe</h2>
              <p className="text-gray-600 mb-4">
                1. Regulamin może być zmieniany. O zmianach informujemy z 7-dniowym wyprzedzeniem.
              </p>
              <p className="text-gray-600 mb-4">
                2. W sprawach nieuregulowanych stosuje się przepisy prawa polskiego.
              </p>
              <p className="text-gray-600 mb-4">
                3. Ewentualne spory rozstrzygane są przez sąd właściwy dla siedziby Usługodawcy.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">§ 10. Kontakt</h2>
              <p className="text-gray-600 mb-4">
                Home Doctor sp. z o.o.<br />
                ul. Przykładowa 1<br />
                00-000 Warszawa<br />
                E-mail: kontakt@homedoctor.pl<br />
                Telefon: +48 800 000 000
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
