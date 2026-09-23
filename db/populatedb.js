const { Client } = require("pg");

const SQL = `
INSERT INTO messages (username, text)
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: "postgresql://lanma:9955@localhost:5432/mini_message_board",
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
}

main();