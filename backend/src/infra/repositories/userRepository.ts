import prisma from "../prisma";

export class UserRepository {
  public async create(data: User) {
    const item = await prisma.users.create({
      data,
    });

    return item as User;
  }

  public async loadById(id: string) {
    const user = await prisma.users.findFirst({
      where: {
        id,
      },
    });
    return user as User;
  }

  public async loadByEmail(email: string) {
    const item = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    return item as User;
  }
}

const mockedUser: User = {
  id: "123",
  name: "edusantana",
  email: "eduardosantanavidal@gmail.com",
  password: "eduardo123",
};
export class UserRepositoryInMemory {
  private items: User[] = [mockedUser];

  public async loadById(id: string) {
    const verifyUserExists = this.items.filter((i) => i.id === id);
    if (verifyUserExists.length > 0) return verifyUserExists[0];
    return null;
  }
}
