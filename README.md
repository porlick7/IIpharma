### Basic routing 

Operacja na bazie danych

<ul>
<li> /api/init  --  GET  -- automatyczne dodawanie produktow i substancji czynnych do bazy(Po prostu daj get /api/init) </li>
<li> /api/drop  --  GET   -- usuwanie wszystkiego z bazy lekow i substancji (nie uzytkownika)</li>
</ul>

Product

<ul>  
<li> /api/products/  --  GET   --  pokaz wszystkie produkty </li>
<li> /api/products/nazwa leku  --  GET     --    pokaz dany produkt np. amotaks tabletki i jej dane</li>
<li> /api/products/active/substancja czynna  --  GET     --   pokaz wszystkie leki z dana substancja czynna </li>
</ul>

Active Substance

<ul>
<li> /api/active/  --  GET     --    pokaz wszystkie czynne substancje</li>
</ul>

User
<ul>
<li> /api/user/signup    POST    tworzenie nowego uzytkownika </li>
<li> /api/user/          GET     pokaz wszystkie profile - wymaga TOKENA w BEARER TOKEN do uzyskania dostepu </li>
<li> /api/user/login     GET     logowanie = wybranie BASIC_AUTH w POSTMAN </li>
<li> /api/user/me        POST    informacje o uzytkowniku - wymaga TOKENA w POSTMAN do uzyskania dostepu </li>
</ul>

### Tryby
- npm run dev - development mode
- npm run test - testy

### Koncepcja(początkowa)
Osoba zalogowana moze wpisac substancje czynna i wypisze to wszystkie leki z ta substancja 
lub wpisac nazwe leku i dostac informacje o nim

### Co jest zrobione i działa 
Logowanie i tokeny 

Operacje na schmatach wypisane w basic routing


### Co mam zrobić następnie
- Testy i sprawdzenie czy wszystko poprawnie zakladam 
- Usuwanie usera i specjalny user, dodajacy czynne substancje i produkty

```diff

### Co moze pojsc zle 
# ACTIVESUBSTANCE
! GET FindByName
✔ nic 

! GET FindByName
- Ktos poda nazwe i regex zwroci pusta tablice  


#PRODUCT
! GET Find
✔  nic

! GET FindByName 
-  Ktos poda nazwe i regex zwroci pusta tablice  

! GET FindByActiveName
- Ktos poda nazwe i regex zwroci pusta tablice  


#USER
!POST CREATE
-zle wpisane dane np. haslo za krotkie
-user juz istnieje 

!GET SHOWME
✔  nic

!POST LOGIN
- zle podane dane
```