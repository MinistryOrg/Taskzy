# Use a base image with PostgreSQL installed
FROM postgres:latest


# Copy SQL script to create tables
COPY init.sql /docker-entrypoint-initdb.d/init.sql

