# Utilisez une image de base, par exemple Nginx
FROM nginx:latest

# Copiez les fichiers de votre projet dans le répertoire de travail de l'image
COPY ./dist /usr/share/nginx/html

# Exposez le port sur lequel votre application web s'exécute (par exemple, 80 pour HTTP)
EXPOSE 80

# Commande à exécuter lorsque le conteneur démarre
CMD ["nginx", "-g", "daemon off;"]