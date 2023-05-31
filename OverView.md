# Taskzy 

<img src="https://github.com/MinistryOrg/ToDoApp/assets/29844061/179a721c-b08a-4298-81cb-6e31985b64c1" width="250" height="250" border="1"/>

# Πανεπιστήμιο Δυτικής Αττικής
## Υπολογιστική Νέφους και Υπηρεσίες
### Τελική Εργασία Εργαστηρίου 

---
# Περιεχόμενα
[-Στοιχεία Ομάδας](#ομάδα) <br/>
[-Πληροφορίες Taskzy](#taskzy) <br/>
[-Εγκατάσταση εργαλείων](#εγκατάσταση-εργαλείων) <br/>
[-Ενότητα 1: Δημιουργία του Client και του Front-End](#ενότητα-1) <br/>
[-Ενότητα 2: Δημιουργία του Server](#ενότητα-2)<br/>
[-Ενότητα 3: Δημιουργία της Βάσης Δεδομένων](#ενότητα-3)<br/>
[-Ενότητα 4: Docker](#ενότητα-4)

# Ομάδα
1. Χρήστος Κόκκαλης, 19390090
2. Παναγιώτης Γεωργίου, 19390260

# Taskzy
Το Taskzy είναι ένα ToDo app, δηλαδή μια διαδικτυακή εφαρμογή που αναπτύχθηκε χρησιμοποιώντας React.js, Node.js και Postgres SQL ως βάση δεδομένων. Παρέχει στους χρήστες μια πλατφόρμα για την αποτελεσματική και αποδοτική διαχείριση των εργασιών τους. Το front-end της εφαρμογής έχει κατασκευαστεί με τη χρήση του React.js, μιας δημοφιλούς βιβλιοθήκης JavaScript για την κατασκευή UI. Προσφέρει μια ευέλικτη και διαδραστική user experience, επιτρέποντας στους χρήστες να δημιουργούν, να ενημερώνουν και να διαγράφουν εργασίες εύκολα. Το back-end της εφαρμογής τροφοδοτείται από το Node.js, το οποίο χειρίζεται την επιχειρησιακή λογική και χρησιμεύει ως διεπαφή μεταξύ του front-end και της βάσης δεδομένων. Η Postgres SQL χρησιμοποιείται ως βάση δεδομένων για την ασφαλή και αποτελεσματική αποθήκευση και διαχείριση των δεδομένων των εργασιών. Για την απλοποίηση της διαδικασίας ανάπτυξης, ολόκληρη η εφαρμογή είναι containerized με τη χρήση του Docker, εξασφαλίζοντας εύκολη φορητότητα και επεκτασιμότητα σε διαφορετικά περιβάλλοντα. Αξιοποιώντας αυτές τις τεχνολογίες, το Taskzy έχει ως στόχο να παρέχει στους χρήστες μια ισχυρή και φιλική προς το χρήστη λύση διαχείρισης εργασιών.

![home-screen](https://github.com/MinistryOrg/ToDoApp/assets/29844061/46ebca6a-6d9b-4ffc-9761-95df97202d4e)

![auth-screen](https://github.com/MinistryOrg/ToDoApp/assets/29844061/a256e764-565c-4918-a0d4-7e3950c73009)

# Εγκατάσταση Εργαλείων

Εγκατάσταση Node.js
```shell
sudo apt install nodejs
```

Δημιουργία projectκαι εγκατάσταση Reacr.js
```shell
npm --version
npm install -g create-react-app
npx create-react-app todoapp
npm install react-cookie
```
Επείδη μέσα στο project χρησιμοποιούμε τα cookies θα πρέπει να γίνουν εγκατάσταση χειροκίνητα σε περίπτωση που εμφανιστεί κάποιο error κατά την διάρκεια του compilation.

Εγκατάσταση Docker
```shell
sudo dnf install docker
```

# Ενότητα 1.
## Δημιουργία του Client και του Front-End

Ο φάκελος client στο React project περιέχει τα στοιχεία και τα αρχεία που είναι απαραίτητα για το frontend της εφαρμογής Taskzy. Ας ρίξουμε μια ματιά σε κάθε αρχείο και στον αντίστοιχο σκοπό του:

   1. **App.js**: Αυτό το αρχείο χρησιμεύει ως σημείο εισόδου για την εφαρμογή React. Περιέχει τα κύρια components για να μπορεί αν τρέξει η εφαρμογή.
   2. **index.css**: Αυτό το αρχείο περιέχει τα στυλ CSS ειδικά για την εφαρμογή. 
   3. **index.js**: Αυτό το αρχείο είναι υπεύθυνο για την απόδοση της εφαρμογής React στο DOM. Συνήθως εισάγει το αρχείο *App.js* και το απεικονίζει μέσα σε ένα καθορισμένο στοιχείο HTML στην ιστοσελίδα.

Εντός του πακέτου components:

   1. **Auth.js**: Το αρχείο χειρίζεται τη λειτουργικότητα ελέγχου ταυτότητας της εφαρμογής σας. Περιλαμβάνει λειτουργίες όπως φόρμες σύνδεσης και εγγραφής.

   2. **ListHeader.js**: Aναπαριστά το τμήμα κεφαλίδας της λίστας εργασιών της εφαρμογής. Περιλαμβάνει δύο κουμπιά για την προσθήκη νέων εργασιών και για την αποσύνδεση του χρήστη καθώς και ένα μήνυμα καλωσορίσματος.

   3. **ListItem.js**: Το αρχείο εμφανίζει ένα μεμονωμένο στοιχείο εργασίας στη λίστα todo. Περιλαμβάνει χαρακτηριστικά όπως ο τίτλος της εργασίας, η κατάσταση καθώς και κουμπιά για την επεξεργασία ή τη διαγραφή εργασιών.

   4. **Modal.js**: Το αρχείο είναι υπεύθυνο για την απόδοση ενός modal πλαισίου διαλόγου στην εφαρμογή. Χρησιμοποείται για την τροποποιήση των εργασίων και την ενημέρωση της κατάστασης του.

   5. **ProgressBar.js**: Αυτό το αρχείο περιέχει ένα component μπάρας προόδου που χρησιμοποιείται για την απεικόνιση της κατάστασης ολοκλήρωσης εργασιών.

Κάθε αρχείο παίζει συγκεκριμένο ρόλο στη λειτουργικότητα και τη διεπαφή χρήστη της εφαρμογής Taskzy, επιτρέποντας στους χρήστες να πιστοποιούνται, να διαχειρίζονται εργασίες και να αλληλεπιδρούν με διάφορα μέρη της εφαρμογής.

# Ενότητα 2.
## Δημιουργία του Server

Αυτός ο κώδικας είναι ένας μικρός server Express.js που παρέχει API endpoints για την εφαρμογή Taskzy. Ακούει σε μια καθορισμένη θύρα (η οποία ανακτάται από τη μεταβλητή process.env.PORT ή είναι προεπιλεγμένη σε 8000). Ο server συνδέεται με μια βάση δεδομένων και χειρίζεται τις ενέργεις της.

Ο κώδικας περιλαμβάνει τα ακόλουθα τελικά σημεία API:

  + `POST /todos`: Προσθέτει ένα νέο στοιχείο todo στη βάση δεδομένων.
  + `GET /todos/:userEmail`: Ανακτά όλα τα στοιχεία todo για έναν συγκεκριμένο χρήστη με βάση το email του.
  + `DELETE /todos/:id`: Διαγράφει ένα στοιχείο todo από τη βάση δεδομένων με βάση το αναγνωριστικό του.
  + `PUT /todos/:id`: Ενημερώνει ένα στοιχείο todo στη βάση δεδομένων με βάση το αναγνωριστικό του.
  + `POST /signup`: Χειρίζεται την εγγραφή χρήστη εισάγοντας έναν νέο χρήστη με το email του και τον κατακερματισμένο κωδικό πρόσβασης στη βάση δεδομένων. Δημιουργεί επίσης ένα JSON Web Token (JWT) για έλεγχο ταυτότητας.
    Xρησιμοποιούμε το bcrypt το οποίο κρυπτογραφεί τον κωδικό που εισάγει ο χρήστης.
  + `POST /login`: Χειρίζεται την είσοδο του χρήστη με την επαλήθευση του παρεχόμενου email και του κωδικού πρόσβασης ο οποίος ελέγχεται με την χρήση της bcrypt.compare με τα  αποθηκευμένα δεδομένα του χρήστη στη βάση           δεδομένων. Εάν είναι επιτυχής, επιστρέφει ένα JWT για έλεγχο ταυτότητας.

Ο διακομιστής έχει ρυθμιστεί ώστε να χρησιμοποιεί το ενδιάμεσο λογισμικό Express για την ενεργοποίηση του CORS (Cross-Origin Resource Sharing) και την ανάλυση του JSON στα σώματα των αιτήσεων. Μόλις ο διακομιστής εκτελεστεί, καταγράφει το μήνυμα "Server running on PORT" ακολουθούμενο από τον πραγματικό αριθμό θύρας.

# Ενότητα 3
## Δημιουργία της Βάσης Δεδομένων
Η εφαρμογή χρησιμοποιεί Porstgres Sql.

```sql
CREATE DATABASE todoapp;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(200),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);
```
```sql
const Pool = require('pg').Pool

const pool = new Pool ({
    user: "postgres",
    password : "your_passoword",
    host : "localhost",
    port: 5432,
    database : 'todoapp'
})

module.exports = pool
```
# Ενότητα 4
## Docker

Η εφαρμογή περιέχει 3 docker files client, server, database. Επίσης περιέχει και ένα docker compose yml το οποίο είναι υπεύθυνο για την επικοικωνία των docker file, ώστε να γίνεται ένα ενιαίο built και για τα 3 αρχεία ταυτόχρονα.

Δημιουργία docker file Client:
```Dockerfile
# Use the official Node.js image as the base
FROM node:14-alpine
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install dependencies
RUN npm install
# Install react-cookie
RUN npm install react-cookie
# Copy the client code
COPY . .
# Expose the necessary port
EXPOSE 3000
# Start the client application
CMD ["npm", "start"]
```
Δημιουργία docker file server:
```Dockerfile
# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code
COPY . .

# Expose the necessary port
EXPOSE 4000

# Start the server application
CMD ["npm", "start"]
```
Δημιουργία docker file database:
```Dockerfile
# Use a base image with PostgreSQL installed
FROM postgres:latest
# Copy SQL script to create tables
COPY init.sql /docker-entrypoint-initdb.d/init.sql
```
Docker yml:
```Dockerfile
version: '3'
services:
  client:
    build:
      context: ./client
    ports:
      - 3000:3000
    depends_on:
      - server
  server:
    build:
      context: ./server
    ports:
      - 8000:8000
    depends_on:
      - db
  db:
    build:
      context: ./db
    ports:
      - 5430:5432
    environment:
      - POSTGRES_DB=todoapp
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=’your_password’
```
