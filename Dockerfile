# Use Bun's official image
FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies into temp directory
# This will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock* /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Copy node_modules from temp directory
# Then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Build the application using TanStack Start
ENV NODE_ENV=production
RUN bun run build

# Final stage - serve the built application
FROM base AS release
COPY --from=prerelease /app/.output /app/.output

# Expose port
EXPOSE 3000

# Start the TanStack Start server
CMD ["bun", "run", ".output/server/index.mjs"]
