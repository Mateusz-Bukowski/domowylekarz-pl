"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, faHandshake, faTasks, faGraduationCap, faHashtag, 
  faFunnelDollar, faChalkboardTeacher, faGlobe, faPlusCircle, 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
import CookiesModal from './Cookies/CookiesModal';

// Komponent karty firmy
function CompanyCard({ name, icon, color, description, tag, website }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col">
      <div className="p-6 flex items-center border-l-4" style={{ borderLeftColor: color }}>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-semibold mr-4" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
          </div>
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-600 hover:text-purple-700 text-sm flex items-center"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" /> {website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);

  // Funkcja filtrująca kategorie
  const filterByCategory = (category) => {
    setActiveCategory(category);
  };

  return ( 
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header section */}
      <header className="relative bg-gradient-to-r from-purple-600 to-purple-400 text-white py-24 rounded-bl-[100px] overflow-hidden">
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Katalog Firm Wspierających Agencje Ubezpieczeniowe</h1>
    <p className="text-xl max-w-3xl mx-auto mb-8">Znajdź partnerów, którzy pomogą Ci rozwinąć Twoją agencję ubezpieczeniową w Polsce</p>
    <div className="max-w-2xl mx-auto">
      <input 
        type="text" 
        placeholder="Szukaj firmy, usługi lub specjalizacji..." 
        className="w-full px-6 py-4 rounded-full bg-white border-none shadow-lg text-gray-700"
      />
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-16 bg-wave-pattern bg-cover"></div>
</header>

      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center py-4 gap-2">
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('all')}
            >
              <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Wszystkie kategorie
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'multiagencje' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('multiagencje')}
            >
              <FontAwesomeIcon icon={faHandshake} className="mr-2" /> Multiagencje
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'crm' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('crm')}
            >
              <FontAwesomeIcon icon={faTasks} className="mr-2" /> Systemy CRM
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'szkolenia' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('szkolenia')}
            >
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Szkolenia
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'social' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('social')}
            >
              <FontAwesomeIcon icon={faHashtag} className="mr-2" /> Social Media
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'leady' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('leady')}
            >
              <FontAwesomeIcon icon={faFunnelDollar} className="mr-2" /> Generowanie Leadów
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'mentoring' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('mentoring')}
            >
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" /> Mentoring
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center ${activeCategory === 'www' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              onClick={() => filterByCategory('www')}
            >
              <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Strony www
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        {/* Dynamicznie wyświetlane sekcje w zależności od wybranej kategorii */}
        {activeCategory === 'all' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Rozwiń swoją agencję z najlepszymi partnerami</h2>
            </div>
          </section>
        )}

        {(activeCategory === 'all' || activeCategory === 'multiagencje') && (
          <section className={activeCategory !== 'all' ? 'block' : ''}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Multiagencje</h2>
              {activeCategory !== 'all' && (
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Firmy oferujące zaplecze, wsparcie oraz dostęp do wielu towarzystw ubezpieczeniowych dla agentów ubezpieczeniowych.
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Przykładowe firmy z kategorii Multiagencje */}
              <CompanyCard 
                name="CUK Ubezpieczenia" 
                icon="C" 
                color="#E91E63"
                description="Jedna z największych multiagencji w Polsce z siecią ponad 4000 pośredników. Oferuje szeroki wybór ubezpieczeń od 33 różnych towarzystw ubezpieczeniowych, umożliwiając porównanie i dopasowanie oferty do potrzeb klienta.."
                tag="Multiagencje"
                website="cuk.pl"
              />
              <CompanyCard 
                name="UNILINK" 
                icon="U" 
                color="#673AB7"
                description="Największa sieć multiagencyjna w Polsce z ponad 6700 pośrednikami. UNILINK współpracuje z 39 towarzystwami ubezpieczeniowymi oferując kompleksowe rozwiązania zarówno dla klientów indywidualnych, jak i biznesowych. Firma wyróżnia się innowacyjnym podejściem i wsparciem dla agentów.."
                tag="Multiagencje"
                website="unilink.pl"
              />
              <CompanyCard 
                name="PHINANCE" 
                icon="P" 
                color="#03A9F4"
                description="Multiagencja o ugruntowanej pozycji na rynku, zatrudniająca ponad 1400 pośredników współpracujących z 29 towarzystwami ubezpieczeniowymi. PHINANCE specjalizuje się w kompleksowym doradztwie finansowym, łącząc ofertę ubezpieczeniową z rozwiązaniami inwestycyjnymi."
                tag="Multiagencje"
                website="phinance.pl"
              />
              <CompanyCard 
                name="OVB Allfinanz" 
                icon="O" 
                color="#009688"
                description="Jedna z największych grup finansowych w Europie, obecna także w Polsce. OVB Allfinanz zatrudnia ponad 6300 pośredników i współpracuje z 17 towarzystwami ubezpieczeniowymi. Firma oferuje kompleksowe doradztwo finansowe i ubezpieczeniowe, wspomagane profesjonalnymi narzędziami i szkoleniami."
                tag="Multiagencje"
                website="ovb.pl"
              />
              <CompanyCard 
                name="Asecura Konsultant" 
                icon="A" 
                color="#FF5722"
                description="Dynamicznie rozwijająca się multiagencja z siecią ponad 2300 pośredników współpracujących z 37 towarzystwami ubezpieczeniowymi. Asecura oferuje agentom zaawansowane narzędzia cyfrowe, szkolenia i kompleksowe wsparcie w codziennej pracy, co przekłada się na jakość obsługi klientów."
                tag="Multiagencje"
                website="asecura.pl"
              />
            </div>
          </section>
        )}

{(activeCategory === 'all' || activeCategory === 'crm') && (
  <section className={activeCategory !== 'all' ? 'block' : ''}>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Systemy CRM</h2>
      {activeCategory !== 'all' && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nowoczesne narzędzia do zarządzania relacjami z klientami i polisami dla agentów ubezpieczeniowych.
        </p>
      )}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <CompanyCard 
        name="Insly" 
        icon="I" 
        color="#4A86E8"
        description="System CRM dla brokerów i agentów ubezpieczeniowych. Platforma umożliwia zarządzanie polisami, klientami oraz automatyzację procesów sprzedażowych i obsługowych w branży ubezpieczeniowej."
        tag="Systemy CRM"
        website="insly.pl"
      />
      <CompanyCard 
        name="Polisa w Chmurze" 
        icon="PC" 
        color="#4CAF50"
        description="Kompleksowy system do zarządzania agencją ubezpieczeniową w chmurze. Pozwala na efektywne prowadzenie biznesu, zarządzanie bazą klientów i polis oraz automatyzację procesów przypomnień i wznowień."
        tag="Systemy CRM"
        website="polisawchmurze.pl"
      />
      <CompanyCard 
        name="Berg System" 
        icon="BS" 
        color="#FF5722"
        description="Zaawansowany system CRM dedykowany dla branży ubezpieczeniowej. Oferuje narzędzia do zarządzania sprzedażą, obsługą klienta oraz analityką biznesową, dostosowane do specyfiki pracy agenta ubezpieczeniowego."
        tag="Systemy CRM"
        website="bergsystem.pl"
      />
    </div>
  </section>
)}

