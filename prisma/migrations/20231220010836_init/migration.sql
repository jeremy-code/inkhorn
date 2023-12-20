-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "instructor" TEXT NOT NULL,
    "schedule" TIMESTAMP(3)[],
    "semester" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
