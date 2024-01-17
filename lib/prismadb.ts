import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
};

const prismadb = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
// pscale_pw_3Bf3dKWxzRL8HEctz2ZcqZ3dqTZiE7MJyNeQ7yoQhxc