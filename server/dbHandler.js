const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient(/*{ log: ['query', 'info']}*/)
exports.prisma = prisma