{(activeCategory === 'all' || activeCategory === 'social') && (
  <section className={activeCategory !== 'all' ? 'block' : ''}>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Social Media</h2>
      {activeCategory !== 'all' && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          Narzędzia i usługi wspierające agentów ubezpieczeniowych w budowaniu obecności w mediach społecznościowych.
        </p>
      )}
    </div>

    <section id="social-media">
      {/* Złoci Partnerzy */}
      <div className="bg-amber-50 rounded-xl p-8 mb-12">
        <h3 className="text-center text-2xl font-bold text-amber-500 mb-8">
          <span className="mx-2">★</span> Złoci Partnerzy <span className="mx-2">★</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CompanyCard 
            name="Postownik Ubezpieczeniowy" 
            icon="PU"
            color="#FFD700"
            description="Największa baza wiedzy o marketingu ubezpieczeniowym w social mediach. Platforma oferuje gotowe wzory postów, materiały graficzne oraz porady dotyczące skutecznej komunikacji w mediach społecznościowych dla agentów ubezpieczeniowych."
            tag="Social Media"
            website="www.postownikubezpieczeniowy"
          />
        </div>
      </div>
      
      {/* Pozostali partnerzy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <CompanyCard 
          name="100 postów na abonament" 
          icon="100" 
          color="#9C27B0"
          description="Usługa abonamentowa oferująca łącznie 100 pomysłów na posty dla agentów ubezpieczeniowych."
          tag="Social Media"
          website="marcinkowalik.online"
        />
      </div>
    </section>
  </section>
)}

{(activeCategory === 'all' || activeCategory === 'szkolenia') && (
  <section className={activeCategory !== 'all' ? 'block' : ''}>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Szkolenia</h2>
      {activeCategory !== 'all' && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          Kursy i programy rozwojowe dla agentów ubezpieczeniowych chcących podnosić swoje kompetencje.
        </p>
      )}
    </div>
    
    {/* Złoci Partnerzy */}
    <div className="bg-amber-50 rounded-xl p-8 mb-12">
      <h3 className="text-center text-2xl font-bold text-amber-500 mb-8">
        <span className="mx-2">★</span> Złoci Partnerzy <span className="mx-2">★</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CompanyCard 
          name="Akademia Agencja w Sieci" 
          icon="AAS" 
          color="#2196F3"
          description="Kompleksowy program szkoleniowy uczący agentów ubezpieczeniowych jak skutecznie prowadzić marketing internetowy i budować swoją markę w sieci. Akademia oferuje praktyczne warsztaty, case studies i wsparcie ekspertów w obszarze digital marketingu."
          tag="Szkolenia"
          website="agencjawsieci.com"
        />
        <CompanyCard 
          name="Doradca XXI wieku" 
          icon="D21" 
          color="#E91E63"
          description="Kompleksowy program szkoleniowy dla agentów ubezpieczeniowych, który przygotowuje do pracy w nowoczesnym środowisku biznesowym. Kurs oferuje wiedzę z zakresu technik sprzedaży, obsługi klienta oraz wykorzystania narzędzi cyfrowych w codziennej pracy."
          tag="Szkolenia"
          website="doradca21wieku.pl"
        />
        <CompanyCard 
          name="Cyfrowy Agent" 
          icon="CA" 
          color="#00BCD4"
          description="Konferencja dla agentów ubezpieczeniowych, której druga edycja odbędzie się 23.03.2025 w Warszawie. Wydarzenie koncentruje się na cyfryzacji pracy agenta, wykorzystaniu narzędzi cyfrowych, budowaniu obecności online oraz efektywnym pozyskiwaniu klientów z internetu.."
          tag="Szkolenia"
          website="cyfrowyagent.com"
        />
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <CompanyCard 
        name="Akademia Ubezpieczeń" 
        icon="AU" 
        color="#673AB7"
        description="Profesjonalne szkolenia dla branży ubezpieczeniowej prowadzone przez ekspertów z wieloletnim doświadczeniem. Akademia oferuje kursy z zakresu technik sprzedaży oraz rozwoju kompetencji miękkich niezbędnych w pracy agenta."
        tag="Szkolenia"
        website="akademiaubezpieczen.eu"
      />
      <CompanyCard 
        name="Życie w Multi" 
        icon="ŻM" 
        color="#29B6F6"
        description="Specjalistyczne szkolenia dla agentów pracujących w multiagencjach ubezpieczeniowych. Program szkoleniowy koncentruje się na rozwoju umiejętności sprzedażowych, budowaniu relacji z klientami oraz efektywnym zarządzaniu portfolio produktów od różnych ubezpieczycieli."
        tag="Szkolenia"
        website="zyciewmulti.pl"
      />
    </div>
  </section>
)}

