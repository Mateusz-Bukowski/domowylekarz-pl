# 📋 INSTRUKCJA WDROŻENIA - Domowylekarz.pl

## ✅ KROK 1: PRZYGOTOWANIE PLIKÓW (UKOŃCZONE)

Projekt został pomyślnie przygotowany do eksportu statycznego:
- ✅ Konfiguracja Next.js zaktualizowana dla eksportu statycznego
- ✅ Błędy TypeScript naprawione
- ✅ Build zakończony sukcesem
- ✅ Statyczne pliki wygenerowane w folderze `out/`

## 📁 PLIKI DO WDROŻENIA

Wszystkie pliki znajdują się w folderze: `c:/Users/Lenovo/my-next-app/src/app/out/`

### Struktura plików do uploadu:
```
out/
├── index.html                    (strona główna)
├── 404.html                     (strona błędu 404)
├── favicon.ico                  (ikona strony)
├── index.txt                    (plik tekstowy)
├── 404/
│   └── index.html
├── polityka-prywatnosci/
│   └── index.html
├── regulamin/
│   └── index.html
└── _next/                       (zasoby statyczne - CSS, JS)
    ├── static/
    └── qtSVxV5TD2ZDTSTCv85Yo/
```

## 🚀 KROK 2: WDROŻENIE NA HOSTING HOSTIDO

### Opcja A: Upload przez Menedżer plików w cPanel

1. **Zaloguj się do cPanel** na swoim hostingu Hostido
2. **Otwórz "Menedżer Plików"** (File Manager)
3. **Przejdź do folderu `public_html`** (lub folderu domeny domowylekarz.pl)
4. **Usuń wszystkie istniejące pliki** w folderze docelowym (jeśli są)
5. **Prześlij wszystkie pliki** z folderu `out/`:
   - Zaznacz wszystkie pliki i foldery z `c:/Users/Lenovo/my-next-app/src/app/out/`
   - Przeciągnij je do Menedżera plików lub użyj opcji "Upload"
   - Upewnij się, że struktura folderów została zachowana

### Opcja B: Upload przez FTP

1. **Użyj klienta FTP** (np. FileZilla, WinSCP)
2. **Dane połączenia** (z Twojego panelu Hostido):
   - Host: Twój serwer FTP
   - Port: 21 (lub jak podano w panelu)
   - Użytkownik: Twoja nazwa użytkownika FTP
   - Hasło: Twoje hasło FTP
3. **Połącz się z serwerem**
4. **Przejdź do folderu `public_html`** (lub folderu domeny)
5. **Prześlij wszystkie pliki** z folderu `out/`

## 🌐 KROK 3: KONFIGURACJA DOMENY

### Jeśli domena domowylekarz.pl NIE jest jeszcze skonfigurowana:

1. **W panelu Hostido** przejdź do sekcji "Domeny"
2. **Dodaj domenę** domowylekarz.pl
3. **Ustaw folder docelowy** na folder gdzie przesłałeś pliki
4. **Skonfiguruj DNS** (jeśli potrzebne)

### Jeśli domena JUŻ jest skonfigurowana:

1. **Upewnij się**, że pliki są w odpowiednim folderze domeny
2. **Sprawdź ustawienia DNS** w panelu domeny

## 🔧 KROK 4: TESTOWANIE

1. **Otwórz przeglądarkę** i przejdź na: `https://domowylekarz.pl`
2. **Sprawdź czy strona się ładuje** poprawnie
3. **Przetestuj nawigację**:
   - Strona główna: `https://domowylekarz.pl`
   - Polityka prywatności: `https://domowylekarz.pl/polityka-prywatnosci`
   - Regulamin: `https://domowylekarz.pl/regulamin`
4. **Sprawdź responsywność** na różnych urządzeniach

## ⚠️ MOŻLIWE PROBLEMY I ROZWIĄZANIA

### Problem: Strona wyświetla treść ale bez stylów CSS
**Rozwiązanie:**
- To jest znany problem z Next.js i shared hostingiem
- Pliki CSS i JavaScript mają ścieżki `/_next/` które nie działają na shared hostingu
- **ROZWIĄZANIE:** Użyj alternatywnego podejścia - stwórz prostą stronę HTML z wbudowanymi stylami

### Problem: Strona nie ładuje się
**Rozwiązanie:**
- Sprawdź czy pliki są w odpowiednim folderze
- Upewnij się, że plik `index.html` znajduje się w głównym folderze domeny

### Problem: Brak stylów CSS
**Rozwiązanie:**
- Upewnij się, że folder `_next/` został przesłany wraz z całą zawartością
- Sprawdź czy struktura folderów została zachowana
- **UWAGA:** Na shared hostingu ścieżki `/_next/` mogą nie działać

### Problem: Błąd 404 na podstronach
**Rozwiązanie:**
- Sprawdź czy foldery `polityka-prywatnosci/` i `regulamin/` zawierają pliki `index.html`

### Problem: Problemy z HTTPS
**Rozwiązanie:**
- W panelu Hostido włącz SSL dla domeny
- Sprawdź ustawienia przekierowań HTTP → HTTPS

## 🔄 ALTERNATYWNE ROZWIĄZANIE

Jeśli eksport Next.js nie działa poprawnie na Twoim hostingu (brak stylów), możemy:

1. **Utworzyć prostą stronę HTML** z wbudowanymi stylami CSS
2. **Zachować pełną funkcjonalność** ale bez Next.js
3. **Szybsze ładowanie** - wszystko w jednym pliku
4. **100% kompatybilność** z każdym hostingiem

**Czy chcesz, żebym przygotował taką wersję?**

## 📞 WSPARCIE

Jeśli napotkasz problemy:
1. **Sprawdź logi błędów** w panelu cPanel
2. **Skontaktuj się z supportem Hostido** - mają dostęp do szczegółów Twojego hostingu
3. **Sprawdź ustawienia DNS** domeny

## 🎉 GRATULACJE!

Po pomyślnym wdrożeniu Twoja strona Domowylekarz.pl będzie dostępna online jako szybka, statyczna strona internetowa!

---

**Data utworzenia:** 9 lipca 2025  
**Wersja:** 1.0  
**Status:** Gotowe do wdrożenia
