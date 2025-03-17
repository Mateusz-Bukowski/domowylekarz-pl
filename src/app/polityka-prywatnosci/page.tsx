'use client';
import Link from 'next/link';

export default function PolitykaPrywatnosci() {
  return (
    <main className="container mx-auto px-4 py-8 relative">
      {/* Przycisk Powrót */}
      <div className="absolute top-4 right-4">
        <Link href="/" className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Powrót
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">Polityka Prywatności</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <p className="mb-4">
            Dążąc do zapewnienia jak najlepszej ochrony danych osobowych, pragniemy zapewnić, że chronimy Państwa dane osobowe na najwyższym poziomie, a w niniejszym dokumencie znajdą Państwo wszystkie informacje o tym, jakie dane osobowe przetwarzamy i w jakim celu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">1. Kto jest Administratorem danych osobowych?</h2>
          <p className="mb-4">
            Administratorem danych osobowych jest Agencja Ubezpieczeniowa Mateusz Bukowski z siedzibą w Nowej Koperni (67-300) przy ul. Grzybowej 8, NIP: 4290032937.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Jak się skontaktować z Administratorem?</h2>
          <p className="mb-4">
            W razie jakichkolwiek pytań lub uwag dotyczących przetwarzania danych, prosimy o kontakt:
          </p>
          <p className="mb-2">
            e-mail: kontakt@insurketing.pl
          </p>
          <p className="mb-4">
            korespondencyjnie: ul. Grzybowa 8, 67-300 Nowa Kopernia
          </p>
          <p className="mb-4">
            Żądanie poprawienia lub usunięcia danych osobowych należy zgłosić nam na adres: kontakt@insurketing.pl
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Jakie dane zbieramy i w jakim celu?</h2>
          <p className="mb-4">
            Zakres i cel zbierania danych zależy od tego, w jaki sposób korzystają Państwo z usług Administratora:
          </p>

          <div className="ml-4 mb-6">
            <h3 className="text-lg font-semibold mb-3">1. Dane Użytkowników, które pobierane są automatycznie po wejściu do serwisu</h3>
            <p className="mb-3">
              W celu umożliwienia świadczenia usługi oraz w celach statystyczno-rozliczeniowych serwis przetwarza dane charakteryzujące sposób korzystania przez Użytkowników z usług serwisu. W tym celu serwer:
            </p>
            <ul className="list-disc ml-6 mb-3">
              <li>monitoruje adres IP, z którego łączy się Użytkownik,</li>
              <li>zbiera informacje statystyczne o przeglądanych stronach.</li>
            </ul>
            <p className="mb-3">
              Serwis nie przechowuje żadnych informacji o konfiguracji sprzętowej komputera lub programach zainstalowanych na komputerze Użytkownika.
            </p>
            <p className="mb-3">
              System informatyczny, z którego korzysta serwis automatycznie gromadzi w logach dane związane z urządzeniem, z którego korzysta Użytkownik łącząc się z serwisem. Dane te gromadzone są jedynie w celach statystycznych i dotyczą: typu urządzenia, systemu operacyjnego, rodzaju przeglądarki internetowej, rozdzielczości ekranu, głębi kolorów, IP, dostawcy usług internetowych, czy adresu wejścia na serwis i są wykorzystywane jedynie w procesie optymalizacji serwisu w celu zapewnienia jak największej wygody korzystania, co stanowi prawnie uzasadniony interes.
            </p>
            <p className="mb-3">
              Dane te nie są nigdy łączone z innymi danymi i stanowią jedynie materiał do analizy statystycznej i mechanizmów korygowania błędów systemowych.
            </p>
          </div>

          <div className="ml-4 mb-6">
            <h3 className="text-lg font-semibold mb-3">2. Dane Partnerów</h3>
            <p className="mb-3">
              Jeżeli są Państwo Partnerami, których informacje są publikowane w serwisie, przetwarzamy Państwa dane, takie jak nazwa firmy, opis działalności, kategoria usług, adres strony internetowej, dane kontaktowe i inne informacje przekazane w celu publikacji, w celu:
            </p>
            <ul className="list-disc ml-6 mb-3">
              <li>wykonania umowy o publikację informacji w serwisie - podstawą prawną przetwarzania jest niezbędność przetwarzania do wykonania umowy;</li>
              <li>realizacji obowiązków prawnych ciążących na Administratorze, wynikających m.in. z przepisów podatkowych i przepisów o rachunkowości - podstawą prawną przetwarzania jest obowiązek prawny;</li>
              <li>w celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami - podstawą prawną przetwarzania jest prawnie uzasadniony interes, polegający na ochronie naszych praw.</li>
            </ul>
          </div>
        </section>

        <div className="ml-4 mb-6">
            <h3 className="text-lg font-semibold mb-3">3. Dane związane z opiniami</h3>
            <p className="mb-3">
              W przypadku gdy Użytkownicy przesyłają do Administratora opinie o Partnerach (np. za pośrednictwem poczty elektronicznej), Administrator może zbierać następujące dane:
            </p>
            <ul className="list-disc ml-6 mb-3">
              <li>imię i nazwisko lub pseudonim osoby przekazującej opinię,</li>
              <li>adres e-mail,</li>
              <li>treść opinii,</li>
              <li>ocena (np. w formie gwiazdek).</li>
            </ul>
            <p className="mb-3">Dane te są przetwarzane w celu:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>publikacji opinii w Serwisie (art. 6 ust. 1 lit. a RODO - na podstawie zgody),</li>
              <li>weryfikacji autentyczności opinii (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes Administratora),</li>
              <li>odpowiedzi na opinię (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes Administratora).</li>
            </ul>
          </div>

          <div className="ml-4 mb-6">
            <h3 className="text-lg font-semibold mb-3">4. Kontakt poprzez wiadomość e-mail</h3>
            <p className="mb-3">
              W przypadku, gdy Użytkownik kontaktuje się z nami za pośrednictwem wiadomości e-mail, przekazuje nam jednocześnie swój adres e-mail jako nadawca wiadomości. Ponadto, w treści wiadomości może zawrzeć również inne dane osobowe. Użytkownik może zostać przez nas poproszony o podanie dodatkowych danych tylko wówczas, gdy jest to niezbędne do obsługi sprawy, której dotyczy kontakt.
            </p>
            <p className="mb-3">Dane te są przetwarzane w celu:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>obsługi zapytania i udzielenia odpowiedzi - podstawą prawną jest nasz prawnie uzasadniony interes w związku z udzieloną przez Użytkownika zgodą, polegający na konieczności rozwiązania zgłoszonej sprawy związanej z serwisem;</li>
              <li>ewentualnego dochodzenia i obrony przed potencjalnymi roszczeniami - podstawą prawną jest nasz prawnie uzasadniony interes.</li>
            </ul>
          </div>

          <section>
          <h2 className="text-xl font-semibold mb-4">4. Jak długo przetwarzamy dane osobowe?</h2>
          <p className="mb-4">
            Okres przetwarzania danych zależy od podstawy prawnej i celu przetwarzania. Co do zasady dane przetwarzane są:
          </p>
          
          <ul className="list-disc ml-6 mb-6">
            <li>przez czas świadczenia usługi;</li>
            <li>do czasu wycofania wyrażonej zgody;</li>
            <li>do czasu zgłoszenia skutecznego sprzeciwu;</li>
            <li>do czasu skutecznego żądania usunięcia danych.</li>
          </ul>

          <div className="space-y-4">
            <p>
              W przypadku Partnerów, ich dane są przechowywane przez okres współpracy oraz przez okres wymagany przepisami prawa podatkowego i rachunkowego (zwykle 5 lat od końca roku kalendarzowego), a także przez okres przedawnienia ewentualnych roszczeń.
            </p>

            <p>
              Dane osób kontaktujących się z Administratorem są przechowywane przez okres niezbędny do udzielenia odpowiedzi i załatwienia sprawy, a następnie przez okres przedawnienia ewentualnych roszczeń.
            </p>

            <p>
              Dane analityczne są przechowywane przez okres 24 miesięcy od ich zebrania.
            </p>

            <p>
              Okres przetwarzania danych może być przedłużony w przypadku, gdy przetwarzanie jest niezbędne do ustalenia, dochodzenia lub obrony przed ewentualnymi roszczeniami, a po tym okresie, jedynie w przypadku i w zakresie, w jakim będą wymagać tego przepisy prawa.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Jakie prawa przysługują Państwu w stosunku do przetwarzania Państwa danych osobowych?</h2>
          <p className="mb-4">
            Gwarantujemy realizację wszystkich praw osób, których dane przetwarzamy, w tym prawo:
          </p>

          <ul className="list-disc ml-6 mb-6">
            <li>dostępu do danych, w tym uzyskania kopii;</li>
            <li>sprostowania danych;</li>
            <li>usunięcia danych;</li>
            <li>ograniczenia przetwarzania;</li>
            <li>przenoszenia danych;</li>
            <li>cofnięcia zgody w dowolnym momencie (co nie wpływa na zgodność z prawem przetwarzania, którego dokonano przed cofnięciem zgody);</li>
            <li>wniesienia sprzeciwu;</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
          </ul>

          <p className="font-semibold">
            W PRZYPADKU CHĘCI SKORZYSTANIA ZE SWOICH PRAW, PROSIMY W PIERWSZEJ KOLEJNOŚCI O KONTAKT Z NAMI.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Komu są udostępniane dane osobowe?</h2>
          <p className="mb-4">
            Dane osobowe mogą być udostępniane następującym kategoriom odbiorców:
          </p>

          <ul className="list-disc ml-6 mb-6">
            <li>podmiotom świadczącym usługi hostingowe (tiiny.host),</li>
            <li>podmiotom świadczącym usługi analityczne (Plausible.io),</li>
            <li>podmiotom świadczącym usługi księgowe i podatkowe,</li>
            <li>organom państwowym lub innym podmiotom uprawnionym na podstawie przepisów prawa.</li>
          </ul>

          <p className="mb-4">
            Dane osobowe na podstawie odpowiednich umów są przekazywane podmiotom przetwarzającym dane w imieniu Administratora. Takie podmioty przetwarzają dane wyłącznie zgodnie z naszymi instrukcjami, z zachowaniem ich poufności i bezpieczeństwa. Przysługuje nam prawo kontroli sposobu przetwarzania powierzonych przez nas danych.
          </p>

          <p className="mb-4">
            Dane osobowe mogą być przekazywane do państw trzecich (poza Europejski Obszar Gospodarczy) tylko wtedy, gdy jest to niezbędne i z zapewnieniem odpowiedniego poziomu ochrony danych osobowych.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Polityka cookies</h2>
          <p className="mb-4">
            Serwis stosuje tzw. ciasteczka (ang. cookies). Są to małe pliki tekstowe umieszczane na urządzeniach Użytkowników (np. komputerach) za pośrednictwem przeglądarek internetowych. Pliki te pozwalają na przechowywanie określonych informacji na urządzeniu Użytkownika, a następnie ich odczytanie przez serwis, który te pliki stworzył. Cookies zawierają zwykle oprócz nazwy domeny serwisu internetowego, z którego pochodzą, także czas przechowywania ich na urządzeniu końcowym oraz unikatowy numer.
          </p>

          <p className="mb-4">Cookies wykorzystywane są przez nas w celu:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>dopasowania zawartości witryn serwisu internetowego do indywidualnych upodobań Użytkownika oraz optymalizacji korzystania przez niego ze stron internetowych;</li>
            <li>tworzenia statystyk (abyśmy mogli lepiej zrozumieć, w jaki sposób Użytkownicy naszego serwisu internetowego korzystają ze stron internetowych, a w konsekwencji mogli ulepszyć strukturę i zawartość tych stron).</li>
          </ul>

          <p className="mb-4">
            Serwis nie przechowuje żadnych informacji o konfiguracji sprzętowej komputera lub programach zainstalowanych na komputerze Użytkownika.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Zmiana ustawień plików cookies:</h3>
            <p className="mb-4">
              Zazwyczaj przeglądarka internetowa Użytkownika domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. W każdej chwili jednak Użytkownicy serwisu internetowego mają możliwość i prawo do dokonywania zmiany ustawień dotyczących cookies. Aby dokonać zmiany ustawień plików cookies Użytkownicy powinni zapoznać się ze szczegółowymi informacjami o możliwościach i sposobach obsługi cookies, które są dostępne w ustawieniach przeglądarki internetowej.
            </p>
            <p>
              W przypadku, gdy Użytkownik nie zgadza się na umieszczanie na swoim urządzeniu plików cookies może zablokować ich umieszczenie odpowiednio konfigurując swoją przeglądarkę internetową. Informacje jak to zrobić znajdzie w plikach pomocy swojej przeglądarki internetowej. Niestety w przypadku zablokowania plików cookies pochodzących z serwisu nie możemy zagwarantować jego poprawnego działania. Jeżeli Użytkownik nie dokona zmiany ustawień w zakresie cookies to pliki te będą zamieszczone w urządzeniu końcowym Użytkownika. Oznacza to, iż będziemy przechowywać informacje w urządzeniu końcowym Użytkownika i uzyskiwać dostęp do tych informacji.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Narzędzia analityczne i marketingowe</h2>
          <p className="mb-4">
            Korzystamy z narzędzia analitycznego Plausible.io, które pomaga nam zrozumieć, w jaki sposób Użytkownicy korzystają z serwisu. Narzędzie to nie zbiera żadnych danych osobowych i nie używa plików cookies. Wszystkie dane są anonimizowane i agregowane, co oznacza, że nie jesteśmy w stanie zidentyfikować konkretnego Użytkownika.
          </p>

          <p className="mb-4">
            Plausible.io gromadzi podstawowe informacje o ruchu na stronie, takie jak:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>liczba odwiedzin strony,</li>
            <li>źródła ruchu (skąd Użytkownicy trafiają na stronę),</li>
            <li>najpopularniejsze podstrony,</li>
            <li>czas spędzony na stronie,</li>
            <li>używane urządzenia i przeglądarki.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">9. Postanowienia końcowe</h2>
          <p className="mb-4">
            Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Każda zmiana będzie publikowana na stronie serwisu. O istotnych zmianach Polityki Prywatności Użytkownicy będą dodatkowo informowani poprzez wyraźną informację na stronie serwisu.
          </p>

          <p className="mb-4">
            Niniejsza Polityka Prywatności obowiązuje od dnia 14 marca 2025 roku.
          </p>

          <p className="mb-4">
            W razie jakichkolwiek pytań lub wątpliwości związanych z Polityką Prywatności, prosimy o kontakt na adres e-mail: kontakt@insurketing.pl
          </p>
        </section>

      </div>
    </main>
  );
}