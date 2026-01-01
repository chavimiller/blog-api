passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

/*

model User {
  id            Int     @id @default(autoincrement())
  username      String  @unique
  password_hash String
  is_author     Boolean @default(false)

  posts    Post[]    @relation("UserPosts")
  comments Comment[] @relation("UserComments")
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)

  authorId Int
  author   User @relation("UserPosts", fields: [authorId], references: [id], onDelete: Cascade)

  comments Comment[]
}

model Comment {
  id      Int    @id @default(autoincrement())
  content String

  postId Int
  post   Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  authorId Int
  author   User @relation("UserComments", fields: [authorId], references: [id], onDelete: Cascade)
}


*/
