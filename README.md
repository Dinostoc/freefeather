This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Les packages à installer sont dans le fichier all-npm-install.txt à la racine du projet.
Pour un rapide rappel :

```bash
npm install -D tailwindcss postcss autoprefixer
npm install react-icons
npm intall zustand
npm install react-hot-toast
npm i -D prisma
npm install next-auth @prisma/client @next-auth/prisma-adapter
npm install bcrypt
npm install -D @types/bcrypt
npm install query-string
npm install next-cloudinary
npm i react-stars
npm i --save-dev @types/react-stars
```

Pour lancer le projet :
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) avec un navigateur web pour voir le projet.


## Modification des URL des bases de données
Les URL à modifier sont dans le fichier .env. 
Les services utilisés pour l'instant sont MongoDB et Cloudinary.




## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
