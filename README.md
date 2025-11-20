# SDI Expertise Website

Site web de SDI Expertise - Expert en diagnostics immobiliers et études techniques.

## Architecture du Projet

Ce projet suit les principes de la **Clean Architecture** pour assurer une séparation claire des responsabilités, une meilleure testabilité et une maintenance simplifiée.

### Structure des Dossiers

```
src/
├── Domain/                    # Couche Domaine (Business Logic)
│   ├── Models/               # Entités métier
│   │   ├── Article.ts
│   │   ├── Diagnostic.ts
│   │   ├── Expertise.ts
│   │   ├── Testimonial.ts
│   │   └── index.ts
│   └── Repositories/         # Interfaces des repositories
│       ├── IArticleRepository.ts
│       ├── IDiagnosticRepository.ts
│       ├── IExpertiseRepository.ts
│       ├── ITestimonialRepository.ts
│       └── index.ts
│
├── Infrastructure/            # Couche Infrastructure
│   ├── Data/
│   │   └── Mocks/            # Données mockées
│   │       ├── articles.mock.ts
│   │       ├── diagnostics.mock.ts
│   │       ├── expertises.mock.ts
│   │       ├── testimonials.mock.ts
│   │       └── index.ts
│   ├── Repositories/         # Implémentations des repositories
│   │   ├── ArticleRepository.ts
│   │   ├── DiagnosticRepository.ts
│   │   ├── ExpertiseRepository.ts
│   │   ├── TestimonialRepository.ts
│   │   └── index.ts
│   └── DependencyInjection.ts # Configuration de l'injection de dépendances
│
├── UseCase/                   # Couche Cas d'Usage
│   ├── GetAllArticles.ts
│   ├── GetAllDiagnostics.ts
│   ├── GetAllExpertises.ts
│   ├── GetAllTestimonials.ts
│   ├── GetArticleById.ts
│   ├── GetDiagnosticById.ts
│   ├── GetFeaturedArticles.ts
│   ├── GetFeaturedDiagnostics.ts
│   └── index.ts
│
└── UserInterface/             # Couche Présentation
    ├── components/           # Composants réutilisables
    │   ├── layout/          # Composants de layout (Header, Footer, etc.)
    │   ├── sections/        # Sections de page
    │   ├── shared/          # Composants partagés
    │   └── ui/              # Composants UI de base
    └── screens/             # Pages/Écrans de l'application
```

## Principes de la Clean Architecture

### 1. Domain (Domaine)

Le cœur de l'application qui contient :
- **Models** : Les entités métier (Article, Diagnostic, Expertise, Testimonial)
- **Repositories Interfaces** : Les contrats que les repositories doivent respecter

**Caractéristiques :**
- Indépendant de toute technologie
- Aucune dépendance externe
- Contient uniquement la logique métier pure

### 2. Infrastructure

La couche qui gère les détails techniques :
- **Data/Mocks** : Données simulées pour le développement
- **Repositories** : Implémentations concrètes des interfaces du domaine
- **DependencyInjection** : Configuration centralisée des dépendances

**Caractéristiques :**
- Implémente les interfaces définies dans le Domain
- Peut être facilement remplacée (ex: passer de mocks à une vraie API)
- Gère les sources de données

### 3. UseCase (Cas d'Usage)

Les actions métier que l'application peut effectuer :
- `GetAllArticles` : Récupère tous les articles
- `GetFeaturedArticles` : Récupère les articles mis en avant
- `GetAllDiagnostics` : Récupère tous les diagnostics
- etc.

**Caractéristiques :**
- Orchestrent les opérations métier
- Utilisent les repositories via leurs interfaces
- Indépendants de l'UI

### 4. UserInterface

La couche de présentation :
- **components** : Tous les composants React
- **screens** : Les pages de l'application

**Caractéristiques :**
- Utilise les UseCases pour récupérer/modifier les données
- Ne contient aucune logique métier
- Focalisée sur l'affichage et l'interaction utilisateur

## Flux de Données

```
UserInterface → UseCase → Repository Interface → Repository Implementation → Data Source (Mock)
```

### Exemple : Afficher les témoignages

1. Le composant `TestimonialsSection` monte
2. Il appelle `useCases.getAllTestimonials.execute()`
3. Le UseCase `GetAllTestimonials` utilise l'interface `ITestimonialRepository`
4. L'implémentation `TestimonialRepository` retourne les données du mock
5. Les données sont affichées dans le composant

## Injection de Dépendances

Le fichier `Infrastructure/DependencyInjection.ts` configure toutes les dépendances :

```typescript
const testimonialRepository = new TestimonialRepository();
const getAllTestimonials = new GetAllTestimonials(testimonialRepository);

export const useCases = {
  getAllTestimonials,
  // ... autres use cases
};
```

Les composants peuvent ensuite importer et utiliser ces use cases :

```typescript
import { useCases } from '../../../Infrastructure/DependencyInjection';

useEffect(() => {
  useCases.getAllTestimonials.execute().then(setTestimonials);
}, []);
```

## Avantages de cette Architecture

### 1. Séparation des Responsabilités
Chaque couche a un rôle bien défini et ne dépend pas des détails d'implémentation des autres couches.

### 2. Testabilité
- Les UseCases peuvent être testés indépendamment
- Les repositories peuvent être mockés facilement
- La logique métier est isolée

### 3. Maintenabilité
- Structure claire et prévisible
- Facile de localiser le code
- Modifications isolées dans leur couche respective

### 4. Évolutivité
- Facile de remplacer les mocks par une vraie API
- Possibilité d'ajouter de nouvelles sources de données
- Simple d'ajouter de nouveaux use cases

### 5. Réutilisabilité
- Les use cases peuvent être réutilisés dans différents composants
- Les modèles du domaine sont partagés dans toute l'application
- Les repositories peuvent être utilisés par plusieurs use cases

## Migration Future

Pour passer des mocks à une vraie API :

1. Créer de nouvelles implémentations de repositories (ex: `ApiArticleRepository`)
2. Mettre à jour `DependencyInjection.ts` pour utiliser les nouveaux repositories
3. **Aucun changement nécessaire** dans les UseCases ou l'UserInterface

```typescript
// Avant
const articleRepository = new ArticleRepository(); // Mock

// Après
const articleRepository = new ApiArticleRepository(); // API
```

## Technologies Utilisées

- **React** : Bibliothèque UI
- **TypeScript** : Typage statique
- **React Router** : Navigation
- **Tailwind CSS** : Styles
- **Shadcn/UI** : Composants UI
- **Vite** : Build tool

## Commandes

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build
```

## Contribution

Lors de l'ajout de nouvelles fonctionnalités :

1. **Domain** : Créer les modèles et interfaces de repository nécessaires
2. **Infrastructure** : Implémenter les repositories et ajouter les mocks
3. **UseCase** : Créer les cas d'usage
4. **UserInterface** : Utiliser les use cases dans les composants

Cette approche garantit une architecture cohérente et maintenable.
