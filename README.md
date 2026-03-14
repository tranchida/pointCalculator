# Point Calculator 4

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
