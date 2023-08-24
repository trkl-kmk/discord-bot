import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";

// Simple test command
const TEST_COMMAND = {
	name: "test",
	description: "Basic command",
	type: 1,
};
const PUMDADA = {
	name: "pum",
	description: "DADA",
	type: 1,
};
const Vibo = {
	name: "Vibosin",
	description: "Vibo",
	type: 1,
};

const ALL_COMMANDS = [TEST_COMMAND, PUMDADA, Vibo];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
