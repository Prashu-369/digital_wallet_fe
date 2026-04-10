#     # # Step 1: Build stage (Node.js for React/Vite)
#     # FROM node:18 AS build-stage
#     # WORKDIR /app
    
#     # # Install git to allow repo cloning
#     # RUN apt-get update && apt-get install -y git
    
#     # # Clone your frontend repo
#     # RUN git clone https://github.com/KadaliThanojKumar/DigitalWallet_FE.git .
    
#     # RUN npm install
#     # RUN npm run build

#     # # Step 2: Runtime stage (Tomcat for serving)
#     # FROM tomcat:9-jdk17
#     # RUN rm -rf /usr/local/tomcat/webapps/*

#     # # Copy React build output into Tomcat webapps
#     # COPY --from=build-stage /app/dist /usr/local/tomcat/webapps/digitalwallet

#     # EXPOSE 8082
#     # CMD ["catalina.sh", "run"]

#     # Step 1: Build stage (Node.js for React/Vite)
# # FROM node:18 AS build-stage
# # WORKDIR /app

# # # Install git
# # RUN apt-get update && apt-get install -y git

# # # Clone your frontend repo
# # RUN git clone https://github.com/KadaliThanojKumar/DigitalWallet_FE.git .

# # # Install dependencies ignoring peer conflicts
# # RUN npm install --legacy-peer-deps
# # RUN npm run build

# # # Step 2: Runtime stage (Tomcat)
# # FROM tomcat:9-jdk17
# # RUN rm -rf /usr/local/tomcat/webapps/*

# # # Copy build output
# # COPY --from=build-stage /app/dist /usr/local/tomcat/webapps/frontend

# # EXPOSE 8082
# # CMD ["catalina.sh", "run"]


# # FROM node:18 AS build-stage
# # WORKDIR /app

# # # Install git
# # RUN apt-get update && apt-get install -y git

# # # Clone your frontend repo
# # RUN git clone https://github.com/KadaliThanojKumar/DigitalWallet_FE.git .

# # # Install dependencies ignoring peer conflicts
# # RUN npm install --legacy-peer-deps
# # RUN npm run build

# # # Runtime stage with Tomcat
# # FROM tomcat:9-jdk17
# # RUN rm -rf /usr/local/tomcat/webapps/*

# # # Copy build output
# # COPY --from=build-stage /app/dist /usr/local/tomcat/webapps/frontend

# # EXPOSE 8080
# # CMD ["catalina.sh", "run"]



# # Stage 1: Build with Node.js
# FROM node:18 AS build-stage
# WORKDIR /app

# # Install git
# RUN apt-get update && apt-get install -y git

# # Clone frontend repo
# RUN git clone https://github.com/KadaliThanojKumar/Digital_wallet_fe.git .

# # Install dependencies and build
# RUN npm install --legacy-peer-deps
# RUN npm run build

# # # Stage 2: Runtime with Tomcat
# # FROM tomcat:9-jdk17
# # RUN rm -rf /usr/local/tomcat/webapps/*

# # # Copy build output
# # COPY --from=build-stage /app/dist /usr/local/tomcat/webapps/ROOT

# # # Add SPA routing fix
# # RUN mkdir -p /usr/local/tomcat/webapps/ROOT/WEB-INF
# # #COPY web.xml /usr/local/tomcat/webapps/ROOT/WEB-INF/web.xml
# # COPY --from=build-stage /app/web.xml /usr/local/tomcat/webapps/ROOT/WEB-INF/web.xml


# # EXPOSE 8080
# # CMD ["catalina.sh", "run"]

# # Stage 2: Runtime with Tomcat
# FROM tomcat:9-jdk17
# RUN rm -rf /usr/local/tomcat/webapps/*

# # Copy build output
# COPY --from=build-stage /app/dist /usr/local/tomcat/webapps/ROOT

# # Add SPA routing fix
# RUN mkdir -p /usr/local/tomcat/webapps/ROOT/WEB-INF

# ==============================
# Stage 1: Build React App
# ==============================
FROM node:18 AS build-stage
WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone your frontend repo
RUN git clone https://github.com/KadaliThanojKumar/Digital_wallet_fe.git .

# Install dependencies and build
RUN npm install --legacy-peer-deps
RUN npm run build


# ==============================
# Stage 2: Serve with Tomcat
# ==============================
FROM tomcat:9-jdk17

# Remove default Tomcat apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy built React app
COPY --from=build-stage /app/dist /usr/local/tomcat/webapps/ROOT

# Add SPA routing fix
RUN mkdir -p /usr/local/tomcat/webapps/ROOT/WEB-INF
COPY --from=build-stage /app/web.xml /usr/local/tomcat/webapps/ROOT/WEB-INF/web.xml

# Expose port
EXPOSE 8080

# Run Tomcat
CMD ["catalina.sh", "run"]

# COPY --from=build-stage /app/web.xml /usr/local/tomcat/webapps/ROOT/WEB-INF/web.xml

# EXPOSE 8080
# CMD ["catalina.sh", "run"]
