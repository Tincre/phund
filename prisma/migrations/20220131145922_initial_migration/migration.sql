-- CreateTable
CREATE TABLE "UserSession" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "email" TEXT,
    "data" JSONB,

    CONSTRAINT "UserSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSession_sessionId_key" ON "UserSession"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSession_email_sessionId_key" ON "UserSession"("email", "sessionId");
