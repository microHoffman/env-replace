// TODO check what is the best way to test GH actions
//  currently we have few checks in test.yml CI

import { test } from "@jest/globals";

test("nothing", async () => {});

// test("should replace the string", async () => {
// 	const key = "HELLO";
// 	const value = "TEST";
// 	const file = "src/tests/.env";
// 	const envContent = await fs.readFile(file, "utf8");

// 	const result = envContent.replace(new RegExp(`${key}=.*`), `${key}=${value}`);

// 	const expected = `${key}=${value}`;

// 	expect(result).toBe(expected);
// });
