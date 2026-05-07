# Restaurant Management System

Backend-prosjekt utviklet som fordypningsprosjekt i Backend-Programmering ved Gokstad Akademiet.

---

## Gruppemedlemmer

* Mehmet Keklik
* Volkan Senguller
* Adeel Afzal

---

## Prosjektbeskrivelse

Dette prosjektet er et Restaurant Management System utviklet med ASP.NET Core Web API, SQLite og frontend med JavaScript.

Systemet gjør det mulig for brukere å:

* Se produkter og meny
* Lage reservasjoner
* Skrive anmeldelser

Administrator kan:

* Legge til produkter
* Oppdatere produkter
* Slette produkter

---

## Teknologier

### Backend

* ASP.NET Core Web API
* Entity Framework Core
* SQLite
* Swagger

### Frontend

* HTML
* CSS
* JavaScript
* Fetch API

### Verktøy

* Git
* GitHub
* Visual Studio

---

## Funksjonalitet

### Produkthåndtering

* Hente alle produkter
* Legge til produkter
* Oppdatere produkter
* Slette produkter

### Reservasjonssystem

* Lage reservasjoner
* Se reservasjoner

### Anmeldelsessystem

* Lage anmeldelser
* Vise kundeanmeldelser

### Autentisering

* Enkel login-endpoint implementert

---

## API Endpoints

### Products

```http
GET    /api/products
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
```

### Reservations

```http
GET    /api/reservations
POST   /api/reservations
```

### Reviews

```http
GET    /api/reviews
POST   /api/reviews
```

### Authentication

```http
POST   /api/auth/login
```

---

## Prosjektstruktur

```text
RestaurantManagementSystem/
│
├── Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Program.cs
│   └── appsettings.json
│
├── Frontend/
│   ├── index.html
│   ├── menu.html
│   ├── reservations.html
│   ├── reviews.html
│   ├── css/
│   └── js/
│
└── README.md
```

---

## Hvordan kjøre prosjektet

### Krav

Installer:

* .NET SDK
* Visual Studio eller VS Code

---

### Kjør backend

```bash
dotnet restore
dotnet run
```

Swagger URL:

```text
http://localhost:5052/swagger
```

> Port kan variere avhengig av lokal konfigurasjon.

---

### Kjør frontend

Åpne `index.html` med Live Server eller direkte i nettleser.

---

## Database

Prosjektet bruker SQLite med Entity Framework Core.

Databasen inneholder:

* Products
* Reservations
* Reviews

---

## Testing

Testing ble utført med:

* Swagger
* Frontend-integrasjonstesting

Testet funksjonalitet:

* CRUD-operasjoner
* Reservasjoner
* Anmeldelser
* API-kommunikasjon

---

## Utfordringer under utvikling

* Git merge conflicts
* Synkroniseringsproblemer mellom lokal repository og GitHub
* Feil API URL-konfigurasjon
* Integrasjon mellom frontend og backend

### Løsninger

* Bruk av `git reset` og `git clean`
* Manuell løsning av konflikter
* Korrekt API-konfigurasjon

---

## Videre arbeid

* JWT autentisering
* Bedre sikkerhet
* Cloud deployment
* Docker-støtte
* Forbedret frontend UI
* Mer avansert testing og validering

---

## Konklusjon

Prosjektet demonstrerer hvordan en skalerbar backend API for et restaurant management system kan utvikles med ASP.NET Core og integreres med en frontend-applikasjon.

Systemet støtter:

* Produkthåndtering
* Reservasjoner
* Anmeldelser
* API-kommunikasjon

---

## GitHub Repository

https://github.com/wengller/restaurant-management-system 

