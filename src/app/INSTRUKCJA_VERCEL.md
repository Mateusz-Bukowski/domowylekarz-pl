# 🚀 WDROŻENIE DOMOWYLEKARZ.PL NA VERCEL

## ✅ DLACZEGO VERCEL?

- **Darmowy hosting** dla projektów Next.js
- **Automatyczne wdrożenia** z GitHub
- **Własna domena** domowylekarz.pl (za darmo)
- **SSL automatycznie** - HTTPS od razu
- **Szybkie CDN** na całym świecie
- **Zero konfiguracji** - działa od razu

## 📋 KROK 1: PRZYGOTOWANIE KODU

### A. Utwórz repozytorium GitHub

1. **Idź na GitHub.com** i zaloguj się
2. **Kliknij "New repository"**
3. **Nazwa:** `domowylekarz-pl`
4. **Opis:** `Strona Domowylekarz.pl - telemedycyna`
5. **Ustaw jako Public**
6. **Kliknij "Create repository"**

### B. Prześlij kod na GitHub

Otwórz terminal w folderze projektu i wykonaj:

```bash
cd c:/Users/Lenovo/my-next-app/src/app
git init
git add .
git commit -m "Initial commit - Domowylekarz.pl"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA/domowylekarz-pl.git
git push -u origin main
```

**UWAGA:** Zamień `TWOJA-NAZWA` na swoją nazwę użytkownika GitHub

## 🌐 KROK 2: WDROŻENIE NA VERCEL

### A. Utwórz konto Vercel

1. **Idź na vercel.com**
2. **Kliknij "Sign Up"**
3. **Wybierz "Continue with GitHub"**
4. **Zaloguj się przez GitHub**

### B. Importuj projekt

1. **Na dashboardzie Vercel kliknij "New Project"**
2. **Znajdź repozytorium `domowylekarz-pl`**
3. **Kliknij "Import"**
4. **Vercel automatycznie wykryje Next.js**
5. **Kliknij "Deploy"**

### C. Czekaj na wdrożenie

- Vercel automatycznie zbuduje projekt
- Po 2-3 minutach otrzymasz link typu: `domowylekarz-pl.vercel.app`
- Strona będzie działać z pełnymi stylami!

## 🔗 KROK 3: KONFIGURACJA WŁASNEJ DOMENY

### A. W panelu Vercel

1. **Przejdź do swojego projektu**
2. **Kliknij zakładkę "Settings"**
3. **Wybierz "Domains"**
4. **Wpisz:** `domowylekarz.pl`
5. **Kliknij "Add"**

### B. Konfiguracja DNS u dostawcy domeny

Vercel pokaże Ci rekordy DNS do dodania:

**Typ A:**
- Name: `@`
- Value: `76.76.19.19`

**Typ CNAME:**
- Name: `www`
- Value: `cname.vercel-dns.com`

### C. Dodaj rekordy DNS

1. **Zaloguj się do panelu swojego dostawcy domeny**
2. **Przejdź do ustawień DNS**
3. **Dodaj powyższe rekordy**
4. **Zapisz zmiany**

**UWAGA:** Propagacja DNS może potrwać 24-48 godzin

## ⚡ KROK 4: AUTOMATYCZNE AKTUALIZACJE

### Jak to działa:
- Każda zmiana w kodzie na GitHub
- Automatycznie wdraża się na Vercel
- Bez żadnej dodatkowej pracy!

### Aby zaktualizować stronę:
1. **Zmień kod lokalnie**
2. **Wyślij na GitHub:**
   ```bash
   git add .
   git commit -m "Aktualizacja strony"
   git push
   ```
3. **Vercel automatycznie wdroży zmiany**

## 🎯 KROK 5: TESTOWANIE

### Sprawdź czy działa:
1. **Otwórz:** `https://domowylekarz-pl.vercel.app`
2. **Sprawdź wszystkie strony:**
   - Strona główna
   - `/polityka-prywatnosci`
   - `/regulamin`
3. **Przetestuj na telefonie**
4. **Sprawdź szybkość ładowania**

### Po skonfigurowaniu domeny:
1. **Otwórz:** `https://domowylekarz.pl`
2. **Sprawdź przekierowanie z www**
3. **Przetestuj SSL (zielona kłódka)**

## 💡 DODATKOWE KORZYŚCI VERCEL

### Analytics (opcjonalne)
- **Statystyki odwiedzin** za darmo
- **Wydajność strony**
- **Dane o użytkownikach**

### Edge Functions
- **Szybkie API** na całym świecie
- **Serverless functions**
- **Automatyczne skalowanie**

### Monitoring
- **Uptime monitoring**
- **Alerty o błędach**
- **Logi w czasie rzeczywistym**

## 🔄 POWRÓT DO KOMPAS AGENTA

Kiedy będziesz chciał przełączyć na Kompas Agenta:

1. **Lokalnie zamień kod** (instrukcja w `BACKUP_KOMPAS_AGENTA.md`)
2. **Wyślij na GitHub:**
   ```bash
   git add .
   git commit -m "Przełączenie na Kompas Agenta"
   git push
   ```
3. **Vercel automatycznie wdroży nową wersję**

## 📞 WSPARCIE

### Jeśli coś nie działa:
1. **Sprawdź logi** w panelu Vercel
2. **GitHub Issues** - społeczność pomoże
3. **Vercel Discord** - szybka pomoc
4. **Dokumentacja:** vercel.com/docs

## 🎉 PODSUMOWANIE

Po wykonaniu tych kroków będziesz miał:
- ✅ Profesjonalną stronę na domowylekarz.pl
- ✅ Automatyczne wdrożenia
- ✅ Darmowy hosting na zawsze
- ✅ SSL i CDN
- ✅ Możliwość łatwej zmiany na Kompas Agenta

**Czas wdrożenia:** 15-30 minut  
**Koszt:** 0 zł  
**Utrzymanie:** Automatyczne  

---

**Gotowy do rozpoczęcia? Zacznijmy od utworzenia repozytorium GitHub!**
