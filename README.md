# 📚 Livres App

Une application Fullstack permettant la gestion de livres : ajouter, modifier, supprimer et afficher la liste des livres.

- **Frontend** : [Next.js](https://nextjs.org/) (App Router)
- **Backend** : [NestJS](https://nestjs.com/) (API REST)
- **Base de données** : TypeORM (avec SQLite)

---

## 📁 Structure du projet

edacy/
├── backend/ # API NestJS
│ ├── src/
│ └── ...
├── frontend/ # Interface Next.js
│ ├── app/
│ └── ...
├── .gitignore
└── README.md


---

###  Installation & lancement en local

### 1. Cloner le dépôt

```bash
git clone https://github.com/papySaliou/edacy.git
cd edacy
```
#Backend (NestJS)

cd backend
npm install
npm run start:dev
Le backend démarre sur le port 5000 et utilise une base SQLite locale.

#Frontend (Next.js)

cd frontend
npm install
npm run dev
Le frontend démarre sur le port 3000

#### Fonctionnalités

Affichage de la liste des livres

Ajout d’un nouveau livre

Modification d’un livre existant

Suppression d’un livre

#### 🧾 Scripts utiles
Dans le dossier backend :

npm run start : démarrer en mode production

npm run start:dev : démarrer en mode développement (avec reload)

Dans le dossier frontend :

npm run dev : démarrer le serveur de dev Next.js

npm run build : construire l’app pour la production

npm run start : démarrer l’app construite

####### 🛠️ Technologies utilisées

- **Frontend**  
  - [Next.js](https://nextjs.org/) : framework React moderne avec App Router  
  - [React](https://reactjs.org/) : bibliothèque pour construire l’interface utilisateur  
  - [Axios](https://axios-http.com/) : client HTTP pour communiquer avec l’API backend  
  - [Tailwind CSS](https://tailwindcss.com/) (optionnel) : framework CSS utilitaire

- **Backend**  
  - [NestJS](https://nestjs.com/) : framework Node.js pour créer une API REST modulable  
  - [TypeORM](https://typeorm.io/) : ORM pour gérer la base de données SQLite  
  - [SQLite](https://www.sqlite.org/) : base de données légère embarquée

- **Outils**  
  - Node.js & npm : environnement d’exécution et gestionnaire de paquets  
  - Git & GitHub : gestion de version et hébergement du code source

# edacy
