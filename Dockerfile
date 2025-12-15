# =========================
# BASE IMAGE
# =========================
FROM node:20-alpine AS base
# Install libc6-compat for compatibility
RUN apk add --no-cache libc6-compat curl

# =========================
# DEPENDENCIES STAGE
# =========================
FROM base AS deps
WORKDIR /app
# Copy package.json and lock file for dependency installation
COPY package.json package-lock.json ./
# Install dependencies using npm
RUN npm ci

# =========================
# BUILD STAGE
# =========================
FROM base AS builder
WORKDIR /app
# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the application source code
COPY . .
# Define build-time arguments (e.g., API keys, environment URLs, etc.)
ARG NEXT_PUBLIC_BASE_URL
ARG CLERK_SECRET_KEY
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# Set environment variables for the build stage
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV CLERK_SECRET_KEY=$CLERK_SECRET_KEY
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
# Run the build command
RUN npm run build

# =========================
# FINAL PRODUCTION IMAGE
# =========================
FROM base AS runner
# Install libc6-compat for compatibility
RUN apk add --no-cache libc6-compat curl
WORKDIR /app
# Set runtime environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV CLERK_SECRET_KEY=$CLERK_SECRET_KEY
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

# Create and use a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy the necessary files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Change to the non-root user
USER nextjs
# Expose the app's port
EXPOSE 3000
# Set environment variables (runtime)
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
# Start the Next.js server
CMD ["npm", "run", "start"]