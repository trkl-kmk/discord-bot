import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";

// Simple test command
const TEST_COMMAND = {
	name: "test",
	description: "Basic command",
	type: 1,
};
const IP = {
name: "IP",
description: "Get MC server IP",
type: 1,
}

const ALL_COMMANDS = [TEST_COMMAND, IP];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
