# Usamos la imagen de nginx para servir archivos estáticos
FROM nginx:alpine

# Copiar los archivos de la app al directorio que nginx usa
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