{(activeCategory === 'all' || activeCategory === 'www') && (
  <section className={activeCategory !== 'all' ? 'block' : ''}>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Strony www</h2>
      {activeCategory !== 'all' && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          Profesjonalne usługi tworzenia stron internetowych dedykowanych dla agentów i agencji ubezpieczeniowych.
        </p>
      )}
    </div>
    
    {/* Złoci Partnerzy */}
    <div className="bg-amber-50 rounded-xl p-8 mb-12">
      <h3 className="text-center text-2xl font-bold text-amber-500 mb-8">
        <span className="mx-2">★</span> Złoci Partnerzy <span className="mx-2">★</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CompanyCard 
          name="Agent w sieci" 
          icon="AW" 
          color="#2196F3"
          description="Specjalistyczna agencja zajmująca się tworzeniem skutecznych stron internetowych dla agentów ubezpieczeniowych. Oferuje kompleksowe rozwiązania, które pomagają agentom pozyskiwać klientów online, budować markę osobistą i zwiększać sprzedaż."
          tag="Strony www"
          website="agentwsieci.pl"
        />
      </div>
    </div>
  </section>
)}

        {(activeCategory === 'all' || activeCategory === 'leady') && (
          <section className={activeCategory !== 'all' ? 'block' : ''}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Generowanie Leadów</h2>
              {activeCategory !== 'all' && (
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Narzędzia i usługi pomagające w pozyskiwaniu nowych klientów dla agencji ubezpieczeniowych.
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Przykładowe firmy z kategorii Generowanie Leadów */}
              <CompanyCard 
                name="Human2Human" 
                icon="H2H" 
                color="#F44336"
                description="Platforma oferująca wysokiej jakości leady ubezpieczeniowe z naciskiem na ludzkie podejście do klienta."
                tag="Generowanie Leadów"
                website="human2human.biz"
              />
              <CompanyCard 
                name="Lead Guru" 
                icon="LG" 
                color="#FF9800"
                description="Kompleksowe rozwiązania w zakresie generowania leadów dla branży ubezpieczeniowej."
                tag="Generowanie Leadów"
                website="leadguru.pl"
              />
            </div>
          </section>
        )}

        {/* Przycisk dodawania firmy */}
        <div className="flex justify-center mt-16">
          <button 
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center hover:bg-purple-700 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> Dodaj swoją firmę
          </button>
        </div>
      </main>

      {/* Modal do kontaktu */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button 
              className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Dołącz do partnerów</h3>
            <p className="text-gray-600 mb-2">Chcesz dołączyć do partnerów? Napisz na:</p>
            <p className="text-purple-600 font-bold text-xl mb-6">kontakt@insurketing.pl</p>
            <button 
              className="bg-purple-600 text-white px-5 py-2 rounded-full w-full hover:bg-purple-700"
              onClick={() => setIsModalOpen(false)}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
                  {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <span className="mr-2 opacity-50">🏠</span> Strona główna
            </Link>
            
            <span 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 cursor-not-allowed text-sm"
            >
              <span className="mr-2 opacity-50">📝</span> Blog <span className="text-red-500 ml-1">(w krótce)</span>
            </span>
            
            <Link 
              href="/polityka-prywatnosci" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <span className="mr-2 opacity-50">🔒</span> polityka prywatności
            </Link>
            
            <Link 
              href="/regulamin" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <span className="mr-2 opacity-50">📋</span> regulamin
            </Link>

            <button 
              onClick={() => setIsCookiesModalOpen(true)}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <span className="mr-2 opacity-50">🍪</span> ustawienia cookies
            </button>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2025 Kompas Agenta. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>

      <CookiesModal 
        isOpen={isCookiesModalOpen}
        onClose={() => setIsCookiesModalOpen(false)}
      />
    </div>
  );
}