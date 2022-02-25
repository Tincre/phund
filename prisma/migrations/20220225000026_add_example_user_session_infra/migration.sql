-- CreateTable
CREATE TABLE "ExampleUserSession" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "email" TEXT,
    "data" JSONB,

    CONSTRAINT "ExampleUserSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExampleUserSession_sessionId_key" ON "ExampleUserSession"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "ExampleUserSession_email_sessionId_key" ON "ExampleUserSession"("email", "sessionId");
