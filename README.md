# Point Calculator 4

Une application moderne pour calculer vos points nutritionnels.

## Caractéristiques
- **Backend rapide et léger** : Écrit en **Go 1.26** avec le framework web **Echo**.
- **Frontend réactif sans JS lourd** : Utilise **HTMX** pour actualiser instantanément les calculs sans recharger la page.
- **Zéro dépendance complexe** : Plus de `node_modules`. HTML et CSS sont entièrement embarqués dans le binaire Go (`//go:embed`).
- **Interface moderne** : Google Fonts (Outfit).
- Pas de base de données requise, les calculs se font instantanément.

## Installation et exécution

Assurez-vous d'avoir Go installé (version 1.26+), puis lancez simplement :

```bash
go run main.go
```

L'application sera accessible sur [http://localhost:8080](http://localhost:8080).

Pour compiler un binaire autonome (qui contiendra tous les assets) :
```bash
go build -o pointCalculator main.go
./pointCalculator
```

Le port peut être configuré via la variable d'environnement `PORT` :
```bash
PORT=3000 ./pointCalculator
```

## Déploiement sur internet

### Docker

Construire et lancer l'image Docker :
```bash
docker build -t pointcalculator .
docker run -p 8080:8080 pointcalculator
```

### Fly.io (recommandé, gratuit)

1. Installez [flyctl](https://fly.io/docs/hands-on/install-flyctl/) et connectez-vous :
   ```bash
   fly auth login
   ```
2. Initialisez et déployez l'application depuis la racine du projet :
   ```bash
   fly launch
   fly deploy
   ```
   Fly.io détectera automatiquement le `Dockerfile`. L'URL publique est affichée après le déploiement.

### Render (gratuit)

1. Créez un compte sur [render.com](https://render.com).
2. Créez un nouveau **Web Service** et connectez votre dépôt GitHub.
3. Sélectionnez **Docker** comme environnement. Render déploiera automatiquement l'application à chaque push.

### Railway

1. Créez un compte sur [railway.app](https://railway.app).
2. Créez un nouveau projet et importez votre dépôt GitHub.
3. Railway détecte le `Dockerfile` et déploie automatiquement l'application.
