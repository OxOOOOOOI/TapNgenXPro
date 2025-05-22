# TapNgen

Un générateur de texte simple et sécurisé.

## Installation

1. Clonez ce dépôt
2. Configurez le fichier `.env` avec vos propres mots de passe :
   ```
   ADMIN_PASSWORD=votre_mot_de_passe_admin
   ENCRYPTION_KEY=votre_cle_de_chiffrement
   ```
3. Ouvrez `index.html` dans votre navigateur

## Sécurité

- Les mots de passe sont chiffrés avec une clé personnalisée
- L'accès admin est protégé par un mot de passe
- Les mots de passe utilisateurs sont stockés de manière sécurisée
- Protection contre les outils de développement

## Utilisation

1. Accédez à l'interface principale avec le mot de passe utilisateur
2. Pour gérer les mots de passe, utilisez l'interface admin
3. Les mots de passe peuvent être exportés/importés de manière sécurisée

## Configuration de sécurité

### Fichier .env
Le projet utilise un fichier `.env` pour stocker les informations sensibles. Ce fichier ne doit **jamais** être partagé ou exposé publiquement.

Pour configurer votre installation :

1. Copiez le fichier `.env.example` vers `.env` :
   ```
   cp .env.example .env
   ```

2. Modifiez le fichier `.env` avec vos propres valeurs :
   ```
   ADMIN_PASSWORD=VotreMotDePasseAdmin
   ENCRYPTION_KEY=VotreCléDeChiffrement
   ```

3. Assurez-vous que le fichier `.env` est listé dans votre `.gitignore` pour ne jamais être envoyé sur GitHub ou tout autre dépôt public.

### Protection du fichier .env

Le fichier `.htaccess` est configuré pour empêcher l'accès direct au fichier `.env` sur votre serveur web.

### Protection du panneau d'administration

Le panneau d'administration est protégé par un mot de passe stocké dans le fichier `.env`. 
Pour renforcer la sécurité :

- Le système limite les tentatives de connexion (5 tentatives maximum avant blocage temporaire)
- Les mots de passe sont chiffrés avant d'être stockés dans le localStorage du navigateur
- La clé de chiffrement est chargée depuis le fichier `.env`

### Hébergement

Pour une sécurité optimale, hébergez ce site sur un serveur avec HTTPS activé.

## Utilisation de Git

Si vous utilisez Git pour versionner ce projet :

1. **Ne jamais** ajouter le fichier `.env` à votre dépôt
2. Assurez-vous que `.env` est bien listé dans votre fichier `.gitignore`
3. Utilisez le fichier `.env.example` comme modèle pour les autres développeurs

Si vous avez accidentellement exposé votre fichier `.env` sur un dépôt public :
1. Supprimez-le immédiatement du dépôt
2. Changez tous les mots de passe et clés qui y étaient stockés
3. Créez un nouveau fichier `.env` avec de nouvelles valeurs

## Contact

Pour toute assistance, contactez le support TapNgen via WhatsApp au +212660245937 