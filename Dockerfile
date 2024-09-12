# Use the base nginx image
FROM nginx

# Copy the nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Create the log directory for nginx
RUN mkdir -p /var/log/nginx

# Health check file
RUN mkdir -p /usr/share/nginx/html/_ah && \
    echo "healthy" > /usr/share/nginx/html/_ah/health

# Add the React build files
ADD www/ /usr/share/nginx/html/

# Ensure all files are readable
RUN chmod -R a+r /usr/share/nginx/html
